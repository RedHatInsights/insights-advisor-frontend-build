(self.webpackChunkadvisor_frontend=self.webpackChunkadvisor_frontend||[]).push([[7887],{7887:(e,n,o)=>{"use strict";o.d(n,{Z:()=>re});var t=o(85893),i=o(93264),r=o.n(i),l=o(22938),a=o(52017),c=o(17855),s=function(){return s=Object.assign||function(e){for(var n,o=1,t=arguments.length;o<t;o++)for(var i in n=arguments[o])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},s.apply(this,arguments)},u=function(e,n,o){if(o||2===arguments.length)for(var t,i=0,r=n.length;i<r;i++)!t&&i in n||(t||(t=Array.prototype.slice.call(n,0,i)),t[i]=n[i]);return e.concat(t||Array.prototype.slice.call(n))};const d=function(e){var n,o=e.extraItems,c=void 0===o?[]:o,d=e.onSelect,p=void 0===d?function(){}:d,f=e.isDisabled,v=e.tooltipText,h=function(e,n){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(o[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(t=Object.getOwnPropertySymbols(e);i<t.length;i++)n.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(o[t[i]]=e[t[i]])}return o}(e,["extraItems","onSelect","isDisabled","tooltipText"]),g=(0,i.useState)(!1),b=g[0],m=g[1];return(0,t.jsx)(r().Fragment,{children:(n=(0,t.jsx)(l.Dropdown,s({isPlain:!0},h,{onSelect:function(){return m((function(e){return!e}))},toggle:(0,t.jsx)(l.DropdownToggle,s({"aria-label":"Export",toggleIndicator:null,onToggle:function(e){return m(e)},isDisabled:f,ouiaId:"Export"},{children:(0,t.jsx)(a.ExportIcon,{size:"sm"})})),isOpen:b,ouiaId:"Export",dropdownItems:u([(0,t.jsx)(l.DropdownItem,s({ouiaId:"DownloadCSV",component:"button",onClick:function(e){return p(e,"csv")},isDisabled:f},{children:"Export to CSV"}),"download-csv"),(0,t.jsx)(l.DropdownItem,s({ouiaId:"DownloadJSON",component:"button",onClick:function(e){return p(e,"json")},isDisabled:f},{children:"Export to JSON"}),"download-json")],c,!0)})),(0,t.jsx)(r().Fragment,{children:v?(0,t.jsx)(l.Tooltip,s({content:v},{children:n})):n}))})};var p=o(94184),f=o.n(p),v=function(){return v=Object.assign||function(e){for(var n,o=1,t=arguments.length;o<t;o++)for(var i in n=arguments[o])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},v.apply(this,arguments)},h=function(e,n,o){if(o||2===arguments.length)for(var t,i=0,r=n.length;i<r;i++)!t&&i in n||(t||(t=Array.prototype.slice.call(n,0,i)),t[i]=n[i]);return e.concat(t||Array.prototype.slice.call(n))};function g(e){return void 0!==e.label}var b=function(e,n){var o,t="object"==typeof e&&null!==typeof e&&"function"==typeof(null==e?void 0:e.onClick)?function(o){return null==e?void 0:e.onClick(o,e,n)}:void 0;return v(v({},null==e?void 0:e.props),{onClick:t,component:(null===(o=null==e?void 0:e.props)||void 0===o?void 0:o.component)||(r().isValidElement(e.label||e)?"div":"button"),children:"object"==typeof e&&null!==typeof e?null==e?void 0:e.label:e})};const m=function(e){var n,o=e.actions,a=void 0===o?[]:o,c=e.overflowActions,s=void 0===c?[]:c,u=e.onSelect,p=void 0===u?function(){}:u,m=e.dropdownProps,y=void 0===m?{}:m,x=e.kebabToggleProps,j=e.exportConfig,C=(0,i.useState)(!1),k=C[0],S=C[1],w=function(e){return S(e)},O=a[0],I=a.slice(1),D=h(h(h(h([],O?[(0,t.jsx)(l.DropdownItem,v({},b(O,"first-action"),{className:f()("ins-c-primary-toolbar__first-action",g(O)?null===(n=null==O?void 0:O.props)||void 0===n?void 0:n.className:void 0)}),"first-action")]:[],!0),I.map((function(e,n){var o;return(0,t.jsx)(l.DropdownItem,v({},b(e,n)),(null==e?void 0:e.key)||(null===(o=null==e?void 0:e.props)||void 0===o?void 0:o.key)||n)})),!0),a.length>0&&s.length>0?[(0,t.jsx)(l.DropdownSeparator,{className:"ins-c-primary-toolbar__overflow-actions-separator"},"separator")]:[],!0),s.map((function(e,n){return function(e,n){var o=e;return(0,i.createElement)(l.DropdownItem,v({},o.props,{className:"ins-c-primary-toolbar__overflow-actions",key:o.value||o.key||"".concat(n,"-overflow"),component:o.props&&o.props.component||r().isValidElement(o.label||e)?"div":"button",onClick:function(e){return o.onClick&&o.onClick(e,o,n)}}),o.label||e)}(e,n)})),!0);return(0,t.jsxs)(i.Fragment,{children:[O&&(0,t.jsx)(l.ToolbarItem,v({className:"ins-c-primary-toolbar__first-action pf-m-spacer-sm"},{children:g(O)?(0,t.jsx)(l.Button,v({ouiaId:"".concat(O.label)},O.props,{onClick:O.onClick||O.props&&O.props.onClick||void 0},{children:O.label})):O})),j&&(j.extraItems||j.onSelect)&&(0,t.jsx)(l.ToolbarItem,v({className:"pf-m-spacer-sm"},{children:(0,t.jsx)(d,v({},j))})),(a&&(null==a?void 0:a.length)>0||s.length>0)&&(0,t.jsx)(l.ToolbarItem,v({className:"".concat(a.length<=1?"ins-m-actions--empty":""," ins-c-primary-toolbar__actions pf-m-spacer-sm")},{children:(0,t.jsx)(l.Dropdown,v({},y,{isOpen:k,isPlain:!0,onSelect:function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];p&&p.apply(void 0,e),w(!1)},ouiaId:"Actions",toggle:(0,t.jsx)(l.KebabToggle,v({},x,{onToggle:function(e){w(e)}})),dropdownItems:D}))}))]})};var y=function(){return y=Object.assign||function(e){for(var n,o=1,t=arguments.length;o<t;o++)for(var i in n=arguments[o])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},y.apply(this,arguments)},x=function(e,n,o){if(o||2===arguments.length)for(var t,i=0,r=n.length;i<r;i++)!t&&i in n||(t||(t=Array.prototype.slice.call(n,0,i)),t[i]=n[i]);return e.concat(t||Array.prototype.slice.call(n))};const j=function(e){var n=e.id,o=e.isDisabled,r=void 0!==o&&o,a=e.items,c=void 0===a?[]:a,s=e.onSelect,u=void 0===s?function(){}:s,d=e.checked,p=void 0!==d&&d,v=e.toggleProps,h=e.count,g=e.className,b=void 0===g?"":g,m=e.ouiaId,j=e.ouiaSafe,C=void 0===j||j,k=function(e,n){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(o[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(t=Object.getOwnPropertySymbols(e);i<t.length;i++)n.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(o[t[i]]=e[t[i]])}return o}(e,["id","isDisabled","items","onSelect","checked","toggleProps","count","className","ouiaId","ouiaSafe"]),S=(0,i.useState)(!1),w=S[0],O=S[1],I=(0,i.useRef)(!1).current,D=(0,i.useRef)((0,l.getDefaultOUIAId)("RHI/BulkSelect")).current,P=function(e){return O(e)},N=void 0!==m?m:D;return(0,t.jsx)(i.Fragment,{children:c&&c.length>0?(0,t.jsx)(l.Dropdown,y({onSelect:function(){return P(!1)}},k,{className:f()(b,"ins-c-bulk-select"),ouiaId:N,ouiaSafe:C,toggle:(0,t.jsx)(l.DropdownToggle,y({},v,{isDisabled:r,ouiaId:N,splitButtonItems:[(0,t.jsx)(i.Fragment,{children:I?(0,t.jsx)(l.DropdownToggleCheckbox,{id:n?"".concat(n,"-toggle-checkbox"):"toggle-checkbox","aria-label":"Select all",onChange:u,checked:p,ouiaId:N}):(0,t.jsx)(l.DropdownToggleCheckbox,y({id:n?"".concat(n,"-toggle-checkbox"):"toggle-checkbox","aria-label":"Select all",onChange:u,isChecked:p,ouiaId:N},{children:h?"".concat(h," selected"):""}))},"split-checkbox")],onToggle:P})),isOpen:w,dropdownItems:x(x([],void 0!==h&&h>0?[(0,t.jsxs)(l.DropdownItem,y({isDisabled:!0,className:f()({"ins-c-bulk-select__selected":!I})},{children:[h," Selected"]}),"count")]:[],!0),c.map((function(e,n){return(0,t.jsx)(l.DropdownItem,y({component:"button",ouiaId:"".concat(N,"-").concat(e.key||n),onClick:function(o){return e.onClick&&e.onClick(o,e,n)}},null==e?void 0:e.props,{children:e.title}),e.key||n)})),!0)})):(0,t.jsx)(l.Checkbox,y({},k,{"aria-label":"Select all",className:f()(b,"ins-c-bulk-select"),id:"".concat(n,"-checkbox"),isChecked:p,onChange:u}))})};var C=o(78236);function k(e){return void 0!==e.value}const S=function(e){var n=e.icon,o=e.id,r=e.isDisabled,c=void 0!==r&&r,s=e.className,u=e.onChange,d=e.onSubmit,p=void 0===d?function(){}:d,f=e.value,v=void 0===f?"":f,h=e.placeholder,g=e.innerRef,b=function(e,n){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(o[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(t=Object.getOwnPropertySymbols(e);i<t.length;i++)n.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(o[t[i]]=e[t[i]])}return o}(e,["icon","id","isDisabled","className","onChange","onSubmit","value","placeholder","innerRef"]),m=v,y=(0,i.useState)(""),x=y[0],j=y[1],C=n||a.SearchIcon;return(0,t.jsxs)(i.Fragment,{children:[(0,t.jsx)(l.TextInput,{"aria-label":b["aria-label"]||"text input",className:"ins-c-conditional-filter ".concat(s||""),"data-ouia-component-type":"PF4/TextInput",id:o,isDisabled:c,value:u?"string"==typeof v?m:m.value:x,onChange:function(e,n){return function(e,n){return u?u(e,n):j(n)}(n,n.target.value)},onKeyDown:function(e){return"Enter"===e.key&&(null==p?void 0:p(e,("string"==typeof v?m:m.value)||x))},ouiaId:"ConditionalFilter",placeholder:h,"widget-type":"InsightsInput",ref:g}),(0,t.jsx)(C,{size:"sm",className:"ins-c-search-icon"})]})};var w=o(18446),O=o.n(w),I=o(57557),D=o.n(I),P=function(){return P=Object.assign||function(e){for(var n,o=1,t=arguments.length;o<t;o++)for(var i in n=arguments[o])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},P.apply(this,arguments)},N=function(e,n){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(o[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(t=Object.getOwnPropertySymbols(e);i<t.length;i++)n.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(o[t[i]]=e[t[i]])}return o},T=function(e,n,o){if(o||2===arguments.length)for(var t,i=0,r=n.length;i<r;i++)!t&&i in n||(t||(t=Array.prototype.slice.call(n,0,i)),t[i]=n[i]);return e.concat(t||Array.prototype.slice.call(n))};var E=function(){return E=Object.assign||function(e){for(var n,o=1,t=arguments.length;o<t;o++)for(var i in n=arguments[o])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},E.apply(this,arguments)},_=function(e,n){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(o[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(t=Object.getOwnPropertySymbols(e);i<t.length;i++)n.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(o[t[i]]=e[t[i]])}return o};const A="treeView",F="checkbox",B="radio",V="button";var R=function(){return R=Object.assign||function(e){for(var n,o=1,t=arguments.length;o<t;o++)for(var i in n=arguments[o])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},R.apply(this,arguments)},M=function(e,n,o){if(o||2===arguments.length)for(var t,i=0,r=n.length;i<r;i++)!t&&i in n||(t||(t=Array.prototype.slice.call(n,0,i)),t[i]=n[i]);return e.concat(t||Array.prototype.slice.call(n))},L=function(e,n,o,t,i,r){var l,a,c,s,u,d=R(R({},r),i);if(void 0===d[e])return!1;if(void 0!==(null==(u=d[e][n])?void 0:u.group)){var p=d[e][n];if(p.isSelected){if(null===(l=null==p?void 0:p.item)||void 0===l?void 0:l.id)return o===(null===(a=null==p?void 0:p.item)||void 0===a?void 0:a.id);if(null===(c=null==p?void 0:p.item)||void 0===c?void 0:c.tagValue)return t===(null===(s=null==p?void 0:p.item)||void 0===s?void 0:s.tagValue)}return Boolean(p.isSelected)}return Boolean(d[e][n])},G=function(e,n,o,t,i,r,l,a){return void 0===i&&(i=""),((null==e?void 0:e.map((function(c,s){return R(R({},c),{className:"".concat((null==c?void 0:c.className)||"pf-u-pl-sm"),key:c.id||c.value||s,value:String(c.value||c.id||s),onClick:function(s,u,d){var p,f=[s,o(t||c.type,i,(t||c.type)===A?u:c.value,d),R({value:i,label:r||c.label,id:l||c.id,type:t||c.type,items:e},a||c),c,i,c.value];null==n||n.apply(void 0,f),null===(p=null==c?void 0:c.onClick)||void 0===p||p.call(c,s,R(R({},c),{label:"string"==typeof c.label?c.label:""}),void 0,d)}})})))||[]).filter((function(e){return!e.noFilter}))},z=function(e){return e.id=e.id||e.value,e.name=e.label||e.name,e.value=e.id,e.label=e.name||"",e.children?R(R({},e),{children:e.children.map((function(e){return z(e)}))}):e},U=function(e){return function(n,o,t,i){void 0===n&&(n=V),void 0===o&&(o=""),void 0===t&&(t=""),void 0===i&&(i=!1);var r=null==e?void 0:e[o],l=n===A?[t].reduce((function e(n,o){return Array.isArray(null==o?void 0:o.children)?o.children.reduce(e,n)||[]:(n.push(o),n)}),[]):[],a=n===A?l.map((function(e){return e.id})):[String(t)];if(r){var c=e;return a.map((function(e){var t,r,l,a;void 0===e&&(e="");var s=c[o];c=n!==B&&(s[e]instanceof Object?s[e].isSelected:Boolean(s[e]))?R(R({},c),((t={})[o]=R(R({},s||{}),((r={})[e]=n===A&&i,r)),t)):R(R({},c),((l={})[o]=R(R({},n!==B&&s||{}),((a={})[e]=!0,a)),l))})),c}return a.reduce((function(e,n){var t,i;return R(R({},e),((t={})[o]=R(R({},null==e?void 0:e[o]),((i={})[n||""]=!0,i)),t))}),e)}},W=function(e,n,o,t){return e.children?e.children.every((function(e){return W(e,n,o,t)})):L(n,e.id||"",void 0,void 0,o,t)},H=function(e,n,o,t){return e.children?e.children.some((function(e){return H(e,n,o,t)})):L(n,e.id||"",void 0,void 0,o,t)},J=function(e,n,o,t){var i=W(e,n,o,t);return e.checkProps={checked:!1},i?e.checkProps.checked=!0:H(e,n,o,t)&&(e.checkProps={checked:null}),e.children?R(R({},e),{children:e.children.map((function(e){return J(e,n,o,t)}))}):e},K=function(){return K=Object.assign||function(e){for(var n,o=1,t=arguments.length;o<t;o++)for(var i in n=arguments[o])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},K.apply(this,arguments)};var Y="custom",Z={text:S,checkbox:function(e){var n=e.items,o=void 0===n?[]:n,r=e.value,a=void 0===r?[]:r,c=e.onChange,s=void 0===c?function(){}:c,u=e.isDisabled,d=void 0!==u&&u,p=N(e,["items","value","onChange","isDisabled"]),f=p.placeholder,v=p.className,h=(0,i.useState)(!1),g=h[0],b=h[1],m=(0,i.useState)([]),y=m[0],x=m[1],j=(0,i.useRef)(y),C=function(e){j.current=y,x(e)};(0,i.useEffect)((function(){!O()(j.current,a)&&a&&C(a)}),[y,a]);var w=function(){return Array.from(new Set(T(T([],a&&a.length>0&&a.constructor===Array?a.map((function(e){return k(e)?e.value:e})):[],!0),y,!0)))};return(0,t.jsx)(i.Fragment,{children:!o||o&&o.length<=0?(0,t.jsx)(S,P({},p,{onChange:s,isDisabled:d,value:"".concat(w())})):(0,t.jsx)(l.Select,P({className:v,variant:l.SelectVariant.checkbox,"aria-label":"Select Input",onToggle:function(e){return b(e)},isDisabled:d,onSelect:function(e,n){return function(e,n){var o=w();o=o.includes(n)?o.filter((function(e){return e!==n})):T(T([],o,!0),[n],!1),null==s||s(e,o,n),C(o)}(e,n)},selections:w(),isOpen:g,placeholderText:f,ouiaId:f},{children:o.map((function(e,n){var o=e.value,t=e.onClick,r=e.label,a=e.id,c=N(e,["value","onClick","label","id"]);return(0,i.createElement)(l.SelectOption,P({},D()(c,"onChange"),{key:a||n,value:String(o||a||n),onClick:function(e){return null==t?void 0:t(e,P({value:o,label:r,id:a},c),n)}}),r)}))}))})},radio:function(e){var n=e.items,o=void 0===n?[]:n,r=e.onChange,a=void 0===r?function(){}:r,c=e.isDisabled,s=void 0!==c&&c,u=_(e,["items","onChange","isDisabled"]),d=u.placeholder,p=u.className,f=u.value,v=(0,i.useState)(!1),h=v[0],g=v[1],b=(0,i.useState)(),m=b[0],y=b[1],x=function(){return f?k(f)?f.value:f:m?k(m)?m.value:m:void 0},j=x();return(0,t.jsx)(i.Fragment,{children:!o||o&&o.length<=0?(0,t.jsx)(S,E({},u,{onChange:a,isDisabled:s,value:"".concat(x())})):(0,t.jsx)(l.Select,E({className:p,variant:l.SelectVariant.single,"aria-label":"Select Input",isDisabled:s,onToggle:function(e){return g(e)},onSelect:function(e,n){return function(e,n){null==a||a(e,n),y(n)}(e,n)},isOpen:h,placeholderText:d,ouiaId:d},{children:o.map((function(e,n){var o=e.value,r=e.isChecked,a=e.onChange,c=e.label,s=e.id,u=_(e,["value","isChecked","onChange","label","id"]);return(0,i.createElement)(l.SelectOption,E({},u,{key:s||n,value:o||""+n}),(0,t.jsx)(l.Radio,{name:s||"".concat(n,"-radio"),label:c,value:o||n,isChecked:r||void 0!==j&&j===o||void 0!==j&&j===""+n||!1,onChange:function(e,t){return null==a?void 0:a(t,E({id:s,label:c,value:o,isChecked:r},u),n)},id:s||"".concat(o,"-").concat(n)}))}))}))})},custom:i.Fragment,group:function(e){var n=e.className,o=e.filterBy,r=void 0===o?"":o,a=e.groups,c=void 0===a?[]:a,s=e.items,u=e.isFilterable,d=void 0!==u&&u,p=e.onFilter,v=e.onChange,h=e.onShowMore,g=e.placeholder,b=e.selected,m=e.showMoreTitle,y=e.showMoreOptions,x=e.isDisabled,j=(0,i.useState)({}),C=j[0],k=j[1],S=(0,i.useState)(""),w=S[0],O=S[1],I=(0,i.useState)(!1),D=I[0],P=I[1],N=(0,i.useRef)(null),T=(0,i.useRef)(null),E=(0,i.useRef)(null);(0,i.useEffect)((function(){b&&k(b)}),[b]),(0,i.useEffect)((function(){O(r)}),[r]);var _=function(e){var n,o,t;D&&((null===(n=E.current)||void 0===n?void 0:n.contains(e.target))||(null===(o=N.current)||void 0===o?void 0:o.contains(e.target)))&&("Escape"!==e.key&&"Enter"!==e.key||(P(!D),null===(t=N.current)||void 0===t||t.focus()))},W=function(e){var n;D&&!(null===(n=E.current)||void 0===n?void 0:n.contains(e.target))&&P(!1)};(0,i.useEffect)((function(){return window.addEventListener("keydown",_),window.addEventListener("click",W),function(){window.removeEventListener("keydown",_),window.removeEventListener("click",W)}}),[D,E]);var H=G((null==s?void 0:s.map((function(e){return e.type===A?z(e):e})))||[],v,U(b||{})),Y=function(e,n,o){return e.map((function(e){var t=e.value,i=e.label,r=e.groupSelectable,l=e.id,a=e.type,c=e.items,s=e.noFilter,u=a===A?c.map((function(e){return z(e)})):c;return{label:i,noFilter:s,value:t,type:a,groupSelectable:r,items:G(M(M([],r?[R({value:t||"",label:i||"",id:l||"",type:a,className:"pf-u-pl-xs"},e)]:[],!0),u,!0),n,o,a,t,i,l,e)}})).filter((function(e){var n=e.noFilter,o=e.items;return!n||(void 0===o?[]:o).length>0}))}(c,v,U(b||{})),Z=function(e,n,o,i){return void 0===i&&(i=""),(0,t.jsx)(l.MenuItem,K({itemId:n,className:null==e?void 0:e.className,onClick:e.onClick&&(o||e.type)===F?function(n){e.onClick&&e.onClick(),n.preventDefault()}:void 0},{children:(o||e.type)===A?(0,t.jsx)(l.TreeView,{data:[J(e,i,C,b||{})],onCheck:function(n,o){return function(e,n,o){var t,i,r;return null===(i=(t=o[0]).onClick)||void 0===i?void 0:i.call(t,e,n,void 0,null===(r=null==e?void 0:e.target)||void 0===r?void 0:r.checked)}(n,o,[e])},hasChecks:!0}):(o||e.type)===F?(0,t.jsx)(l.Checkbox,K({},e,{label:null==e?void 0:e.label,isChecked:(null==e?void 0:e.isChecked)||L(i,(null==e?void 0:e.value)||n,null==e?void 0:e.id,null==e?void 0:e.tagValue,C,b||{})||!1,onChange:function(n,o){var t;null===(t=null==e?void 0:e.onChange)||void 0===t||t.call(e,n,o)},onClick:e.onClick?function(n){e.onClick&&e.onClick(),n.stopPropagation()}:void 0,name:(null==e?void 0:e.name)||(null==e?void 0:e.value)||"".concat(i,"-").concat(n),id:(null==e?void 0:e.id)||(null==e?void 0:e.value)||"".concat(i,"-").concat(n)})):(o||e.type)===B?(0,t.jsx)(l.Radio,K({},e,{isChecked:(null==e?void 0:e.isChecked)||L(i,(null==e?void 0:e.value)||n,null==e?void 0:e.id,null==e?void 0:e.tagValue,C,b||{})||!1,onChange:function(n,o){var t;null===(t=null==e?void 0:e.onChange)||void 0===t||t.call(e,n,o)},value:(null==e?void 0:e.value)||n,name:(null==e?void 0:e.name)||(null==e?void 0:e.value)||"".concat(i,"-").concat(n),label:(null==e?void 0:e.label)||"",id:(null==e?void 0:e.id)||(null==e?void 0:e.value)||"".concat(i,"-").concat(n)})):(o||e.type)===V?(0,t.jsx)(l.Button,K({id:e.id,className:"pf-c-select__option-button ".concat((null==e?void 0:e.className)||""),variant:null==e?void 0:e.variant,onClick:e.onClick},{children:null==e?void 0:e.label})):(null==e?void 0:e.label)||""}),"".concat(e.value,"-").concat(n,"-item"))},q=function(e,n,o){return void 0===o&&(o=""),e.map((function(e,i){return(n||e.type)===A?(0,t.jsx)("div",K({className:"ins-c-tree-view"},{children:Z(e,i,n,o)}),"".concat(e.value,"-").concat(i,"-item")):Z(e,i,n,o)}))};return(0,t.jsx)("div",K({ref:T},{children:(0,t.jsx)(l.Popper,{appendTo:T.current,trigger:(0,t.jsx)(l.MenuToggle,K({"aria-label":"Group filter",ref:N,onClick:function(e){e.stopPropagation(),e.persist(),P(!D)},isExpanded:D,className:n,isDisabled:x},{children:d||p?(0,t.jsx)(l.TextInput,{isDisabled:x,"aria-label":"input with dropdown and clear button",placeholder:g,value:w,tabIndex:0,onChange:function(e){O(e),null==p||p(e)},type:"search"}):g})),popper:(0,t.jsx)(l.Menu,K({ref:E,className:f()("ins-c-menu__scrollable",n,{"pf-m-expanded":D})},{children:(0,t.jsx)(l.MenuContent,{children:(0,t.jsxs)(l.MenuList,K({"aria-label":"Group filter"},{children:[H.length>0&&(0,t.jsx)(l.MenuGroup,{children:q(H)}),Y.map((function(e,n){return(0,t.jsx)(l.MenuGroup,K({label:e.groupSelectable||"string"!=typeof e.label?void 0:e.label},{children:q(e.items,e.type,e.value)}),"".concat(e.label,"-").concat(n,"-group"))})),h?(0,t.jsx)(l.MenuItem,K({itemId:"loader",className:"ins-c-menu__show--more"},y,{onClick:function(e){return h(e)}},{children:m})):(0,t.jsx)("span",{hidden:!0,value:""})]}))})})),isVisible:D})}))}},q=function(){return q=Object.assign||function(e){for(var n,o=1,t=arguments.length;o<t;o++)for(var i in n=arguments[o])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},q.apply(this,arguments)};const Q=function(e){var n=e.hideLabel,o=void 0!==n&&n,r=e.id,c=void 0===r?"default-input":r,s=e.isDisabled,u=void 0!==s&&s,d=e.items,p=void 0===d?[]:d,v=e.onChange,h=e.placeholder,g=e.useMobileLayout,b=void 0!==g&&g,m=e.value,y=void 0===m?"":m,x=e.innerRef,j=parseInt(C.default.value.replace("px","")),k=function(e){return e<=j},w=(0,i.useState)(!1),O=w[0],I=w[1],D=(0,i.useState)(),P=D[0],N=D[1],T=(0,i.useState)(k(window.innerWidth)),E=T[0],_=T[1],A=(0,i.useRef)((function(e){_(k((null==e?void 0:e.target).innerWidth))}));(0,i.useEffect)((function(){return b||console.warn('The prop "useMobileLayout" is set to false. You are using an outdated mobile layout of conditional filter.\n    Please switch to new layout by adding "useMobileLayout={true}" prop to the PrimaryToolbar or ConditionalFilter directly.\n    The new mobile layout will become the default in next minor release.'),window.addEventListener("resize",A.current),function(){A.current&&window.removeEventListener("resize",A.current)}}),[]);var F=v?y:P,B=p&&p.length&&(p.find((function(e,n){return e.value===F||n===Number(F)}))||p[0]),V=v||function(e,n){return N(n)},R=b&&E,M=function(e){return e[0].toUpperCase()+e.substring(1)},L=B&&(Z[B.type]||Z.text),G=b&&E?function(e){return(0,t.jsx)(l.ToolbarToggleGroup,q({},e,{breakpoint:"md",toggleIcon:(0,t.jsx)(a.FilterIcon,{})}))}:i.Fragment;return(0,t.jsxs)(G,{children:[b&&E&&(0,t.jsx)(l.ToolbarGroup,q({className:"ins-c-conditional-filter mobile"},{children:p.map((function(e,n){var o=e&&(Z[e.type]||Z.text);return(0,t.jsx)(l.ToolbarItem,{children:(0,t.jsx)(o,q({},e.type!==Y&&{placeholder:h||e.placeholder||"Filter by ".concat(e.label),id:e.filterValues?e.filterValues.id:F?String(F):void 0,innerRef:x},e.filterValues))},n)}))})),!R&&(0,t.jsx)(i.Fragment,{children:!p||p&&p.length<=0?(0,t.jsx)("div",q({className:f()("ins-c-conditional-filter",{desktop:b})},{children:(0,t.jsx)(S,{innerRef:x,id:c,isDisabled:u,onChange:function(e){return V(e,e.target.value)},placeholder:h,value:F?String(F):void 0,"widget-type":"InsightsInput"})})):(0,t.jsxs)(l.Split,q({className:f()("ins-c-conditional-filter",{desktop:b})},{children:[p.length>1&&(0,t.jsx)(l.SplitItem,{children:(0,t.jsx)(l.Dropdown,{ref:x,className:"ins-c-conditional-filter__group",onSelect:function(){return I(!1)},isOpen:O,ouiaId:"ConditionalFilter",toggle:(0,t.jsxs)(l.DropdownToggle,q({"aria-label":"Conditional filter",onToggle:I,isDisabled:u,className:o?"ins-c-conditional-filter__no-label":"",ouiaId:"ConditionalFilter"},{children:[(0,t.jsx)(a.FilterIcon,{size:"sm"}),!o&&(0,t.jsx)("span",q({className:"ins-c-conditional-filter__value-selector"},{children:B&&M(String(B.label))}))]})),dropdownItems:p.map((function(e,n){return(0,t.jsx)(l.DropdownItem,q({component:"button",ouiaId:String(e.label),onClick:function(o){return V(o,e.value||n)},isHovered:B.label===e.label},{children:M(String(e.label))}),e.id?"".concat(e.id,"-dropdown"):n)}))})}),L&&(0,t.jsx)(l.SplitItem,q({isFilled:!0},{children:(0,t.jsx)(L,q({},B.type!==Y&&{placeholder:h||B.placeholder||"Filter by ".concat(B.label),id:B.filterValues&&B.filterValues.id||F?String(F):void 0},B.filterValues))}))]}))})]})};var X=function(){return X=Object.assign||function(e){for(var n,o=1,t=arguments.length;o<t;o++)for(var i in n=arguments[o])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},X.apply(this,arguments)};function $(e){return Object.prototype.hasOwnProperty.call(e,"category")}function ee(e){return!$(e)}const ne=function(e){var n=e.className,o=e.filters,i=void 0===o?[]:o,r=e.onDelete,a=void 0===r?function(){}:r,c=e.deleteTitle,s=void 0===c?"Clear filters":c,u=e.showDeleteButton,d=e.onDeleteGroup,p=i.filter($),v=p.map((function(e,n){return(0,t.jsx)(l.ChipGroup,X({categoryName:String(e.category)||" "},d&&{isClosable:!0,onClick:function(o){o.stopPropagation(),d(o,[e],p.filter((function(e,o){return o!==n})))}},{children:e.chips.map((function(n){return(0,t.jsxs)(l.Chip,X({onClick:function(o){o.stopPropagation(),a(o,[X(X({},e),{chips:[n]})])}},{children:[n.name,n.count&&(0,t.jsx)(l.Badge,X({isRead:n.isRead},{children:n.count}),"chip_badge_".concat(n.id))]}),n.name)}))}),"group_".concat(e.category))})),h=i.filter(ee);return(0,t.jsxs)("span",X({className:f()(n,"ins-c-chip-filters")},{children:[v,h&&h.map((function(e){return(0,t.jsx)(l.ChipGroup,{children:(0,t.jsxs)(l.Chip,X({onClick:function(n){n.stopPropagation(),a(n,[e])}},{children:[e.name,e.count&&(0,t.jsx)(l.Badge,X({isRead:e.isRead},{children:e.count}),"chip_badge_".concat(e.id))]}))},"group_plain_chip_".concat(e.name))})),(!0===u||void 0===u&&i.length>0)&&(0,t.jsx)(l.Button,X({variant:"link",ouiaId:"ClearFilters",onClick:function(e){return a(e,i,!0)}},{children:s}))]}))};var oe=function(){return oe=Object.assign||function(e){for(var n,o=1,t=arguments.length;o<t;o++)for(var i in n=arguments[o])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},oe.apply(this,arguments)};const te=function(e){var n=e.direction,o=void 0===n?c.SortByDirection.asc:n,i=e.onSortChange,r=void 0===i?function(){}:i;return(0,t.jsx)(l.Button,oe({variant:"plain",onClick:function(e){return r(e,function(e){return e===c.SortByDirection.asc?c.SortByDirection.desc:c.SortByDirection.asc}(o))}},{children:o===c.SortByDirection.asc?(0,t.jsx)(a.SortAmountUpIcon,{size:"sm"}):(0,t.jsx)(a.SortAmountDownIcon,{size:"sm"})}))};var ie=function(){return ie=Object.assign||function(e){for(var n,o=1,t=arguments.length;o<t;o++)for(var i in n=arguments[o])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},ie.apply(this,arguments)};const re=function(e){var n,o=e.id,i=e.className,s=e.toggleIsExpanded,u=void 0===s?function(){}:s,d=e.bulkSelect,p=e.filterConfig,f=e.dedicatedAction,v=e.actionsConfig,h=e.sortByConfig,g=e.pagination,b=e.activeFiltersConfig,y=e.children,x=e.exportConfig,C=e.expandAll,k=e.useMobileLayout,S=function(e,n){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(o[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(t=Object.getOwnPropertySymbols(e);i<t.length;i++)n.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(o[t[i]]=e[t[i]])}return o}(e,["id","className","toggleIsExpanded","bulkSelect","filterConfig","dedicatedAction","actionsConfig","sortByConfig","pagination","activeFiltersConfig","children","exportConfig","expandAll","useMobileLayout"]),w=function(e,n,o){if(o||2===arguments.length)for(var t,i=0,r=n.length;i<r;i++)!t&&i in n||(t||(t=Array.prototype.slice.call(n,0,i)),t[i]=n[i]);return e.concat(t||Array.prototype.slice.call(n))}([],h?[{label:"Sort order ASC",props:{isDisabled:h.direction===c.SortByDirection.asc},onClick:function(e){return h.onSortChange&&h.onSortChange(e,c.SortByDirection.asc)}},{label:"Sort order DESC",props:{isDisabled:h.direction===c.SortByDirection.desc},onClick:function(e){return h.onSortChange&&h.onSortChange(e,c.SortByDirection.desc)}}]:[],!0);return(0,t.jsxs)(l.Toolbar,ie({},S,{className:"".concat(i||""," ins-c-primary-toolbar"),toggleIsExpanded:u,id:o?"".concat(o):"ins-primary-data-toolbar",ouiaId:"PrimaryToolbar"},{children:[(0,t.jsxs)(l.ToolbarContent,{children:[(C||d||p||f)&&(0,t.jsxs)(l.ToolbarGroup,ie({className:"ins-c-primary-toolbar__group-filter pf-m-spacer-md pf-m-space-items-lg",variant:"filter-group"},{children:[C&&(0,t.jsx)(l.ToolbarItem,{children:(n=C,r().isValidElement(n)?C:(0,t.jsx)(l.Button,ie({},C.buttonProps,{variant:"plain","aria-label":"".concat(C.isAllExpanded?"Collapse":"Expand"," all"),onClick:function(e){return C.onClick(e,!C.isAllExpanded)},ouiaId:"ExpandCollapseAll",isDisabled:C.isDisabled},{children:(0,t.jsx)(l.ToolbarExpandIconWrapper,{children:C.isAllExpanded?(0,t.jsx)(a.AngleDownIcon,{}):(0,t.jsx)(a.AngleRightIcon,{})})})))}),d&&(0,t.jsx)(l.ToolbarItem,{children:r().isValidElement(d)?d:(0,t.jsx)(j,ie({ouiaId:"BulkSelect"},d))}),p&&(0,t.jsx)(l.ToolbarItem,ie({className:"ins-c-primary-toolbar__filter"},{children:r().isValidElement(p)?p:(0,t.jsx)(Q,ie({useMobileLayout:k},p))})),f&&(0,t.jsx)(l.ToolbarItem,{children:f})]})),r().isValidElement(v)?v:(v&&v.actions&&v.actions.length>0||h||x)&&(0,t.jsx)(m,ie({},v||{},{exportConfig:x,overflowActions:w})),h&&(0,t.jsx)(l.ToolbarItem,ie({className:"ins-c-primary-toolbar__sort-by"},{children:r().isValidElement(h)?h:(0,t.jsx)(te,ie({},h))})),y,g&&(0,t.jsx)(l.ToolbarItem,ie({className:"ins-c-primary-toolbar__pagination"},{children:r().isValidElement(g)?g:(0,t.jsx)(l.Pagination,ie({isCompact:!0,ouiaId:"CompactPagination"},g))}))]}),b&&r().isValidElement(b)?(0,t.jsx)(l.ToolbarContent,{children:(0,t.jsx)(l.ToolbarItem,{children:b})}):void 0!==(null==b?void 0:b.filters)&&(b.filters.length>0||!0===b.showDeleteButton)&&(0,t.jsx)(l.ToolbarContent,{children:(0,t.jsx)(l.ToolbarItem,{children:(0,t.jsx)(ne,ie({},b))})})]}))}},14259:e=>{e.exports=function(e,n,o){var t=-1,i=e.length;n<0&&(n=-n>i?0:i+n),(o=o>i?i:o)<0&&(o+=i),i=n>o?0:o-n>>>0,n>>>=0;for(var r=Array(i);++t<i;)r[t]=e[t+n];return r}},57406:(e,n,o)=>{var t=o(71811),i=o(10928),r=o(40292),l=o(40327);e.exports=function(e,n){return n=t(n,e),null==(e=r(e,n))||delete e[l(i(n))]}},60696:(e,n,o)=>{var t=o(68630);e.exports=function(e){return t(e)?void 0:e}},40292:(e,n,o)=>{var t=o(97786),i=o(14259);e.exports=function(e,n){return n.length<2?e:t(e,i(n,0,-1))}},57557:(e,n,o)=>{var t=o(29932),i=o(85990),r=o(57406),l=o(71811),a=o(98363),c=o(60696),s=o(99021),u=o(46904),d=s((function(e,n){var o={};if(null==e)return o;var s=!1;n=t(n,(function(n){return n=l(n,e),s||(s=n.length>1),n})),a(e,u(e),o),s&&(o=i(o,7,c));for(var d=n.length;d--;)r(o,n[d]);return o}));e.exports=d}}]);