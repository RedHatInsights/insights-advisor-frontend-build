(self.webpackChunkadvisor=self.webpackChunkadvisor||[]).push([[7887],{78236:(e,n)=>{"use strict";n.k2={name:"--pf-global--breakpoint--md",value:"768px",var:"var(--pf-global--breakpoint--md)"},n.ZP=n.k2},7887:(e,n,t)=>{"use strict";t.d(n,{Z:()=>oe});var o=t(85893),i=t(93264),r=t.n(i),l=t(35356),a=t(56989),c=t(60271),s=function(){return s=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},s.apply(this,arguments)},u=function(e,n,t){if(t||2===arguments.length)for(var o,i=0,r=n.length;i<r;i++)!o&&i in n||(o||(o=Array.prototype.slice.call(n,0,i)),o[i]=n[i]);return e.concat(o||Array.prototype.slice.call(n))};const d=function(e){var n,t=e.extraItems,c=void 0===t?[]:t,d=e.onSelect,p=void 0===d?function(){}:d,f=e.isDisabled,v=e.tooltipText,h=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)n.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(t[o[i]]=e[o[i]])}return t}(e,["extraItems","onSelect","isDisabled","tooltipText"]),g=(0,i.useState)(!1),b=g[0],m=g[1];return(0,o.jsx)(r().Fragment,{children:(n=(0,o.jsx)(l.Dropdown,s({isPlain:!0},h,{onSelect:function(){return m((function(e){return!e}))},toggle:(0,o.jsx)(l.DropdownToggle,s({"aria-label":"Export",toggleIndicator:null,onToggle:function(e){return m(e)},isDisabled:f,ouiaId:"Export"},{children:(0,o.jsx)(a.ExportIcon,{size:"sm"})})),isOpen:b,ouiaId:"Export",dropdownItems:u([(0,o.jsx)(l.DropdownItem,s({ouiaId:"DownloadCSV",component:"button",onClick:function(e){return p(e,"csv")},isDisabled:f},{children:"Export to CSV"}),"download-csv"),(0,o.jsx)(l.DropdownItem,s({ouiaId:"DownloadJSON",component:"button",onClick:function(e){return p(e,"json")},isDisabled:f},{children:"Export to JSON"}),"download-json")],c,!0)})),(0,o.jsx)(r().Fragment,{children:v?(0,o.jsx)(l.Tooltip,s({content:v},{children:n})):n}))})};var p=t(94184),f=t.n(p),v=function(){return v=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},v.apply(this,arguments)},h=function(e,n,t){if(t||2===arguments.length)for(var o,i=0,r=n.length;i<r;i++)!o&&i in n||(o||(o=Array.prototype.slice.call(n,0,i)),o[i]=n[i]);return e.concat(o||Array.prototype.slice.call(n))};function g(e){return void 0!==e.label}var b=function(e,n){var t,o="object"==typeof e&&null!==typeof e&&"function"==typeof(null==e?void 0:e.onClick)?function(t){return null==e?void 0:e.onClick(t,e,n)}:void 0;return v(v({},null==e?void 0:e.props),{onClick:o,component:(null===(t=null==e?void 0:e.props)||void 0===t?void 0:t.component)||(r().isValidElement(e.label||e)?"div":"button"),children:"object"==typeof e&&null!==typeof e?null==e?void 0:e.label:e})};const m=function(e){var n,t=e.actions,a=void 0===t?[]:t,c=e.overflowActions,s=void 0===c?[]:c,u=e.onSelect,p=void 0===u?function(){}:u,m=e.dropdownProps,y=void 0===m?{}:m,x=e.kebabToggleProps,j=e.exportConfig,C=(0,i.useState)(!1),k=C[0],S=C[1],w=function(e){return S(e)},O=a[0],I=a.slice(1),D=h(h(h(h([],O?[(0,o.jsx)(l.DropdownItem,v({},b(O,"first-action"),{className:f()("ins-c-primary-toolbar__first-action",g(O)?null===(n=null==O?void 0:O.props)||void 0===n?void 0:n.className:void 0)}),"first-action")]:[],!0),I.map((function(e,n){var t;return(0,o.jsx)(l.DropdownItem,v({},b(e,n)),(null==e?void 0:e.key)||(null===(t=null==e?void 0:e.props)||void 0===t?void 0:t.key)||n)})),!0),a.length>0&&s.length>0?[(0,o.jsx)(l.DropdownSeparator,{className:"ins-c-primary-toolbar__overflow-actions-separator"},"separator")]:[],!0),s.map((function(e,n){return function(e,n){var t=e;return(0,i.createElement)(l.DropdownItem,v({},t.props,{className:"ins-c-primary-toolbar__overflow-actions",key:t.value||t.key||"".concat(n,"-overflow"),component:t.props&&t.props.component||r().isValidElement(t.label||e)?"div":"button",onClick:function(e){return t.onClick&&t.onClick(e,t,n)}}),t.label||e)}(e,n)})),!0);return(0,o.jsxs)(i.Fragment,{children:[O&&(0,o.jsx)(l.ToolbarItem,v({className:"ins-c-primary-toolbar__first-action pf-m-spacer-sm"},{children:g(O)?(0,o.jsx)(l.Button,v({ouiaId:"".concat(O.label)},O.props,{onClick:O.onClick||O.props&&O.props.onClick||void 0},{children:O.label})):O})),j&&(j.extraItems||j.onSelect)&&(0,o.jsx)(l.ToolbarItem,v({className:"pf-m-spacer-sm"},{children:(0,o.jsx)(d,v({},j))})),(a&&(null==a?void 0:a.length)>0||s.length>0)&&(0,o.jsx)(l.ToolbarItem,v({className:"".concat(a.length<=1?"ins-m-actions--empty":""," ins-c-primary-toolbar__actions pf-m-spacer-sm")},{children:(0,o.jsx)(l.Dropdown,v({},y,{isOpen:k,isPlain:!0,onSelect:function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];p&&p.apply(void 0,e),w(!1)},ouiaId:"Actions",toggle:(0,o.jsx)(l.KebabToggle,v({},x,{onToggle:function(e){w(e)}})),dropdownItems:D}))}))]})};var y=function(){return y=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},y.apply(this,arguments)},x=function(e,n,t){if(t||2===arguments.length)for(var o,i=0,r=n.length;i<r;i++)!o&&i in n||(o||(o=Array.prototype.slice.call(n,0,i)),o[i]=n[i]);return e.concat(o||Array.prototype.slice.call(n))};const j=function(e){var n=e.id,t=e.isDisabled,r=void 0!==t&&t,a=e.items,c=void 0===a?[]:a,s=e.onSelect,u=void 0===s?function(){}:s,d=e.checked,p=void 0!==d&&d,v=e.toggleProps,h=e.count,g=e.className,b=void 0===g?"":g,m=e.ouiaId,j=e.ouiaSafe,C=void 0===j||j,k=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)n.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(t[o[i]]=e[o[i]])}return t}(e,["id","isDisabled","items","onSelect","checked","toggleProps","count","className","ouiaId","ouiaSafe"]),S=(0,i.useState)(!1),w=S[0],O=S[1],I=(0,i.useRef)(!1).current,D=(0,i.useRef)((0,l.getDefaultOUIAId)("RHI/BulkSelect")).current,P=function(e){return O(e)},E=void 0!==m?m:D;return(0,o.jsx)(i.Fragment,{children:c&&c.length>0?(0,o.jsx)(l.Dropdown,y({onSelect:function(){return P(!1)}},k,{className:f()(b,"ins-c-bulk-select"),ouiaId:E,ouiaSafe:C,toggle:(0,o.jsx)(l.DropdownToggle,y({},v,{isDisabled:r,ouiaId:E,splitButtonItems:[(0,o.jsx)(i.Fragment,{children:I?(0,o.jsx)(l.DropdownToggleCheckbox,{id:n?"".concat(n,"-toggle-checkbox"):"toggle-checkbox","aria-label":"Select all",onChange:u,checked:p,ouiaId:E}):(0,o.jsx)(l.DropdownToggleCheckbox,y({id:n?"".concat(n,"-toggle-checkbox"):"toggle-checkbox","aria-label":"Select all",onChange:u,isChecked:p,ouiaId:E},{children:h?"".concat(h," selected"):""}))},"split-checkbox")],onToggle:P})),isOpen:w,dropdownItems:x(x([],void 0!==h&&h>0?[(0,o.jsxs)(l.DropdownItem,y({isDisabled:!0,className:f()({"ins-c-bulk-select__selected":!I})},{children:[h," Selected"]}),"count")]:[],!0),c.map((function(e,n){return(0,o.jsx)(l.DropdownItem,y({component:"button",ouiaId:"".concat(E,"-").concat(e.key||n),onClick:function(t){return e.onClick&&e.onClick(t,e,n)}},null==e?void 0:e.props,{children:e.title}),e.key||n)})),!0)})):(0,o.jsx)(l.Checkbox,y({},k,{"aria-label":"Select all",className:f()(b,"ins-c-bulk-select"),id:"".concat(n,"-checkbox"),isChecked:p,onChange:u}))})};var C=t(78236);function k(e){return void 0!==(null==e?void 0:e.value)}const S=function(e){var n=e.icon,t=e.id,r=e.isDisabled,c=void 0!==r&&r,s=e.className,u=e.onChange,d=e.onSubmit,p=void 0===d?function(){}:d,f=e.value,v=void 0===f?"":f,h=e.placeholder,g=e.innerRef,b=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)n.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(t[o[i]]=e[o[i]])}return t}(e,["icon","id","isDisabled","className","onChange","onSubmit","value","placeholder","innerRef"]),m=v,y=(0,i.useState)(""),x=y[0],j=y[1],C=n||a.SearchIcon;return(0,o.jsxs)(i.Fragment,{children:[(0,o.jsx)(l.TextInput,{"aria-label":b["aria-label"]||"text input",className:"ins-c-conditional-filter ".concat(s||""),"data-ouia-component-type":"PF4/TextInput",id:t,isDisabled:c,value:u?"string"==typeof v?m:m.value:x,onChange:function(e,n){return function(e,n){return u?u(e,n):j(n)}(n,n.target.value)},onKeyDown:function(e){return"Enter"===e.key&&(null==p?void 0:p(e,("string"==typeof v?m:m.value)||x))},ouiaId:"ConditionalFilter",placeholder:h,"widget-type":"InsightsInput",ref:g}),(0,o.jsx)(C,{size:"sm",className:"ins-c-search-icon"})]})};var w=t(57557),O=t.n(w),I=function(){return I=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},I.apply(this,arguments)},D=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)n.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(t[o[i]]=e[o[i]])}return t},P=function(e,n,t){if(t||2===arguments.length)for(var o,i=0,r=n.length;i<r;i++)!o&&i in n||(o||(o=Array.prototype.slice.call(n,0,i)),o[i]=n[i]);return e.concat(o||Array.prototype.slice.call(n))};var E=function(){return E=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},E.apply(this,arguments)},N=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)n.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(t[o[i]]=e[o[i]])}return t};const T="treeView",_="checkbox",A="radio",F="button";var B=function(){return B=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},B.apply(this,arguments)},V=function(e,n,t){if(t||2===arguments.length)for(var o,i=0,r=n.length;i<r;i++)!o&&i in n||(o||(o=Array.prototype.slice.call(n,0,i)),o[i]=n[i]);return e.concat(o||Array.prototype.slice.call(n))},R=function(e,n,t,o,i,r){var l,a,c,s,u,d=B(B({},r),i);if(void 0===d[e])return!1;if(void 0!==(null==(u=d[e][n])?void 0:u.group)){var p=d[e][n];if(p.isSelected){if(null===(l=null==p?void 0:p.item)||void 0===l?void 0:l.id)return t===(null===(a=null==p?void 0:p.item)||void 0===a?void 0:a.id);if(null===(c=null==p?void 0:p.item)||void 0===c?void 0:c.tagValue)return o===(null===(s=null==p?void 0:p.item)||void 0===s?void 0:s.tagValue)}return Boolean(p.isSelected)}return Boolean(d[e][n])},M=function(e,n,t,o,i,r,l,a){return void 0===i&&(i=""),((null==e?void 0:e.map((function(c,s){return B(B({},c),{className:"".concat((null==c?void 0:c.className)||"pf-u-pl-sm"),key:c.id||c.value||s,value:String(c.value||c.id||s),onClick:function(s,u,d){var p,f=[s,t(o||c.type,i,(o||c.type)===T?u:c.value,d),B({value:i,label:r||c.label,id:l||c.id,type:o||c.type,items:e},a||c),c,i,c.value];null==n||n.apply(void 0,f),null===(p=null==c?void 0:c.onClick)||void 0===p||p.call(c,s,B(B({},c),{label:"string"==typeof c.label?c.label:""}),void 0,d)}})})))||[]).filter((function(e){return!e.noFilter}))},L=function(e){return e.id=e.id||e.value,e.name=e.label||e.name,e.value=e.id,e.label=e.name||"",e.children?B(B({},e),{children:e.children.map((function(e){return L(e)}))}):e},G=function(e){return function(n,t,o,i){void 0===n&&(n=F),void 0===t&&(t=""),void 0===o&&(o=""),void 0===i&&(i=!1);var r=null==e?void 0:e[t],l=n===T?[o].reduce((function e(n,t){return Array.isArray(null==t?void 0:t.children)?t.children.reduce(e,n)||[]:(n.push(t),n)}),[]):[],a=n===T?l.map((function(e){return e.id})):[String(o)];if(r){var c=e;return a.map((function(e){var o,r,l,a;void 0===e&&(e="");var s=c[t];c=n!==A&&(s[e]instanceof Object?s[e].isSelected:Boolean(s[e]))?B(B({},c),((o={})[t]=B(B({},s||{}),((r={})[e]=n===T&&i,r)),o)):B(B({},c),((l={})[t]=B(B({},n!==A&&s||{}),((a={})[e]=!0,a)),l))})),c}return a.reduce((function(e,n){var o,i;return B(B({},e),((o={})[t]=B(B({},null==e?void 0:e[t]),((i={})[n||""]=!0,i)),o))}),e)}},z=function(e,n,t,o){return e.children?e.children.every((function(e){return z(e,n,t,o)})):R(n,e.id||"",void 0,void 0,t,o)},K=function(e,n,t,o){return e.children?e.children.some((function(e){return K(e,n,t,o)})):R(n,e.id||"",void 0,void 0,t,o)},U=function(e,n,t,o){var i=z(e,n,t,o);return e.checkProps={checked:!1},i?e.checkProps.checked=!0:K(e,n,t,o)&&(e.checkProps={checked:null}),e.children?B(B({},e),{children:e.children.map((function(e){return U(e,n,t,o)}))}):e},W=function(){return W=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},W.apply(this,arguments)};var Z="custom",H={text:S,checkbox:function(e){var n=e.items,t=void 0===n?[]:n,r=e.value,a=e.onChange,c=void 0===a?function(){}:a,s=e.isDisabled,u=void 0!==s&&s,d=D(e,["items","value","onChange","isDisabled"]),p=d.placeholder,f=d.className,v=(0,i.useState)(!1),h=v[0],g=v[1],b=(0,i.useState)([]),m=b[0],y=b[1];(0,i.useEffect)((function(){y(void 0===r?[]:Array.isArray(r)?r:[r])}),[r]);var x=function(){return Array.from(new Set(P(P([],r&&r.length>0&&Array.isArray(r)?r.map((function(e){return k(e)?e.value:e})):[],!0),m,!0)))};return(0,o.jsx)(i.Fragment,{children:!t||t&&t.length<=0?(0,o.jsx)(S,I({},d,{onChange:c,isDisabled:u,value:"".concat(x())})):(0,o.jsx)(l.Select,I({className:f,variant:l.SelectVariant.checkbox,"aria-label":"Select Input",onToggle:function(e){return g(e)},isDisabled:u,onSelect:function(e,n){return function(e,n){var t=x();t=t.includes(n)?t.filter((function(e){return e!==n})):P(P([],t,!0),[n],!1),null==c||c(e,t,n),y(t)}(e,n)},selections:x(),isOpen:h,placeholderText:p,ouiaId:p},{children:t.map((function(e,n){var t=e.value,o=e.onClick,r=e.label,a=e.id,c=D(e,["value","onClick","label","id"]);return(0,i.createElement)(l.SelectOption,I({},O()(c,"onChange"),{key:a||n,value:String(t||a||n),onClick:function(e){return null==o?void 0:o(e,I({value:t,label:r,id:a},c),n)}}),r)}))}))})},radio:function(e){var n=e.items,t=void 0===n?[]:n,r=e.onChange,a=void 0===r?function(){}:r,c=e.isDisabled,s=void 0!==c&&c,u=N(e,["items","onChange","isDisabled"]),d=u.placeholder,p=u.className,f=u.value,v=(0,i.useState)(!1),h=v[0],g=v[1],b=(0,i.useState)(),m=b[0],y=b[1],x=function(){return f?k(f)?f.value:f:m?k(m)?m.value:m:void 0},j=x();return(0,o.jsx)(i.Fragment,{children:!t||t&&t.length<=0?(0,o.jsx)(S,E({},u,{onChange:a,isDisabled:s,value:"".concat(x())})):(0,o.jsx)(l.Select,E({className:p,variant:l.SelectVariant.single,"aria-label":"Select Input",isDisabled:s,onToggle:function(e){return g(e)},onSelect:function(e,n){return function(e,n){null==a||a(e,n),y(n)}(e,n)},isOpen:h,placeholderText:d,ouiaId:d},{children:t.map((function(e,n){var t=e.value,r=e.isChecked,a=e.onChange,c=e.label,s=e.id,u=N(e,["value","isChecked","onChange","label","id"]);return(0,i.createElement)(l.SelectOption,E({},u,{key:s||n,value:t||""+n}),(0,o.jsx)(l.Radio,{name:s||"".concat(n,"-radio"),label:c,value:t||n,isChecked:r||void 0!==j&&j===t||void 0!==j&&j===""+n||!1,onChange:function(e,o){return null==a?void 0:a(o,E({id:s,label:c,value:t,isChecked:r},u),n)},id:s||"".concat(t,"-").concat(n)}))}))}))})},custom:i.Fragment,group:function(e){var n=e.className,t=e.filterBy,r=void 0===t?"":t,c=e.groups,s=void 0===c?[]:c,u=e.items,d=e.isFilterable,p=void 0!==d&&d,v=e.onFilter,h=e.onChange,g=e.onShowMore,b=e.placeholder,m=e.selected,y=e.showMoreTitle,x=e.showMoreOptions,j=e.isDisabled,C=(0,i.useState)({}),k=C[0],S=C[1],w=(0,i.useState)(""),O=w[0],I=w[1],D=(0,i.useState)(!1),P=D[0],E=D[1],N=(0,i.useRef)(null),z=(0,i.useRef)(null),K=(0,i.useRef)(null),Z=(0,i.useRef)(null);(0,i.useEffect)((function(){m&&S(m)}),[m]),(0,i.useEffect)((function(){I(r)}),[r]);var H=function(e){var n,t,o;P&&((null===(n=K.current)||void 0===n?void 0:n.contains(e.target))||(null===(t=N.current)||void 0===t?void 0:t.contains(e.target)))&&("Escape"!==e.key&&"Enter"!==e.key||(E(!P),null===(o=N.current)||void 0===o||o.focus()))},J=function(e){var n;P&&!(null===(n=K.current)||void 0===n?void 0:n.contains(e.target))&&E(!1)};(0,i.useEffect)((function(){return window.addEventListener("keydown",H),window.addEventListener("click",J),function(){window.removeEventListener("keydown",H),window.removeEventListener("click",J)}}),[P,K]);var Y=M((null==u?void 0:u.map((function(e){return e.type===T?L(e):e})))||[],h,G(m||{})),q=function(e,n,t){return e.map((function(e){var o=e.value,i=e.label,r=e.groupSelectable,l=e.id,a=e.type,c=e.items,s=e.noFilter,u=a===T?c.map((function(e){return L(e)})):c;return{label:i,noFilter:s,value:o,type:a,groupSelectable:r,items:M(V(V([],r?[B({value:o||"",label:i||"",id:l||"",type:a,className:"pf-u-pl-xs"},e)]:[],!0),u,!0),n,t,a,o,i,l,e)}})).filter((function(e){var n=e.noFilter,t=e.items;return!n||(void 0===t?[]:t).length>0}))}(s,h,G(m||{})),Q=function(e,n,t,i){return void 0===i&&(i=""),(0,o.jsx)(l.MenuItem,W({itemId:n,className:null==e?void 0:e.className,onClick:e.onClick&&(t||e.type)===_?function(n){e.onClick&&e.onClick(),n.preventDefault()}:void 0},{children:(t||e.type)===T?(0,o.jsx)(l.TreeView,{data:[U(e,i,k,m||{})],onCheck:function(n,t){return function(e,n,t){var o,i,r;return null===(i=(o=t[0]).onClick)||void 0===i?void 0:i.call(o,e,n,void 0,null===(r=null==e?void 0:e.target)||void 0===r?void 0:r.checked)}(n,t,[e])},hasChecks:!0}):(t||e.type)===_?(0,o.jsx)(l.Checkbox,W({},e,{label:null==e?void 0:e.label,isChecked:(null==e?void 0:e.isChecked)||R(i,(null==e?void 0:e.value)||n,null==e?void 0:e.id,null==e?void 0:e.tagValue,k,m||{})||!1,onChange:function(n,t){var o;null===(o=null==e?void 0:e.onChange)||void 0===o||o.call(e,n,t)},onClick:e.onClick?function(n){e.onClick&&e.onClick(),n.stopPropagation()}:void 0,name:(null==e?void 0:e.name)||(null==e?void 0:e.value)||"".concat(i,"-").concat(n),id:(null==e?void 0:e.id)||(null==e?void 0:e.value)||"".concat(i,"-").concat(n)})):(t||e.type)===A?(0,o.jsx)(l.Radio,W({},e,{isChecked:(null==e?void 0:e.isChecked)||R(i,(null==e?void 0:e.value)||n,null==e?void 0:e.id,null==e?void 0:e.tagValue,k,m||{})||!1,onChange:function(n,t){var o;null===(o=null==e?void 0:e.onChange)||void 0===o||o.call(e,n,t)},value:(null==e?void 0:e.value)||n,name:(null==e?void 0:e.name)||(null==e?void 0:e.value)||"".concat(i,"-").concat(n),label:(null==e?void 0:e.label)||"",id:(null==e?void 0:e.id)||(null==e?void 0:e.value)||"".concat(i,"-").concat(n)})):(t||e.type)===F?(0,o.jsx)(l.Button,W({id:e.id,className:"pf-c-select__option-button ".concat((null==e?void 0:e.className)||""),variant:null==e?void 0:e.variant,onClick:e.onClick},{children:null==e?void 0:e.label})):(null==e?void 0:e.label)||""}),"".concat(e.value,"-").concat(n,"-item"))},X=function(e,n,t){return void 0===t&&(t=""),e.map((function(e,i){return(n||e.type)===T?(0,o.jsx)("div",W({className:"ins-c-tree-view"},{children:Q(e,i,n,t)}),"".concat(e.value,"-").concat(i,"-item")):Q(e,i,n,t)}))},$=(document.activeElement===Z.current||document.activeElement===N.current)&&(null==O?void 0:O.length)>0,ee=function(e){I(e),null==v||v(e)};return(0,o.jsx)("div",W({ref:z},{children:(0,o.jsx)(l.Popper,{appendTo:z.current,trigger:(0,o.jsx)(l.MenuToggle,W({"aria-label":"Group filter",ref:N,onClick:function(e){return(n=e).stopPropagation(),n.persist(),void E(!P);var n},isExpanded:P,className:f()("ins-c-group-menu-toggle",n),isDisabled:j},{children:p||v?(0,o.jsxs)("div",{children:[(0,o.jsx)(l.TextInput,{ref:Z,className:f()({"ins-c-input__clearable":$}),onChange:function(e){return ee(e)},onClick:function(e){return e.preventDefault()},onKeyDown:function(e){" "!==e.key&&"Escape"!==e.key||(e.preventDefault(),ee(" "===e.key?"".concat(O," "):""),"Escape"===e.key&&E(!1))},isDisabled:j,"aria-label":"input with dropdown and clear button",placeholder:b,value:O,tabIndex:0,type:"text"}),$&&(0,o.jsx)("span",W({className:"ins-c-icon__link"},{children:(0,o.jsx)(a.CloseIcon,{onClick:function(){ee(""),E(!1)}})}))]}):b})),popper:(0,o.jsx)(l.Menu,W({ref:K,className:f()("ins-c-menu__scrollable",n,{"pf-m-expanded":P})},{children:(0,o.jsx)(l.MenuContent,{children:(0,o.jsxs)(l.MenuList,W({"aria-label":"Group filter"},{children:[Y.length>0&&(0,o.jsx)(l.MenuGroup,{children:X(Y)}),q.map((function(e,n){return(0,o.jsx)(l.MenuGroup,W({label:e.groupSelectable||"string"!=typeof e.label?void 0:e.label},{children:X(e.items,e.type,e.value)}),"".concat(e.label,"-").concat(n,"-group"))})),g?(0,o.jsx)(l.MenuItem,W({itemId:"loader",className:"ins-c-menu__show--more"},x,{onClick:function(e){return g(e)}},{children:y})):(0,o.jsx)("span",{hidden:!0,value:""})]}))})})),isVisible:P})}))}},J=function(){return J=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},J.apply(this,arguments)};const Y=function(e){var n=e.hideLabel,t=void 0!==n&&n,r=e.id,c=void 0===r?"default-input":r,s=e.isDisabled,u=void 0!==s&&s,d=e.items,p=void 0===d?[]:d,v=e.onChange,h=e.placeholder,g=e.useMobileLayout,b=void 0!==g&&g,m=e.value,y=void 0===m?"":m,x=e.innerRef,j=parseInt(C.ZP.value.replace("px","")),k=function(e){return e<=j},w=(0,i.useState)(!1),O=w[0],I=w[1],D=(0,i.useState)(),P=D[0],E=D[1],N=(0,i.useState)(k(window.innerWidth)),T=N[0],_=N[1],A=(0,i.useRef)((function(e){_(k((null==e?void 0:e.target).innerWidth))}));(0,i.useEffect)((function(){return b||console.warn('The prop "useMobileLayout" is set to false. You are using an outdated mobile layout of conditional filter.\n    Please switch to new layout by adding "useMobileLayout={true}" prop to the PrimaryToolbar or ConditionalFilter directly.\n    The new mobile layout will become the default in next minor release.'),window.addEventListener("resize",A.current),function(){A.current&&window.removeEventListener("resize",A.current)}}),[]);var F=v?y:P,B=p&&p.length&&(p.find((function(e,n){return e.value===F||n===Number(F)}))||p[0]),V=v||function(e,n){return E(n)},R=b&&T,M=function(e){return e[0].toUpperCase()+e.substring(1)},L=B&&(H[B.type]||H.text),G=b&&T?function(e){return(0,o.jsx)(l.ToolbarToggleGroup,J({},e,{breakpoint:"md",toggleIcon:(0,o.jsx)(a.FilterIcon,{})}))}:i.Fragment;return(0,o.jsxs)(G,{children:[b&&T&&(0,o.jsx)(l.ToolbarGroup,J({className:"ins-c-conditional-filter mobile"},{children:p.map((function(e,n){var t=e&&(H[e.type]||H.text);return(0,o.jsx)(l.ToolbarItem,{children:(0,o.jsx)(t,J({},e.type!==Z&&{placeholder:h||e.placeholder||"Filter by ".concat(e.label),id:e.filterValues?e.filterValues.id:F?String(F):void 0,innerRef:x},e.filterValues))},n)}))})),!R&&(0,o.jsx)(i.Fragment,{children:!p||p&&p.length<=0?(0,o.jsx)("div",J({className:f()("ins-c-conditional-filter",{desktop:b})},{children:(0,o.jsx)(S,{innerRef:x,id:c,isDisabled:u,onChange:function(e){return V(e,e.target.value)},placeholder:h,value:F?String(F):void 0,"widget-type":"InsightsInput"})})):(0,o.jsxs)(l.Split,J({className:f()("ins-c-conditional-filter",{desktop:b})},{children:[p.length>1&&(0,o.jsx)(l.SplitItem,{children:(0,o.jsx)(l.Dropdown,{ref:x,className:"ins-c-conditional-filter__group",onSelect:function(){return I(!1)},isOpen:O,ouiaId:"ConditionalFilter",toggle:(0,o.jsxs)(l.DropdownToggle,J({"aria-label":"Conditional filter",onToggle:I,isDisabled:u,className:t?"ins-c-conditional-filter__no-label":"",ouiaId:"ConditionalFilter"},{children:[(0,o.jsx)(a.FilterIcon,{size:"sm"}),!t&&(0,o.jsx)("span",J({className:"ins-c-conditional-filter__value-selector"},{children:B&&M(String(B.label))}))]})),dropdownItems:p.map((function(e,n){return(0,o.jsx)(l.DropdownItem,J({component:"button",ouiaId:String(e.label),onClick:function(t){return V(t,e.value||n)},isHovered:B.label===e.label},{children:M(String(e.label))}),e.id?"".concat(e.id,"-dropdown"):n)}))})}),L&&(0,o.jsx)(l.SplitItem,J({isFilled:!0},{children:(0,o.jsx)(L,J({},B.type!==Z&&{placeholder:h||B.placeholder||"Filter by ".concat(B.label),id:B.filterValues&&B.filterValues.id||F?String(F):void 0},B.filterValues))}))]}))})]})};var q=function(){return q=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},q.apply(this,arguments)};function Q(e){return Object.prototype.hasOwnProperty.call(e,"category")}function X(e){return!Q(e)}const $=function(e){var n=e.className,t=e.filters,i=void 0===t?[]:t,r=e.onDelete,a=void 0===r?function(){}:r,c=e.deleteTitle,s=void 0===c?"Clear filters":c,u=e.showDeleteButton,d=e.onDeleteGroup,p=i.filter(Q),v=p.map((function(e,n){return(0,o.jsx)(l.ChipGroup,q({categoryName:String(e.category)||" "},d&&{isClosable:!0,onClick:function(t){t.stopPropagation(),d(t,[e],p.filter((function(e,t){return t!==n})))}},{children:e.chips.map((function(n){return(0,o.jsxs)(l.Chip,q({onClick:function(t){t.stopPropagation(),a(t,[q(q({},e),{chips:[n]})])}},{children:[n.name,n.count&&(0,o.jsx)(l.Badge,q({isRead:n.isRead},{children:n.count}),"chip_badge_".concat(n.id))]}),n.name)}))}),"group_".concat(e.category))})),h=i.filter(X);return(0,o.jsxs)("span",q({className:f()(n,"ins-c-chip-filters")},{children:[v,h&&h.map((function(e){return(0,o.jsx)(l.ChipGroup,{children:(0,o.jsxs)(l.Chip,q({onClick:function(n){n.stopPropagation(),a(n,[e])}},{children:[e.name,e.count&&(0,o.jsx)(l.Badge,q({isRead:e.isRead},{children:e.count}),"chip_badge_".concat(e.id))]}))},"group_plain_chip_".concat(e.name))})),(!0===u||void 0===u&&i.length>0)&&(0,o.jsx)(l.Button,q({variant:"link",ouiaId:"ClearFilters",onClick:function(e){return a(e,i,!0)}},{children:s}))]}))};var ee=function(){return ee=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},ee.apply(this,arguments)};const ne=function(e){var n=e.direction,t=void 0===n?c.SortByDirection.asc:n,i=e.onSortChange,r=void 0===i?function(){}:i;return(0,o.jsx)(l.Button,ee({variant:"plain",onClick:function(e){return r(e,function(e){return e===c.SortByDirection.asc?c.SortByDirection.desc:c.SortByDirection.asc}(t))}},{children:t===c.SortByDirection.asc?(0,o.jsx)(a.SortAmountUpIcon,{size:"sm"}):(0,o.jsx)(a.SortAmountDownIcon,{size:"sm"})}))};var te=function(){return te=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},te.apply(this,arguments)};const oe=function(e){var n,t=e.id,i=e.className,s=e.toggleIsExpanded,u=void 0===s?function(){}:s,d=e.bulkSelect,p=e.filterConfig,f=e.dedicatedAction,v=e.actionsConfig,h=e.sortByConfig,g=e.pagination,b=e.activeFiltersConfig,y=e.children,x=e.exportConfig,C=e.expandAll,k=e.useMobileLayout,S=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)n.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(t[o[i]]=e[o[i]])}return t}(e,["id","className","toggleIsExpanded","bulkSelect","filterConfig","dedicatedAction","actionsConfig","sortByConfig","pagination","activeFiltersConfig","children","exportConfig","expandAll","useMobileLayout"]),w=function(e,n,t){if(t||2===arguments.length)for(var o,i=0,r=n.length;i<r;i++)!o&&i in n||(o||(o=Array.prototype.slice.call(n,0,i)),o[i]=n[i]);return e.concat(o||Array.prototype.slice.call(n))}([],h?[{label:"Sort order ASC",props:{isDisabled:h.direction===c.SortByDirection.asc},onClick:function(e){return h.onSortChange&&h.onSortChange(e,c.SortByDirection.asc)}},{label:"Sort order DESC",props:{isDisabled:h.direction===c.SortByDirection.desc},onClick:function(e){return h.onSortChange&&h.onSortChange(e,c.SortByDirection.desc)}}]:[],!0);return(0,o.jsxs)(l.Toolbar,te({},S,{className:"".concat(i||""," ins-c-primary-toolbar"),toggleIsExpanded:u,id:t?"".concat(t):"ins-primary-data-toolbar",ouiaId:"PrimaryToolbar"},{children:[(0,o.jsxs)(l.ToolbarContent,{children:[(C||d||p||f)&&(0,o.jsxs)(l.ToolbarGroup,te({className:"ins-c-primary-toolbar__group-filter pf-m-spacer-md pf-m-space-items-lg",variant:"filter-group"},{children:[C&&(0,o.jsx)(l.ToolbarItem,{children:(n=C,r().isValidElement(n)?C:(0,o.jsx)(l.Button,te({},C.buttonProps,{variant:"plain","aria-label":"".concat(C.isAllExpanded?"Collapse":"Expand"," all"),onClick:function(e){return C.onClick(e,!C.isAllExpanded)},ouiaId:"ExpandCollapseAll",isDisabled:C.isDisabled},{children:(0,o.jsx)(l.ToolbarExpandIconWrapper,{children:C.isAllExpanded?(0,o.jsx)(a.AngleDownIcon,{}):(0,o.jsx)(a.AngleRightIcon,{})})})))}),d&&(0,o.jsx)(l.ToolbarItem,{children:r().isValidElement(d)?d:(0,o.jsx)(j,te({ouiaId:"BulkSelect"},d))}),p&&(0,o.jsx)(l.ToolbarItem,te({className:"ins-c-primary-toolbar__filter"},{children:r().isValidElement(p)?p:(0,o.jsx)(Y,te({useMobileLayout:k},p))})),f&&(0,o.jsx)(l.ToolbarItem,{children:f})]})),r().isValidElement(v)?v:(v&&v.actions&&v.actions.length>0||h||x)&&(0,o.jsx)(m,te({},v||{},{exportConfig:x,overflowActions:w})),h&&(0,o.jsx)(l.ToolbarItem,te({className:"ins-c-primary-toolbar__sort-by"},{children:r().isValidElement(h)?h:(0,o.jsx)(ne,te({},h))})),y,g&&(0,o.jsx)(l.ToolbarItem,te({className:"ins-c-primary-toolbar__pagination"},{children:r().isValidElement(g)?g:(0,o.jsx)(l.Pagination,te({isCompact:!0,ouiaId:"CompactPagination"},g))}))]}),b&&r().isValidElement(b)?(0,o.jsx)(l.ToolbarContent,{children:(0,o.jsx)(l.ToolbarItem,{children:b})}):void 0!==(null==b?void 0:b.filters)&&(b.filters.length>0||!0===b.showDeleteButton)&&(0,o.jsx)(l.ToolbarContent,{children:(0,o.jsx)(l.ToolbarItem,{children:(0,o.jsx)($,te({},b))})})]}))}},14259:e=>{e.exports=function(e,n,t){var o=-1,i=e.length;n<0&&(n=-n>i?0:i+n),(t=t>i?i:t)<0&&(t+=i),i=n>t?0:t-n>>>0,n>>>=0;for(var r=Array(i);++o<i;)r[o]=e[o+n];return r}},57406:(e,n,t)=>{var o=t(71811),i=t(10928),r=t(40292),l=t(40327);e.exports=function(e,n){return n=o(n,e),null==(e=r(e,n))||delete e[l(i(n))]}},60696:(e,n,t)=>{var o=t(68630);e.exports=function(e){return o(e)?void 0:e}},40292:(e,n,t)=>{var o=t(97786),i=t(14259);e.exports=function(e,n){return n.length<2?e:o(e,i(n,0,-1))}},57557:(e,n,t)=>{var o=t(29932),i=t(85990),r=t(57406),l=t(71811),a=t(98363),c=t(60696),s=t(99021),u=t(46904),d=s((function(e,n){var t={};if(null==e)return t;var s=!1;n=o(n,(function(n){return n=l(n,e),s||(s=n.length>1),n})),a(e,u(e),t),s&&(t=i(t,7,c));for(var d=n.length;d--;)r(t,n[d]);return t}));e.exports=d}}]);
//# sourceMappingURL=../sourcemaps/7887.be577477d38386dcb1bb2e0119e1f33b.js.map