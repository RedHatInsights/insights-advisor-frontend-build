(self.webpackChunkadvisor_frontend=self.webpackChunkadvisor_frontend||[]).push([[313],{2622:(e,i,n)=>{"use strict";n.r(i),n.d(i,{default:()=>Ee});var t=n(92137),r=n(96156),a=n(28481),s=n(87757),c=n.n(s),l=n(57149),_=n(59303),o=n(56161),E=n(48716),d=n(39173),C=n(93264),u=n.n(C),V=n(97109),p=n(88931),m=n(71094),v=n(84785),f=n(75331),S=n(6202),g=n(96466),b=n(64107),h=n(44788),k=n(22910),N=n(96823),O=n(80765),R=n(76341),D=n(36001),P=n(42057),L=n(74057),y=n(61829),T=n(33739),U=n(46891),A=n(45697),w=n.n(A),I=n(49953),M=n(71355),Z=n(67336),B=n(74806),x=n(30893),K=n(36873),F=n(75989);function W(e,i){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);i&&(t=t.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),n.push.apply(n,t)}return n}function j(e){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?W(Object(n),!0).forEach((function(i){(0,r.Z)(e,i,n[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):W(Object(n)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))}))}return e}var H=1,G=50,z="",q=function(e){var i,n=e.tableProps,t=e.onSelectRows,r=e.rows,s=e.intl,c=e.rule,l=e.addNotification,_=e.items,o=e.afterDisableFn,E=e.onSortFn,d=e.filters,V=e.searchText,p=e.setSearchText,m=(0,C.useRef)(null),v=(0,C.useState)([]),f=(0,a.Z)(v,2),S=f[0],g=f[1],b=(0,C.useState)(!1),k=(0,a.Z)(b,2),N=k[0],O=k[1],R=(0,C.useState)(),D=(0,a.Z)(R,2),P=D[0],A=D[1],w={1:"display_name",2:"updated"},M=function(e){O(e)},B=function(){A(!0),g(_),t(0,!0)},K=[{label:s.formatMessage(x.Z.name).toLowerCase(),filterValues:{key:"text-filter",onChange:function(e,i){return p(i)},value:V}}];return(0,C.useEffect)((function(){r&&function(e){P?A(!1):g(e.filter((function(e){return!0===e.selected})).map((function(e){return e.id})))}(r)}),[r]),u().createElement(u().Fragment,null,N&&u().createElement(h.Z,{handleModalToggle:M,isModalOpen:N,rule:c,afterFn:o,hosts:S}),u().createElement(T.Z,{disableDefaultColumns:!0,ref:m,items:_,sortBy:(i=Number(Object.entries(w).find((function(e){return e[1]===d.sort||"-".concat(e[1])===d.sort}))[0]),{index:i,key:2!==i?w[i]:"updated",direction:"-"===d.sort[0]?"desc":"asc"}),onSort:function(e){var i=e.index,n=e.direction;return E("".concat("asc"===n?"":"-").concat(w[i]))},onRefresh:function(e){z!==c.rule_id&&(H=1,G=50),m&&m.current&&(H=e.page,G=e.per_page,z=c.rule_id,m.current.onRefreshData(e))},filterConfig:{items:K},page:H,total:_.length,perPage:G,tableProps:n,dedicatedAction:u().createElement(I.Z,{key:"remediation-button",isDisabled:0===S.length||0===c.playbook_count,dataProvider:function(){return{issues:[{id:"advisor:".concat(c.rule_id),description:c.description}],systems:S}},onRemediationCreated:function(e){return function(e){t(-1,!1);try{e.remediation&&l(e.getNotification())}catch(e){l({variant:"danger",dismissable:!0,title:s.formatMessage(x.Z.error),description:"".concat(e)})}}(e)}},u().createElement(y.ZP,{size:"sm",className:"ins-c-background__default"})," ",s.formatMessage(x.Z.remediate)),actionsConfig:{actions:["",{label:s.formatMessage(x.Z.disableRuleForSystems),props:{isDisabled:0===S.length},onClick:function(){return M(!0)}}]},bulkSelect:{count:S.length,items:[{title:s.formatMessage(x.Z.selectNone),onClick:function(){t(-1,!1)}},j({},_&&_.length>G?{title:s.formatMessage(x.Z.selectPage,{items:G}),onClick:function(){t(0,!0)}}:{}),j({},_&&_.length>0?{title:s.formatMessage(x.Z.selectAll,{items:_.length||0}),onClick:function(){B()}}:{})],checked:S.length===_.length?1:S.length===G?null:0,onSelect:function(){S.length>0?t(-1,!1):B()}},fallback:U.Z,onLoad:function(e){var i=e.mergeWithEntities,n=e.INVENTORY_ACTION_TYPES;(0,Z.JH)().register(j({},i((0,F.Vy)([{title:s.formatMessage(x.Z.name),transforms:[L.sortable],key:"display_name"},{title:s.formatMessage(x.Z.lastSeen),transforms:[L.sortable],key:"updated"}],n))))}}))};q.propTypes={rows:w().arrayOf(w().shape({id:w().string,selected:w().bool})),onSelectRows:w().func,items:w().array,tableProps:w().any,intl:w().any,rule:w().object,addNotification:w().func,afterDisableFn:w().func,onSortFn:w().func,filters:w().object,setSearchText:w().func,searchText:w().string};const J=(0,B.ZP)((0,K.Z)((0,p.connect)((function(e){var i=e.entities,n=e.props;return j({rows:i&&i.rows},n)}),(function(e){return{addNotification:function(i){return e((0,M.wN)(i))},onSelectRows:function(i,n){return e({type:"SELECT_ENTITY",payload:{id:i,selected:n}})}}}))(q)));var Y=n(23218),X=n(86350),Q=n(34702),$=n(87533),ee=n(83808),ie=n(34348),ne=n(35224),te=n(95358),re=[{rule_id:"CVE_2015_3456|VENOM_CVE_2015_3456",name:'CVE-2015-3456: "VENOM" QEMU privilege escalation',description:'CVE-2015-3456: "VENOM" QEMU privilege escalation',cves:["CVE-2015-3456"]},{rule_id:"CVE_2015_5600|OPENSSH_CVE_2015_5600",name:"CVE-2015-5600: OpenSSH vulnerable to password guessing attack",description:"CVE-2015-5600: OpenSSH vulnerable to password guessing attack",cves:["CVE-2015-5600"]},{rule_id:"CVE_2015_7181_2_3_nss_nspr|NSS_NSPR_CVE_2015_7181_2_3",name:"CVE-2015-7181, CVE-2015-7182, CVE-2015-7183: NSS/NSPR privilege escalation",description:"CVE-2015-7181, CVE-2015-7182, CVE-2015-7183: NSS/NSPR privilege escalation",cves:["CVE-2015-7181","CVE-2015-7182","CVE-2015-7183"]},{rule_id:"CVE_2015_7501_commons_collections|COMMONS_COLLECTIONS_CVE_2015_7501_IN_USE",name:"CVE-2015-7501: Java application server code execution",description:"CVE-2015-7501: Java application server code execution",cves:["CVE-2015-7501"]},{rule_id:"CVE_2015_7547_glibc|GLIBC_CVE_2015_7547",name:"CVE-2015-7547: libresolv code execution",description:"CVE-2015-7547: libresolv code execution",cves:["CVE-2015-7547"]},{rule_id:"CVE_2016_0728_kernel|KERNEL_CVE-2016-0728",name:"CVE-2016-0728: kernel privilege escalation in key management subsystem",description:"CVE-2016-0728: kernel privilege escalation in key management subsystem",cves:["CVE-2016-0728"]},{rule_id:"CVE_2016_0800_openssl_drown|OPENSSL_CVE_2016_0800_DROWN",name:'CVE-2016-0800: "DROWN" OpenSSL session decryption',description:'CVE-2016-0800: "DROWN" OpenSSL session decryption',cves:["CVE-2016-0800"]},{rule_id:"CVE_2016_0800_openssl_drown|OPENSSL_CVE_2016_0800_DROWN_INT_LISTENING",name:'CVE-2016-0800: "DROWN" OpenSSL session decryption',description:'CVE-2016-0800: "DROWN" OpenSSL session decryption with listening processes',cves:["CVE-2016-0800"]},{rule_id:"CVE_2016_0800_openssl_drown|OPENSSL_CVE_2016_0800_DROWN_LISTENING",name:'CVE-2016-0800: "DROWN" OpenSSL session decryption',description:'CVE-2016-0800: "DROWN" OpenSSL session decryption with externally available processes',cves:["CVE-2016-0800"]},{rule_id:"CVE_2016_0800_openssl_drown|OPENSSL_CVE_2016_0800_DROWN_USED",name:'CVE-2016-0800: "DROWN" OpenSSL session decryption',description:'CVE-2016-0800: "DROWN" OpenSSL session decryption with running services',cves:["CVE-2016-0800"]},{rule_id:"CVE_2016_0800_openssl_drown|OPENSSL_CVE_2016_0800_SPECIAL_DROWN",name:'CVE-2016-0800: "DROWN" OpenSSL session decryption',description:'CVE-2016-0800: "Special DROWN" OpenSSL very efficient session decryption',cves:["CVE-2016-0800"]},{rule_id:"CVE_2016_0800_openssl_drown|OPENSSL_CVE_2016_0800_SPECIAL_DROWN_LISTEN",name:'CVE-2016-0800: "DROWN" OpenSSL session decryption',description:'CVE-2016-0800: "Special DROWN" OpenSSL very efficient session decryption with listening processes',cves:["CVE-2016-0800"]},{rule_id:"CVE_2016_0800_openssl_drown|OPENSSL_CVE_2016_0800_SPECIAL_DROWN_URGENT",name:'CVE-2016-0800: "DROWN" OpenSSL session decryption',description:'CVE-2016-0800: "Special DROWN" OpenSSL very efficient session decryption with externally available processes',cves:["CVE-2016-0800"]},{rule_id:"CVE_2016_0800_openssl_drown|OPENSSL_CVE_2016_0800_SPECIAL_DROWN_USED",name:'CVE-2016-0800: "DROWN" OpenSSL session decryption',description:'CVE-2016-0800: "Special DROWN" OpenSSL very efficient session decryption with running services',cves:["CVE-2016-0800"]},{rule_id:"CVE_2016_2315_24_git|GIT_CVE_2016_2315_24",name:"CVE-2016-2315, CVE-2016-2324: Git code execution via crafted packfile",description:"CVE-2016-2315, CVE-2016-2324: Git code execution via crafted packfile",cves:["CVE-2016-2315","CVE-2016-2324"]},{rule_id:"CVE_2016_2315_24_git|GIT_DAEMON_CVE_2016_2315_24",name:"CVE-2016-2315, CVE-2016-2324: Git code execution via crafted packfile",description:"CVE-2016-2315, CVE-2016-2324: Git daemon remote code execution via crafted packfile",cves:["CVE-2016-2315","CVE-2016-2324"]},{rule_id:"CVE_2016_2776_bind|BIND_CVE_2016_2776",name:"CVE-2016-2776: BIND denial of service via crafted DNS request",description:"CVE-2016-2776: BIND denial of service via crafted DNS request",cves:["CVE-2016-2776"]},{rule_id:"CVE_2016_3714_imagemagick|IMAGEMAGICK_CVE_2016_3714",name:"CVE-2016-3714: ImageMagick code execution",description:"CVE-2016-3714: ImageMagick code execution",cves:["CVE-2016-3714"]},{rule_id:"CVE_2016_5195_kernel|KERNEL_CVE_2016_5195_2",name:"CVE-2016-5195: kernel privilege escalation via permission bypass",description:"CVE-2016-5195: kernel privilege escalation via permission bypass",cves:["CVE-2016-5195"]},{rule_id:"CVE_2016_5696_kernel|KERNEL_CVE_2016_5696_URGENT",name:"CVE-2016-5696: kernel man-in-the-middle via payload injection",description:"CVE-2016-5696: kernel man-in-the-middle via payload injection",cves:["CVE-2016-5696"]},{rule_id:"CVE_2016_5696_kernel|KERNEL_CVE_2016_5696_WARN_2",name:"CVE-2016-5696: kernel man-in-the-middle via payload injection",description:"CVE-2016-5696: kernel man-in-the-middle via payload injection with incomplete mitigation",cves:["CVE-2016-5696"]},{rule_id:"CVE_2016_9962_docker|CVE_2015_9962_DOCKER_LESS_SEVERE_2",name:"CVE-2016-9962: Docker privilege escalation via ptrace",description:"CVE-2016-9962: Docker privilege escalation via ptrace",cves:["CVE-2016-9962"]},{rule_id:"CVE_2016_9962_docker|CVE_2015_9962_DOCKER_MORE_SEVERE_2",name:"CVE-2016-9962: Docker privilege escalation via ptrace",description:"CVE-2016-9962: Docker efficient privilege escalation via ptrace with outdated package",cves:["CVE-2016-9962"]},{rule_id:"CVE_2017_1000250_bluez|BLUEZ_CVE_2017_1000250",name:"CVE-2017-1000250: bluez information disclosure",description:"CVE-2017-1000250: bluez information disclosure",cves:["CVE-2017-1000250"]},{rule_id:"CVE_2017_1000251_kernel_blueborne|KERNEL_CVE_2017_1000251_LOADED_DOS",name:'CVE-2017-1000251: "Blueborne" kernel code execution',description:'CVE-2017-1000251: "Blueborne" kernel denial of service with loaded modules',cves:["CVE-2017-1000251"]},{rule_id:"CVE_2017_1000251_kernel_blueborne|KERNEL_CVE_2017_1000251_LOADED_RCE",name:'CVE-2017-1000251: "Blueborne" kernel code execution',description:'CVE-2017-1000251: "Blueborne" kernel code execution with loaded modules',cves:["CVE-2017-1000251"]},{rule_id:"CVE_2017_1000251_kernel_blueborne|KERNEL_CVE_2017_1000251_POSSIBLE_DOS",name:'CVE-2017-1000251: "Blueborne" kernel code execution',description:'CVE-2017-1000251: "Blueborne" kernel denial of service',cves:["CVE-2017-1000251"]},{rule_id:"CVE_2017_1000251_kernel_blueborne|KERNEL_CVE_2017_1000251_POSSIBLE_RCE",name:'CVE-2017-1000251: "Blueborne" kernel code execution',description:'CVE-2017-1000251: "Blueborne" kernel code execution',cves:["CVE-2017-1000251"]},{rule_id:"CVE_2017_1000253_loadelf|KERNEL_CVE_2017_1000253_MITIGATION_INCOMPLETE",name:"CVE-2017-1000253: kernel privilege escalation via SUID PIE binaries",description:"CVE-2017-1000253: kernel privilege escalation via SUID PIE binaries with incomplete mitigation",cves:["CVE-2017-1000253"]},{rule_id:"CVE_2017_1000253_loadelf|KERNEL_CVE_2017_1000253_VULNERABLE",name:"CVE-2017-1000253: kernel privilege escalation via SUID PIE binaries",description:"CVE-2017-1000253: kernel privilege escalation via SUID PIE binaries",cves:["CVE-2017-1000253"]},{rule_id:"CVE_2017_1000366_glibc|CVE_2017_1000364_KERNEL_CVE_2017_1000366_GLIBC_EXPLOITABLE",name:"CVE-2017-1000364, CVE-2017-1000366: kernel, glibc privilege escalation",description:"CVE-2017-1000364, CVE-2017-1000366: kernel, glibc privilege escalation",cves:["CVE-2017-1000364","CVE-2017-1000366"]},{rule_id:"CVE_2017_1000368_sudo|CVE_2017_1000368_SUDO_2",name:"CVE-2017-1000368: sudo privilege escalation due to incomplete bugfix",description:"CVE-2017-1000368: sudo privilege escalation due to incomplete bugfix",cves:["CVE-2017-1000368"]},{rule_id:"CVE_2017_1000405_kernel|KERNEL_CVE_2017_1000405_VULNERABLE",name:"CVE-2017-1000405: kernel memory corruption",description:"CVE-2017-1000405: kernel memory corruption",cves:["CVE-2017-1000405"]},{rule_id:"CVE_2017_12616_tomcat|TOMCAT_CVE_2017_12616_2",name:"CVE-2017-12616: Tomcat information disclosure",description:"CVE-2017-12616: Tomcat information disclosure",cves:["CVE-2017-12616"]},{rule_id:"CVE_2017_12616_tomcat|TOMCAT_CVE_2017_12616_USED_2",name:"CVE-2017-12616: Tomcat information disclosure",description:"CVE-2017-12616: Tomcat information disclosure with running process",cves:["CVE-2017-12616"]},{rule_id:"CVE_2017_13077_wpa_supplicant|CVE_2017_13077_ERROR",name:"CVE-2017-13077: wpa_supplicant man-in-the-middle",description:"CVE-2017-13077: wpa_supplicant man-in-the-middle with active wifi",cves:["CVE-2017-13077"]},{rule_id:"CVE_2017_13077_wpa_supplicant|CVE_2017_13077_WARN",name:"CVE-2017-13077: wpa_supplicant man-in-the-middle",description:"CVE-2017-13077: wpa_supplicant man-in-the-middle",cves:["CVE-2017-13077"]},{rule_id:"CVE_2017_14491_dnsmasq|CVE_2017_14491_ERROR",name:"CVE-2017-14491: dnsmasq code execution",description:"CVE-2017-14491: dnsmasq code execution with listening processes",cves:["CVE-2017-14491"]},{rule_id:"CVE_2017_14491_dnsmasq|CVE_2017_14491_WARN",name:"CVE-2017-14491: dnsmasq code execution",description:"CVE-2017-14491: dnsmasq code execution",cves:["CVE-2017-14491"]},{rule_id:"CVE_2017_2636_kernel|KERNEL_CVE_2017_2636",name:"CVE-2017-2636: kernel privilege escalation",description:"CVE-2017-2636: kernel privilege escalation",cves:["CVE-2017-2636"]},{rule_id:"CVE_2017_5461_nss|CVE_2017_5461_NSS_2",name:"CVE-2017-5461: NSS code execution",description:"CVE-2017-5461: NSS code execution",cves:["CVE-2017-5461"]},{rule_id:"CVE_2017_5715_cpu_virt|VIRT_CVE_2017_5715_CPU_3_DRACUTKERNEL",name:'CVE-2017-5715: "Spectre" Virtualization side-channel',description:'CVE-2017-5715: "Spectre" Virtualization side-channel in dracut and kernel',cves:["CVE-2017-5715"]},{rule_id:"CVE_2017_5715_cpu_virt|VIRT_CVE_2017_5715_CPU_3_ONLYDRACUT",name:'CVE-2017-5715: "Spectre" Virtualization side-channel',description:'CVE-2017-5715: "Spectre" Virtualization side-channel in dracut',cves:["CVE-2017-5715"]},{rule_id:"CVE_2017_5715_cpu_virt|VIRT_CVE_2017_5715_CPU_3_ONLYVIRT",name:'CVE-2017-5715: "Spectre" Virtualization side-channel',description:'CVE-2017-5715: "Spectre" Virtualization side-channel',cves:["CVE-2017-5715"]},{rule_id:"CVE_2017_5715_cpu_virt|VIRT_CVE_2017_5715_CPU_3_VIRTKERNEL",name:'CVE-2017-5715: "Spectre" Virtualization side-channel',description:'CVE-2017-5715: "Spectre" Virtualization and kernel side-channel',cves:["CVE-2017-5715"]},{rule_id:"CVE_2017_5753_4_cpu_kernel|KERNEL_CVE_2017_5753_4_CPU_ERROR_3",name:'CVE-2017-5753, CVE-2017-5754: "Spectre/Meltdown" CPU side-channel',description:'CVE-2017-5753, CVE-2017-5754: "Spectre/Meltdown" CPU side-channel',cves:["CVE-2017-5753","CVE-2017-5754"]},{rule_id:"CVE_2017_6074_kernel|KERNEL_CVE_2017_6074",name:"CVE-2017-6074: kernel privilege escalation via DCCP module",description:"CVE-2017-6074: kernel privilege escalation via DCCP module",cves:["CVE-2017-6074"]},{rule_id:"CVE_2017_7184_kernel|KERNEL_CVE_2017_7184_EXPLOITABLE_2",name:"CVE-2017-7184: kernel privilege escalation via CAP_NET_ADMIN capability",description:"CVE-2017-7184: kernel privilege escalation via CAP_NET_ADMIN capability",cves:["CVE-2017-7184"]},{rule_id:"CVE_2017_7494_samba|SAMBA_CVE_2017_7494_2",name:"CVE-2017-7494: Samba code execution via writeable share",description:"CVE-2017-7494: Samba code execution via writeable share",cves:["CVE-2017-7494"]},{rule_id:"CVE_2017_8779_rpc|CVE_2017_8779_BUG",name:'CVE-2017-8779: "rpcbomb" rpcbind denial of service',description:'CVE-2017-8779: "rpcbomb" rpcbind crash with certain versions',cves:["CVE-2017-8779"]},{rule_id:"CVE_2017_8779_rpc|CVE_2017_8779_VULNERABLE",name:'CVE-2017-8779: "rpcbomb" rpcbind denial of service',description:'CVE-2017-8779: "rpcbomb" rpcbind denial of service',cves:["CVE-2017-8779"]},{rule_id:"CVE_2017_8779_rpc|CVE_2017_8779_WARN",name:'CVE-2017-8779: "rpcbomb" rpcbind denial of service',description:'CVE-2017-8779: "rpcbomb" rpcbind memory leak',cves:["CVE-2017-8779"]},{rule_id:"CVE_2018_1000115_memcached|CVE_2018_1000115",name:"CVE-2018-1000115: memcached spoofed traffic amplification",description:"CVE-2018-1000115: memcached spoofed traffic amplification",cves:["CVE-2018-1000115"]},{rule_id:"CVE_2018_1002105_kubernetes|CVE_2018_1002105_KUBERNETES",name:"CVE-2018-1002105: kubernetes privilege escalation",description:"CVE-2018-1002105: kubernetes privilege escalation",cves:["CVE-2018-1002105"]},{rule_id:"CVE_2018_1002105_kubernetes|CVE_2018_1002105_KUBERNETES_RUNNING",name:"CVE-2018-1002105: kubernetes privilege escalation",description:"CVE-2018-1002105: kubernetes privilege escalation with running service",cves:["CVE-2018-1002105"]},{rule_id:"CVE_2018_1002105_kubernetes|CVE_2018_1002105_KUBERNETES_WONTFIX",name:"CVE-2018-1002105: kubernetes privilege escalation",description:"CVE-2018-1002105: kubernetes privilege escalation (no fix available for this version)",cves:["CVE-2018-1002105"]},{rule_id:"CVE_2018_1002105_kubernetes|CVE_2018_1002105_KUBERNETES_WONTFIX_RUNNING",name:"CVE-2018-1002105: kubernetes privilege escalation",description:"CVE-2018-1002105: kubernetes privilege escalation with running service (no fix available for this version)",cves:["CVE-2018-1002105"]},{rule_id:"CVE_2018_1102_ose_sti_builder|OSE_STI_BUILDER_CVE_2018_1102",name:"CVE-2018-1102: OpenShift remote code execution via S2I build",description:"CVE-2018-1102: OpenShift remote code execution via S2I build",cves:["CVE-2018-1102"]},{rule_id:"CVE_2018_1111_dhcp|ERROR_CVE_2018_1111_DHCP_2",name:"CVE-2018-1111: NetworkManager code execution",description:"CVE-2018-1111: NetworkManager code execution with DHCP enabled",cves:["CVE-2018-1111"]},{rule_id:"CVE_2018_1111_dhcp|WARN_CVE_2018_1111_DHCP_2",name:"CVE-2018-1111: NetworkManager code execution",description:"CVE-2018-1111: NetworkManager code execution",cves:["CVE-2018-1111"]},{rule_id:"CVE_2018_1112_glusterfs|GLUSTERFS_CVE_2018_1112",name:"CVE-2018-1112: glusterfs unrestricted access",description:"CVE-2018-1112: glusterfs unrestricted access",cves:["CVE-2018-1112"]},{rule_id:"CVE_2018_12130_cpu_kernel|CVE_2018_12130_CPU_KERNEL_BAD_CMDLINE",name:'CVE-2018-12126, CVE-2018-12127, CVE-2018-12130, CVE-2019-11091: "MDS" CPU side-channel',description:'CVE-2018-12126, CVE-2018-12127, CVE-2018-12130, CVE-2019-11091: "MDS" CPU side-channel mitigation disabled',cves:["CVE-2018-12126","CVE-2018-12127","CVE-2018-12130","CVE-2019-11091"]},{rule_id:"CVE_2018_12130_cpu_kernel|CVE_2018_12130_CPU_KERNEL_NEED_UPDATE",name:'CVE-2018-12126, CVE-2018-12127, CVE-2018-12130, CVE-2019-11091: "MDS" CPU side-channel',description:'CVE-2018-12126, CVE-2018-12127, CVE-2018-12130, CVE-2019-11091: "MDS" CPU side-channel',cves:["CVE-2018-12126","CVE-2018-12127","CVE-2018-12130","CVE-2019-11091"]},{rule_id:"CVE_2018_12130_cpu_kernel|CVE_2018_12130_CPU_KERNEL_VULNERABLE_2",name:'CVE-2018-12126, CVE-2018-12127, CVE-2018-12130, CVE-2019-11091: "MDS" CPU side-channel',description:'CVE-2018-12126, CVE-2018-12127, CVE-2018-12130, CVE-2019-11091: "MDS" CPU side-channel reported by kernel',cves:["CVE-2018-12126","CVE-2018-12127","CVE-2018-12130","CVE-2019-11091"]},{rule_id:"CVE_2018_12207_cpu_kernel|CVE_2018_12207_CPU_KERNEL_CMDLINE",name:"CVE-2018-12207: CPU systemwide denial of service",description:"CVE-2018-12207: CPU systemwide denial of service mitigation disabled",cves:["CVE-2018-12207"]},{rule_id:"CVE_2018_12207_cpu_kernel|CVE_2018_12207_CPU_KERNEL_FOR_SURE",name:"CVE-2018-12207: CPU systemwide denial of service",description:"CVE-2018-12207: CPU systemwide denial of service",cves:["CVE-2018-12207"]},{rule_id:"CVE_2018_12207_cpu_kernel|CVE_2018_12207_CPU_KERNEL_FOR_SURE_CRITICAL",name:"CVE-2018-12207: CPU systemwide denial of service",description:"CVE-2018-12207: CPU systemwide denial of service with running hypervisor",cves:["CVE-2018-12207"]},{rule_id:"CVE_2018_14634_kernel|CVE_2018_14634_2",name:"CVE-2018-14634: kernel privilege escalation via SUID-root binary integer overflow",description:"CVE-2018-14634: kernel privilege escalation via SUID-root binary integer overflow",cves:["CVE-2018-14634"]},{rule_id:"CVE_2018_19788_polkit|CVE_2018_19788_POLKIT_UID_BAD",name:"CVE-2018-19788: PolicyKit authentication bypass",description:"CVE-2018-19788: PolicyKit authentication bypass with affected UID",cves:["CVE-2018-19788"]},{rule_id:"CVE_2018_3620_cpu_kernel|CVE_2018_3620_CPU_KERNEL_BAD_CMDLINE",name:'CVE-2018-3620: "L1TF" CPU side-channel',description:'CVE-2018-3620: "L1TF" CPU side-channel mitigation disabled',cves:["CVE-2018-3620"]},{rule_id:"CVE_2018_3620_cpu_kernel|CVE_2018_3620_CPU_KERNEL_NEED_UPDATE",name:'CVE-2018-3620: "L1TF" CPU side-channel',description:'CVE-2018-3620: "L1TF" CPU side-channel',cves:["CVE-2018-3620"]},{rule_id:"CVE_2018_3620_cpu_kernel|CVE_2018_3620_CPU_KERNEL_VULNERABLE_4",name:'CVE-2018-3620: "L1TF" CPU side-channel',description:'CVE-2018-3620: "L1TF" CPU side-channel reported by kernel',cves:["CVE-2018-3620"]},{rule_id:"CVE_2018_3639_cpu_kernel|CVE_2018_3639_CPU_BAD_CMDLINE_2",name:'CVE-2018-3639: "SSBD" CPU side-channel',description:'CVE-2018-3639: "SSBD" CPU side-channel mitigation disabled by command line',cves:["CVE-2018-3639"]},{rule_id:"CVE_2018_3639_cpu_kernel|CVE_2018_3639_CPU_BAD_KERNEL_2",name:'CVE-2018-3639: "SSBD" CPU side-channel',description:'CVE-2018-3639: "SSBD" CPU side-channel',cves:["CVE-2018-3639"]},{rule_id:"CVE_2018_3639_cpu_kernel|CVE_2018_3639_CPU_BAD_MICROCODE_2",name:'CVE-2018-3639: "SSBD" CPU side-channel',description:'CVE-2018-3639: "SSBD" CPU side-channel with outdated microcode',cves:["CVE-2018-3639"]},{rule_id:"CVE_2018_8897_kernel_popss|KERNEL_CVE_2018_8897_VULNERABLE_2",name:'CVE-2018-1087, CVE-2018-8897: "POPSS" kernel privilege escalation',description:'CVE-2018-1087, CVE-2018-8897: "POPSS" kernel privilege escalation',cves:["CVE-2018-1087","CVE-2018-8897"]},{rule_id:"CVE_2019_0155_gpu_kernel|CVE_2019_0155_GPU_KERNEL",name:"CVE-2019-0154, CVE-2019-0155: i915 GPU privilege escalation",description:"CVE-2019-0154, CVE-2019-0155: i915 GPU privilege escalation",cves:["CVE-2019-0154","CVE-2019-0155"]},{rule_id:"CVE_2019_11135_cpu_taa|CVE_2019_11135_CPU_TAA_BADCMD",name:'CVE-2019-11135: "TAA" kernel side-channel',description:'CVE-2019-11135: "TAA" kernel side-channel mitigation disabled',cves:["CVE-2019-11135"]},{rule_id:"CVE_2019_11135_cpu_taa|CVE_2019_11135_CPU_TAA_KERNEL",name:'CVE-2019-11135: "TAA" kernel side-channel',description:'CVE-2019-11135: "TAA" kernel side-channel',cves:["CVE-2019-11135"]},{rule_id:"CVE_2019_11135_cpu_taa|CVE_2019_11135_CPU_TAA_UCODE",name:'CVE-2019-11135: "TAA" kernel side-channel',description:'CVE-2019-11135: "TAA" kernel side-channel mitigation incomplete',cves:["CVE-2019-11135"]},{rule_id:"CVE_2019_1125_kernel|CVE_2019_1125_KERNEL_2",name:'CVE-2019-1125: "SWAPGS" CPU side-channel',description:'CVE-2019-1125: "SWAPGS" CPU side-channel',cves:["CVE-2019-1125"]},{rule_id:"CVE_2019_1125_kernel|CVE_2019_1125_KERNEL_BAD_CMDLINE_2",name:'CVE-2019-1125: "SWAPGS" CPU side-channel',description:'CVE-2019-1125: "SWAPGS" CPU side-channel mitigation disabled',cves:["CVE-2019-1125"]},{rule_id:"CVE_2019_11477_kernel|CVE_2019_11477_KERNEL",name:'CVE-2019-11477, CVE-2019-11478, CVE-2019-11479: "Sack Panic" kernel denial of service',description:'CVE-2019-11477, CVE-2019-11478, CVE-2019-11479: "Sack Panic" kernel denial of service',cves:["CVE-2019-11477","CVE-2019-11478","CVE-2019-11479"]},{rule_id:"CVE_2019_14835_kernel|CVE_2019_14835_KERNEL_VULN_BAD",name:"CVE-2019-14835: kernel privilege escalation during guest live migration",description:"CVE-2019-14835: kernel privilege escalation during guest live migration with virtualization",cves:["CVE-2019-14835"]},{rule_id:"CVE_2019_14835_kernel|CVE_2019_14835_KERNEL_VULN_NORMAL",name:"CVE-2019-14835: kernel privilege escalation during guest live migration",description:"CVE-2019-14835: kernel privilege escalation during guest live migration",cves:["CVE-2019-14835"]},{rule_id:"CVE_2019_5736_runc|CVE_2019_5736_RUNC",name:"CVE-2019-5736: runc privilege escalation",description:"CVE-2019-5736: runc privilege escalation",cves:["CVE-2019-5736"]},{rule_id:"CVEs_Top10_2015_flash_plugin|FLASH_CVES_TOP_10_2015",name:"Top 10 exploited vulnerabilities in 2015",description:"Top 10 exploited vulnerabilities in 2015",cves:["Top 10 exploited vulnerabilities in 2015"]},{rule_id:"CVEs_Top10_2016_flash_plugin|FLASH_CVES_TOP_10_2016",name:"Top 10 exploited vulnerabilities in 2016",description:"Top 10 exploited vulnerabilities in 2016",cves:["Top 10 exploited vulnerabilities in 2016"]},{rule_id:"CVEs_cgi_httpoxy|HTTPD_CVE_2016_5387_3",name:'CVE-2016-5387: "HTTPoxy" httpd man-in-the-middle',description:'CVE-2016-5387: "HTTPoxy" httpd man-in-the-middle',cves:["CVE-2016-5387"]},{rule_id:"CVEs_cgi_httpoxy|HTTPD_CVE_2016_5387_URGENT_3",name:'CVE-2016-5387: "HTTPoxy" httpd man-in-the-middle',description:'CVE-2016-5387: "HTTPoxy" httpd man-in-the-middle with listening processes',cves:["CVE-2016-5387"]},{rule_id:"CVEs_samba_badlock|SAMBA_CVE_2016_2118_CLIENT",name:'CVE-2016-2118: "Badlock" Samba man-in-the-middle',description:'CVE-2016-2118: "Badlock" Samba client man-in-the-middle',cves:["CVE-2016-2118"]},{rule_id:"CVEs_samba_badlock|SAMBA_CVE_2016_2118_SERVER",name:'CVE-2016-2118: "Badlock" Samba man-in-the-middle',description:'CVE-2016-2118: "Badlock" Samba server man-in-the-middle',cves:["CVE-2016-2118"]},{rule_id:"bash_injection|VULNERABLE_BASH_DETECTED",name:'CVE-2014-6271, CVE-2014-7169: "Shellshock" Bash privilege escalation',description:'CVE-2014-6271, CVE-2014-7169: "Shellshock" Bash privilege escalation',cves:["CVE-2014-6271","CVE-2014-7169"]},{rule_id:"hardening_httpd_ssl_pci_dss_poodle|HTTPD_POODLE_4",name:"Decreased security: httpd using deprecated TLS protocol",description:'CVE-2014-3566: "POODLE" SSLv3 man-in-the-middle',cves:["CVE-2014-3566"]},{rule_id:"heartbleed|HAS_HEARTBLEED",name:'CVE-2014-0160: "Heartbleed" OpenSSL information disclosure',description:'CVE-2014-0160: "Heartbleed" OpenSSL information disclosure',cves:["CVE-2014-0160"]},{rule_id:"heartbleed|HEARTBLEED_ACCESSIBLE",name:'CVE-2014-0160: "Heartbleed" OpenSSL information disclosure',description:'CVE-2014-0160: "Heartbleed" OpenSSL with listening processes information disclosure',cves:["CVE-2014-0160"]},{rule_id:"heartbleed|USING_HEARTBLEED_SO",name:'CVE-2014-0160: "Heartbleed" OpenSSL information disclosure',description:'CVE-2014-0160: "Heartbleed" OpenSSL with active processes information disclosure',cves:["CVE-2014-0160"]},{rule_id:"vsftpd_poodle|VSFTPD_POODLE",name:'CVE-2014-3566: "POODLE" vsftpd man-in-the-middle',description:'CVE-2014-3566: "POODLE" vsftpd man-in-the-middle',cves:["CVE-2014-3566"]}],ae=n(40609),se=n(86896),ce=n(43707);function le(e,i){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);i&&(t=t.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),n.push.apply(n,t)}return n}function _e(e){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?le(Object(n),!0).forEach((function(i){(0,r.Z)(e,i,n[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):le(Object(n)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))}))}return e}var oe=function(e){var i=e.match,n=(0,se.Z)(),r=(0,p.useDispatch)(),s=(0,ce.T)("advisor",_.PERMS.disableRec).hasAccess,L=(0,C.useState)(!1),y=(0,a.Z)(L,2),T=y[0],A=y[1],w=(0,C.useState)(!1),I=(0,a.Z)(w,2),Z=I[0],B=I[1],K=(0,C.useState)(void 0),F=(0,a.Z)(K,2),W=F[0],j=F[1],H=(0,C.useState)(!1),G=(0,a.Z)(H,2),z=G[0],q=G[1],le=(0,C.useState)({sort:"-updated"}),oe=(0,a.Z)(le,2),Ee=oe[0],de=oe[1],Ce=(0,C.useState)(!1),ue=(0,a.Z)(Ce,2),Ve=ue[0],pe=ue[1],me=(0,C.useState)(""),ve=(0,a.Z)(me,2),fe=ve[0],Se=ve[1],ge=(0,ae.Z)(fe,_.DEBOUNCE_DELAY),be=(0,p.useSelector)((function(e){return e.AdvisorStore.rule})),he=(0,p.useSelector)((function(e){return e.AdvisorStore.ruleFetchStatus})),ke=(0,p.useSelector)((function(e){return e.AdvisorStore.system})),Ne=(0,p.useSelector)((function(e){return e.AdvisorStore.systemFetchStatus})),Oe=(0,p.useSelector)((function(e){return e.AdvisorStore.topics})),Re=(0,p.useSelector)((function(e){return e.AdvisorStore.ruleAck})),De=(0,p.useSelector)((function(e){return e.AdvisorStore.selectedTags})),Pe=(0,p.useSelector)((function(e){return e.AdvisorStore.workloads})),Le=(0,p.useSelector)((function(e){return e.AdvisorStore.SID})),ye=function(e){return r((0,M.wN)(e))},Te=(0,C.useCallback)((function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=function(e,i){return r(l.w1(e,i))},s=function(e,i,n){return r(l.Mq(e,i,n))},c=null!==De&&De.length&&{tags:De.map((function(e){return encodeURIComponent(e)}))};Pe&&(c=_e(_e({},c),(0,V.s0)(Pe,Le))),t&&s(i.params.id,c.tags?{}:_e(_e(_e({},c),Ee),e),c.tags&&(0,V.gs)(_e(_e(_e({},c),Ee),e))),n&&a(c.tags?{rule_id:i.params.id}:_e({rule_id:i.params.id},c),c.tags&&(0,V.gs)(c))}),[De,Pe,Le,r,i.params.id,Ee]),Ue=function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;B(e),j(i)},Ae=function(){var e=(0,t.Z)(c().mark((function e(i){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.Z.delete("".concat(_.BASE_URL,"/ack/").concat(i.rule_id,"/"));case 3:ye({variant:"success",timeout:!0,dismissable:!0,title:n.formatMessage(x.Z.recSuccessfullyEnabled)}),Te(),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),Ue(!1),ye({variant:"danger",dismissable:!0,title:n.formatMessage(x.Z.error),description:"".concat(e.t0)});case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(i){return e.apply(this,arguments)}}(),we=function(){var e=(0,t.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:j(void 0),Te();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ie=function(){var e=(0,t.Z)(c().mark((function e(){var i,t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.Z.get("".concat(_.BASE_URL,"/hostack/"),{},{rule_id:be.rule_id,limit:be.hosts_acked_count});case 3:return t=e.sent.data,r={systems:null==t||null===(i=t.data)||void 0===i?void 0:i.map((function(e){return e.system_uuid}))},e.next=7,m.Z.post("".concat(_.BASE_URL,"/rule/").concat(be.rule_id,"/unack_hosts/"),{},r);case 7:Te(),ye({variant:"success",timeout:!0,dismissable:!0,title:n.formatMessage(x.Z.recSuccessfullyEnabledForSystem)}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),ye({variant:"danger",dismissable:!0,title:n.formatMessage(x.Z.error),description:"".concat(e.t0)});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();(0,C.useEffect)((function(){Ve&&"fulfilled"===Ne&&(de(_e(_e({},Ee),{},{name:ge})),Te({name:ge},!1))}),[ge]),(0,C.useEffect)((function(){var e=re&&re.find((function(e){return e.rule_id===i.params.id}));e?window.location.href="".concat(_.UI_BASE,"/vulnerability/cves/").concat(e.cves[0].includes("CVE-")?"".concat(e.cves[0],"?security_rule=").concat(i.params.id):""):r(l.Qq()),Te({},!1)}),[]);var Me=(0,C.useRef)(),Ze=(0,C.useRef)(),Be=(0,C.useRef)();return(0,C.useEffect)((function(){!Ve||null===De||JSON.stringify(Me.current)===JSON.stringify(De)&&JSON.stringify(Ze.current)===JSON.stringify(Pe)&&JSON.stringify(Be.current)===JSON.stringify(Le)||Te({},!1),Me.current=De,Ze.current=Pe,Be.current=Le}),[De,Pe,Le,Te,Ve]),(0,C.useEffect)((function(){var e;if("enabled"!==be.rule_status&&be.rule_id&&Ve?(e={rule_id:be.rule_id},r(l.AR(e))):Ve||(Te({},!0,!1),pe(!0)),be&&be.description){var i="".concat(be.description," - ").concat(x.Z.recommendations.defaultMessage);document.title=n.formatMessage(x.Z.documentTitle,{subnav:i})}}),[be,be.rule_status,be.rule_id]),u().createElement(u().Fragment,null,z&&u().createElement(te.Z,{handleModalToggle:function(e){return q(e)},isModalOpen:z,afterFn:Te,rule:be}),Z&&u().createElement(h.Z,{handleModalToggle:Ue,isModalOpen:Z,rule:be,afterFn:we,host:W}),"fulfilled"===he&&u().createElement(u().Fragment,null,u().createElement(E.Z,{className:"pageHeaderOverride"},u().createElement(f.Z,{ouiaId:"override",current:be.description||"",match:i})),u().createElement(X.Z,{className:"pf-m-light pf-u-pt-sm"},u().createElement($.Z,{resolutionRisk:function(e){var i,n=null==e||null===(i=e.resolution_set)||void 0===i?void 0:i.find((function(e){return e.system_type===_.SYSTEM_TYPES.rhel||_.SYSTEM_TYPES.ocp}));return n?n.resolution_risk.risk:void 0}(be),isDetailsPage:!0,rule:be,topics:Oe,header:u().createElement(u().Fragment,null,u().createElement(d.Z,{title:u().createElement(u().Fragment,null,u().createElement(ee.Z,{rule:be}),be.description)}),u().createElement("p",null,n.formatMessage(x.Z.rulesDetailsPubishdate,{date:u().createElement(b.Z,{date:new Date(be.publish_date),type:"onlyDate"})}),u().createElement(Y._,{className:"categoryLabel",color:"blue"},be.category.name)))},u().createElement(D.k,null,u().createElement(P.B,{align:{default:"alignRight"}},u().createElement(ne.u,{trigger:s?"":"mouseenter",content:n.formatMessage(x.Z.permsAction)},u().createElement(k.Dropdown,{className:"ins-c-rec-details__actions_dropdown",onSelect:function(){return A(!T)},position:"right",ouiaId:"actions",toggle:u().createElement(O.DropdownToggle,{isDisabled:!s,onToggle:function(e){return A(e)},toggleIndicator:g.default},n.formatMessage(x.Z.actions)),isOpen:T,dropdownItems:be&&"enabled"===be.rule_status?[u().createElement(N.DropdownItem,{key:"link",ouiaId:"disable",onClick:function(){Ue(!0)}},n.formatMessage(x.Z.disableRule))]:[u().createElement(N.DropdownItem,{key:"link",ouiaId:"enable",onClick:function(){Ae(be)}},n.formatMessage(x.Z.enableRule))]}))))))),"pending"===he&&u().createElement(U.Z,null),u().createElement(X.Z,null,u().createElement(u().Fragment,null,"fulfilled"===he&&u().createElement(u().Fragment,null,(be.hosts_acked_count>0||"enabled"!==be.rule_status)&&u().createElement(o.Card,{className:"cardOverride"},u().createElement(o.CardHeader,null,u().createElement(ie.Dx,{headingLevel:"h4",size:"xl"},u().createElement(v.ZP,{size:"sm"})," ",n.formatMessage(be.hosts_acked_count>0&&"enabled"===be.rule_status?x.Z.ruleIsDisabledForSystems:x.Z.ruleIsDisabled))),u().createElement(o.CardBody,null,be.hosts_acked_count>0&&"enabled"===be.rule_status?u().createElement(u().Fragment,null,n.formatMessage(x.Z.ruleIsDisabledForSystemsBody,{systems:be.hosts_acked_count})," ",u().createElement(S.Button,{isInline:!0,variant:"link",onClick:function(){return q(!0)},ouiaId:"viewSystems"},n.formatMessage(x.Z.viewSystems))):u().createElement(u().Fragment,null,n.formatMessage(x.Z.ruleIsDisabledJustification),u().createElement("i",null,Re.justification||n.formatMessage(x.Z.none)),Re.updated_at&&u().createElement("span",null," ",u().createElement(b.Z,{date:new Date(Re.updated_at),type:"onlyDate"})))),u().createElement(o.CardFooter,null,be.hosts_acked_count>0&&"enabled"===be.rule_status?u().createElement(S.Button,{isInline:!0,variant:"link",onClick:function(){return Ie()},ouiaId:"bulkHost"},n.formatMessage(x.Z.enableRuleForSystems)):u().createElement(S.Button,{isInline:!0,variant:"link",onClick:function(){return Ae(be)},ouiaId:"rule"},n.formatMessage(x.Z.enableRule)))),"enabled"===be.rule_status&&u().createElement(u().Fragment,null,u().createElement(ie.Dx,{className:"titleOverride",headingLevel:"h3",size:"2xl"},n.formatMessage(x.Z.affectedSystems)),u().createElement(J,{tableProps:{canSelectAll:!1,actionResolver:function(){return[{title:"Disable recommendation for system",onClick:function(e,i,n){return Ue(!0,n)}}]}},items:ke.host_ids,rule:be,afterDisableFn:we,filters:Ee,onSortFn:function(e){de(_e(_e({},Ee),{},{sort:e})),"updated"===e&&(e="last_seen"),"-updated"===e&&(e="-last_seen"),Te({sort:e},!1)},searchText:fe,setSearchText:function(e){Se(e)}})),"fulfilled"===Ne&&"enabled"!==be.rule_status&&u().createElement(Q.Z,{icon:v.ZP,title:n.formatMessage(x.Z.ruleIsDisabled),text:n.formatMessage(x.Z.ruleIsDisabledBody)})),"pending"===he&&u().createElement(U.Z,null),"failed"===he&&u().createElement(R.Z,{message:n.formatMessage(x.Z.rulesTableFetchRulesError)}))))};oe.propTypes={match:w().any};const Ee=(0,K.Z)(oe)}}]);
//# sourceMappingURL=../sourcemaps/Details.2b6ae8a5dee403afc1fd.js.map