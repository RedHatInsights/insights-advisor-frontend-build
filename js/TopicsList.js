(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{489:function(e,t,a){"use strict";var r=a(2),n=a.n(r),i=a(240),o=a(242),s=a(228),l=a(241),c=a(1),u=a.n(c),p=a(262),m=function(e){var t=e.children,a=e.icon,r=e.iconStyle,c=e.text,u=e.title,p=e.variant;return n.a.createElement(i.a,{variant:p},n.a.createElement(o.a,{style:r,icon:a,size:"lg"}),n.a.createElement(s.a,{headingLevel:"h5",size:"lg"},u),n.a.createElement(l.a,{style:{marginBottom:"16px"}},c),t)};m.propTypes={children:u.a.any,icon:u.a.any,iconStyle:u.a.any,text:u.a.any,title:u.a.string,variant:u.a.any},m.defaultProps={icon:p.a,title:"",variant:i.b.full},t.a=m},506:function(e,t,a){var r=a(521),n=a(522),i=a(523);e.exports=function(e){return r(e)||n(e)||i()}},521:function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}},522:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},523:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},554:function(e,t,a){(e.exports=a(4)(!1)).push([e.i,".pf-c-button.pf-m-link {\n  padding-left: 0px; }\n\n.pf-l-level.nowrap {\n  flex-wrap: nowrap; }\n\n.cardDescription {\n  height: 144px; }\n",""])},878:function(e,t){var a=Array.prototype.reverse;e.exports=function(e){return null==e?e:a.call(e)}},879:function(e,t,a){var r=a(507),n=a(718),i=a(514),o=a(515),s=i(function(e,t){if(null==e)return[];var a=t.length;return a>1&&o(e,t[0],t[1])?t=[]:a>2&&o(t[0],t[1],t[2])&&(t=[t[0]]),n(e,r(t,1),[])});e.exports=s},912:function(e,t,a){e.exports=function(){var e=[],t=[],a={},r={},n={};function i(e){return"string"==typeof e?new RegExp("^"+e+"$","i"):e}function o(e,t){return e===t?t:e===e.toLowerCase()?t.toLowerCase():e===e.toUpperCase()?t.toUpperCase():e[0]===e[0].toUpperCase()?t.charAt(0).toUpperCase()+t.substr(1).toLowerCase():t.toLowerCase()}function s(e,t){return e.replace(/\$(\d{1,2})/g,function(e,a){return t[a]||""})}function l(e,t){return e.replace(t[0],function(a,r){var n=s(t[1],arguments);return o(""===a?e[r-1]:a,n)})}function c(e,t,r){if(!e.length||a.hasOwnProperty(e))return t;for(var n=r.length;n--;){var i=r[n];if(i[0].test(t))return l(t,i)}return t}function u(e,t,a){return function(r){var n=r.toLowerCase();return t.hasOwnProperty(n)?o(r,n):e.hasOwnProperty(n)?o(r,e[n]):c(n,r,a)}}function p(e,t,a,r){return function(r){var n=r.toLowerCase();return!!t.hasOwnProperty(n)||!e.hasOwnProperty(n)&&c(n,n,a)===n}}function m(e,t,a){return(a?t+" ":"")+(1===t?m.singular(e):m.plural(e))}return m.plural=u(n,r,e),m.isPlural=p(n,r,e),m.singular=u(r,n,t),m.isSingular=p(r,n,t),m.addPluralRule=function(t,a){e.push([i(t),a])},m.addSingularRule=function(e,a){t.push([i(e),a])},m.addUncountableRule=function(e){"string"!=typeof e?(m.addPluralRule(e,"$0"),m.addSingularRule(e,"$0")):a[e.toLowerCase()]=!0},m.addIrregularRule=function(e,t){t=t.toLowerCase(),e=e.toLowerCase(),n[e]=t,r[t]=e},[["I","we"],["me","us"],["he","they"],["she","they"],["them","them"],["myself","ourselves"],["yourself","yourselves"],["itself","themselves"],["herself","themselves"],["himself","themselves"],["themself","themselves"],["is","are"],["was","were"],["has","have"],["this","these"],["that","those"],["echo","echoes"],["dingo","dingoes"],["volcano","volcanoes"],["tornado","tornadoes"],["torpedo","torpedoes"],["genus","genera"],["viscus","viscera"],["stigma","stigmata"],["stoma","stomata"],["dogma","dogmata"],["lemma","lemmata"],["schema","schemata"],["anathema","anathemata"],["ox","oxen"],["axe","axes"],["die","dice"],["yes","yeses"],["foot","feet"],["eave","eaves"],["goose","geese"],["tooth","teeth"],["quiz","quizzes"],["human","humans"],["proof","proofs"],["carve","carves"],["valve","valves"],["looey","looies"],["thief","thieves"],["groove","grooves"],["pickaxe","pickaxes"],["passerby","passersby"]].forEach(function(e){return m.addIrregularRule(e[0],e[1])}),[[/s?$/i,"s"],[/[^\u0000-\u007F]$/i,"$0"],[/([^aeiou]ese)$/i,"$1"],[/(ax|test)is$/i,"$1es"],[/(alias|[^aou]us|t[lm]as|gas|ris)$/i,"$1es"],[/(e[mn]u)s?$/i,"$1s"],[/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i,"$1"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1i"],[/(alumn|alg|vertebr)(?:a|ae)$/i,"$1ae"],[/(seraph|cherub)(?:im)?$/i,"$1im"],[/(her|at|gr)o$/i,"$1oes"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i,"$1a"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i,"$1a"],[/sis$/i,"ses"],[/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i,"$1$2ves"],[/([^aeiouy]|qu)y$/i,"$1ies"],[/([^ch][ieo][ln])ey$/i,"$1ies"],[/(x|ch|ss|sh|zz)$/i,"$1es"],[/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i,"$1ices"],[/\b((?:tit)?m|l)(?:ice|ouse)$/i,"$1ice"],[/(pe)(?:rson|ople)$/i,"$1ople"],[/(child)(?:ren)?$/i,"$1ren"],[/eaux$/i,"$0"],[/m[ae]n$/i,"men"],["thou","you"]].forEach(function(e){return m.addPluralRule(e[0],e[1])}),[[/s$/i,""],[/(ss)$/i,"$1"],[/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i,"$1fe"],[/(ar|(?:wo|[ae])l|[eo][ao])ves$/i,"$1f"],[/ies$/i,"y"],[/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i,"$1ie"],[/\b(mon|smil)ies$/i,"$1ey"],[/\b((?:tit)?m|l)ice$/i,"$1ouse"],[/(seraph|cherub)im$/i,"$1"],[/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i,"$1"],[/(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i,"$1sis"],[/(movie|twelve|abuse|e[mn]u)s$/i,"$1"],[/(test)(?:is|es)$/i,"$1is"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1us"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i,"$1um"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i,"$1on"],[/(alumn|alg|vertebr)ae$/i,"$1a"],[/(cod|mur|sil|vert|ind)ices$/i,"$1ex"],[/(matr|append)ices$/i,"$1ix"],[/(pe)(rson|ople)$/i,"$1rson"],[/(child)ren$/i,"$1"],[/(eau)x?$/i,"$1"],[/men$/i,"man"]].forEach(function(e){return m.addSingularRule(e[0],e[1])}),["adulthood","advice","agenda","aid","aircraft","alcohol","ammo","analytics","anime","athletics","audio","bison","blood","bream","buffalo","butter","carp","cash","chassis","chess","clothing","cod","commerce","cooperation","corps","debris","diabetes","digestion","elk","energy","equipment","excretion","expertise","firmware","flounder","fun","gallows","garbage","graffiti","hardware","headquarters","health","herpes","highjinks","homework","housework","information","jeans","justice","kudos","labour","literature","machinery","mackerel","mail","media","mews","moose","music","mud","manga","news","only","personnel","pike","plankton","pliers","police","pollution","premises","rain","research","rice","salmon","scissors","series","sewage","shambles","shrimp","software","species","staff","swine","tennis","traffic","transportation","trout","tuna","wealth","welfare","whiting","wildebeest","wildlife","you",/pok[eé]mon$/i,/[^aeiou]ese$/i,/deer$/i,/fish$/i,/measles$/i,/o[iu]s$/i,/pox$/i,/sheep$/i].forEach(m.addUncountableRule),m}()},913:function(e,t,a){var r=a(554);"string"==typeof r&&(r=[[e.i,r,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0},i=a(5)(r,n);r.locals&&(e.exports=r.locals),e.hot.accept(554,function(){var t=a(554);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var a,r=0;for(a in e){if(!t||e[a]!==t[a])return!1;r++}for(a in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");i(t)}),e.hot.dispose(function(){i()})},958:function(e,t,a){"use strict";a.r(t);var r=a(132),n=a.n(r),i=a(506),o=a.n(i),s=a(878),l=a.n(s),c=a(879),u=a.n(c),p=a(731),m=a.n(p),f=a(2),h=a.n(f),d=a(219),g=a.n(d),$=a(1),y=a.n($),v=a(73),b=a(311),w=a(247),E=a(267),x=a(473),O=a(248),j=a(234),k=a(236),P=a(228),S=a(235),C=a(255),R=a(256),z=a(244),L=a(245),T=a(251),A=a(252),F=a(204),q=a(243),_=a(266),D=a(912),U=a.n(D),I=(a(913),function(e){var t=e.topic,a=e.setFilters,r=e.history;return h.a.createElement(O.a,null,h.a.createElement(j.a,null,h.a.createElement(k.a,null,h.a.createElement(P.a,{headingLevel:"h3",size:"lg"},t.name," ")),h.a.createElement(S.a,null,h.a.createElement(C.a,{gutter:"md"},h.a.createElement(R.a,{className:"cardDescription"},h.a.createElement(z.a,null,h.a.createElement(L.a,{component:L.b.p},t.description.substring(0,150),t.description.length>150?"...":""))),h.a.createElement(R.a,null,h.a.createElement(z.a,null,h.a.createElement(L.a,{component:L.b.small},U()("system",t.impacted_systems_count,!0)," affected"))),h.a.createElement(R.a,null,h.a.createElement(T.a,{className:"nowrap"},h.a.createElement(A.a,null,h.a.createElement(F.a,{variant:"link",onClick:function(){a({impacting:!0,reports_shown:!0,topic:t.slug}),r.push("/topics/".concat(t.slug,"/"))}},"Learn more")),t.featured&&h.a.createElement(A.a,null,h.a.createElement(q.a,null," ",h.a.createElement(_.a,null)," Recommended"))))))))});I.propTypes={topic:y.a.object,history:y.a.object,setFilters:y.a.func};var B=g()(Object(v.connect)(null,function(e){return{setFilters:function(t){return e(x.i(t))}}})(I)),H=a(483),N=a(489);function J(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}var M=function(e){var t=e.topics,a=e.topicsFetchStatus,r=e.fetchTopics,n=e.setBreadcrumbs;Object(f.useEffect)(function(){n([{title:"Topics",navigate:"/topics"}]),r()},[r,n]);var i,s,c;return h.a.createElement(h.a.Fragment,null,h.a.createElement(b.PageHeader,null,h.a.createElement(b.PageHeaderTitle,{title:"Topics"})),h.a.createElement(b.Main,null,h.a.createElement(h.a.Fragment,null,""===a||"pending"===a&&h.a.createElement(H.a,null),"fulfilled"===a&&h.a.createElement(w.a,{gutter:"lg"},(i=m()(t,"featured"),s=l()(u()(i.false,["impacted_systems_count"])),c=l()(u()(i.true,function(e){return e.impacted_systems_count})),[].concat(o()(c),o()(s)).map(function(e){return h.a.createElement(B,{key:e.name,topic:e})}))),"failed"===a||"rejected"===a&&h.a.createElement(N.a,{icon:E.a,title:"There was an issue fetching topics",text:"Either no topics presently exist or there is an issue presenting them."}))))};M.displayName="list-topics",M.propTypes={setBreadcrumbs:y.a.func,fetchTopics:y.a.func,topicsFetchStatus:y.a.string,topics:y.a.array};t.default=g()(Object(v.connect)(function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?J(a,!0).forEach(function(t){n()(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):J(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({topics:e.AdvisorStore.topics,topicsFetchStatus:e.AdvisorStore.topicsFetchStatus},t)},function(e){return{setBreadcrumbs:function(e){return x.h(e)},fetchTopics:function(){return e(x.g())}}})(M))}}]);