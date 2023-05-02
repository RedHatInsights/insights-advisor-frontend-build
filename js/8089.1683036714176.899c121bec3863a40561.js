(self.webpackChunkadvisor_frontend=self.webpackChunkadvisor_frontend||[]).push([[8089],{92607:(e,r,i)=>{"use strict";i.d(r,{BJ:()=>t,oi:()=>u,x:()=>a,y5:()=>f});var a,t,o=i(70655),n=i(93264),l=i(12455),s=i(38296),p=i(1774),c=i(80164),d=i(62472),m=i(84709);!function(e){e.text="text",e.date="date",e.datetimeLocal="datetime-local",e.email="email",e.month="month",e.number="number",e.password="password",e.search="search",e.tel="tel",e.time="time",e.url="url"}(a||(a={})),function(e){e.default="default",e.plain="plain"}(t||(t={}));class f extends n.Component{constructor(e){super(e),this.inputRef=n.createRef(),this.observer=()=>{},this.handleChange=e=>{this.props.onChange&&this.props.onChange(e.currentTarget.value,e)},this.handleResize=()=>{const e=this.props.innerRef||this.inputRef;e&&e.current&&(0,c.fi)(e.current,String(this.props.value))},this.restoreText=()=>{const e=this.props.innerRef||this.inputRef;e.current.value=String(this.props.value),e.current.scrollLeft=e.current.scrollWidth},this.onFocus=e=>{const{isLeftTruncated:r,onFocus:i}=this.props;r&&this.restoreText(),i&&i(e)},this.onBlur=e=>{const{isLeftTruncated:r,onBlur:i}=this.props;r&&this.handleResize(),i&&i(e)},this.sanitizeInputValue=e=>"string"==typeof e?e.replace(/\n/g," "):e,e.id||e["aria-label"]||e["aria-labelledby"]||console.error("Text input:","Text input requires either an id or aria-label to be specified"),this.state={ouiaStateId:(0,d.ql)(f.displayName)}}componentDidMount(){if(this.props.isLeftTruncated){const e=this.props.innerRef||this.inputRef;this.observer=(0,m.p)(e.current,this.handleResize),this.handleResize()}}componentWillUnmount(){this.props.isLeftTruncated&&this.observer()}render(){const e=this.props,{innerRef:r,className:i,type:a,value:t,validated:c,onChange:m,onFocus:f,onBlur:h,isLeftTruncated:b,isReadOnly:g,readOnly:T,readOnlyVariant:v,isRequired:_,isDisabled:C,isIconSprite:x,iconVariant:y,customIconUrl:E,customIconDimensions:R,ouiaId:w,ouiaSafe:N}=e,I=(0,o._T)(e,["innerRef","className","type","value","validated","onChange","onFocus","onBlur","isLeftTruncated","isReadOnly","readOnly","readOnlyVariant","isRequired","isDisabled","isIconSprite","iconVariant","customIconUrl","customIconDimensions","ouiaId","ouiaSafe"]),z={};return E&&(z.backgroundImage=`url('${E}')`),R&&(z.backgroundSize=R),n.createElement("input",Object.assign({},I,{onFocus:this.onFocus,onBlur:this.onBlur,className:(0,s.i)(l.Z.formControl,x&&l.Z.modifiers.iconSprite,"plain"===v&&l.Z.modifiers.plain,c===p.LD.success&&l.Z.modifiers.success,c===p.LD.warning&&l.Z.modifiers.warning,(y&&"search"!==y||E)&&l.Z.modifiers.icon,y&&l.Z.modifiers[y],i),onChange:this.handleChange,type:a,value:this.sanitizeInputValue(t),"aria-invalid":I["aria-invalid"]?I["aria-invalid"]:c===p.LD.error,required:_,disabled:C,readOnly:!!v||g||T,ref:r||this.inputRef},(E||R)&&{style:z},(0,d.dp)(u.displayName,void 0!==w?w:this.state.ouiaStateId,N)))}}f.displayName="TextInputBase",f.defaultProps={"aria-label":null,className:"",isRequired:!1,validated:"default",isDisabled:!1,isReadOnly:!1,isIconSprite:!1,type:a.text,isLeftTruncated:!1,onChange:()=>{},ouiaSafe:!0};const u=n.forwardRef(((e,r)=>n.createElement(f,Object.assign({},e,{innerRef:r}))));u.displayName="TextInput"},84709:(e,r,i)=>{"use strict";i.d(r,{p:()=>t});var a=i(80164);const t=(e,r,i=!0)=>{let t;if(a.Nq){const{ResizeObserver:a}=window;if(e&&a){const o=new a((e=>{i?window.requestAnimationFrame((()=>{Array.isArray(e)&&e.length>0&&r()})):Array.isArray(e)&&e.length>0&&r()}));o.observe(e),t=()=>o.unobserve(e)}else window.addEventListener("resize",r),t=()=>window.removeEventListener("resize",r)}return()=>{t&&t()}}},11924:(e,r,i)=>{"use strict";i.d(r,{Z:()=>a}),i(78752);const a={form:"pf-c-form",formActions:"pf-c-form__actions",formFieldGroup:"pf-c-form__field-group",formFieldGroupBody:"pf-c-form__field-group-body",formFieldGroupHeader:"pf-c-form__field-group-header",formFieldGroupHeaderActions:"pf-c-form__field-group-header-actions",formFieldGroupHeaderDescription:"pf-c-form__field-group-header-description",formFieldGroupHeaderMain:"pf-c-form__field-group-header-main",formFieldGroupHeaderTitle:"pf-c-form__field-group-header-title",formFieldGroupHeaderTitleText:"pf-c-form__field-group-header-title-text",formFieldGroupToggle:"pf-c-form__field-group-toggle",formFieldGroupToggleButton:"pf-c-form__field-group-toggle-button",formFieldGroupToggleIcon:"pf-c-form__field-group-toggle-icon",formFieldset:"pf-c-form__fieldset",formGroup:"pf-c-form__group",formGroupControl:"pf-c-form__group-control",formGroupLabel:"pf-c-form__group-label",formGroupLabelHelp:"pf-c-form__group-label-help",formGroupLabelInfo:"pf-c-form__group-label-info",formGroupLabelMain:"pf-c-form__group-label-main",formHelperText:"pf-c-form__helper-text",formHelperTextIcon:"pf-c-form__helper-text-icon",formLabel:"pf-c-form__label",formLabelRequired:"pf-c-form__label-required",formLabelText:"pf-c-form__label-text",formSection:"pf-c-form__section",formSectionTitle:"pf-c-form__section-title",modifiers:{horizontal:"pf-m-horizontal",alignRight:"pf-m-align-right",noPaddingTop:"pf-m-no-padding-top",horizontalOnXs:"pf-m-horizontal-on-xs",horizontalOnSm:"pf-m-horizontal-on-sm",horizontalOnMd:"pf-m-horizontal-on-md",horizontalOnLg:"pf-m-horizontal-on-lg",horizontalOnXl:"pf-m-horizontal-on-xl",horizontalOn_2xl:"pf-m-horizontal-on-2xl",limitWidth:"pf-m-limit-width",action:"pf-m-action",info:"pf-m-info",disabled:"pf-m-disabled",inline:"pf-m-inline",stack:"pf-m-stack",error:"pf-m-error",success:"pf-m-success",warning:"pf-m-warning",inactive:"pf-m-inactive",hidden:"pf-m-hidden",expanded:"pf-m-expanded"},themeDark:"pf-theme-dark"}},12455:(e,r,i)=>{"use strict";i.d(r,{Z:()=>a}),i(90479);const a={formControl:"pf-c-form-control",modifiers:{success:"pf-m-success",plain:"pf-m-plain",expanded:"pf-m-expanded",icon:"pf-m-icon",warning:"pf-m-warning",search:"pf-m-search",calendar:"pf-m-calendar",clock:"pf-m-clock",iconSprite:"pf-m-icon-sprite",placeholder:"pf-m-placeholder",resizeVertical:"pf-m-resize-vertical",resizeHorizontal:"pf-m-resize-horizontal"},themeDark:"pf-theme-dark"}},46818:(e,r,i)=>{"use strict";i.d(r,{$G:()=>l,E0:()=>o,P8:()=>n,WT:()=>s,kZ:()=>t});var a=i(78632);const t=()=>({className:a.Z.modifiers.breakWord}),o=()=>({className:a.Z.modifiers.fitContent}),n=()=>({className:a.Z.modifiers.nowrap}),l=()=>({className:a.Z.modifiers.truncate}),s=()=>({className:a.Z.modifiers.wrap})},78089:(e,r,i)=>{"use strict";i.r(r),i.d(r,{ActionsColumn:()=>t.k,BodyCell:()=>n.W,BodyWrapper:()=>l.e,Caption:()=>re,CollapseColumn:()=>s.E,DraggableCell:()=>p.D,EditableSelectInputCell:()=>h,EditableTextCell:()=>g,ExpandableRowContent:()=>T.G,FavoritesCell:()=>$.n,HeaderCell:()=>_.q,HeaderCellInfoWrapper:()=>C.$,InnerScrollContainer:()=>te,OuterScrollContainer:()=>ae,RowSelectVariant:()=>y.$,RowWrapper:()=>x.e,SelectColumn:()=>y.F,SortByDirection:()=>E.B,SortColumn:()=>E.H,Table:()=>a.i,TableBody:()=>o.R,TableComposable:()=>U.X,TableComposableContext:()=>U.d,TableContext:()=>P.X,TableGridBreakpoint:()=>q.L,TableHeader:()=>v.x,TableText:()=>R.cE,TableTextVariant:()=>R.Dk,TableVariant:()=>q.B,Tbody:()=>J.p,Td:()=>Y.Td,Th:()=>Q.Th,Thead:()=>X.h,Tr:()=>K.Tr,TreeRowWrapper:()=>M.k,Visibility:()=>G.E,WrapModifier:()=>R.Rl,applyCellEdits:()=>j.V6,breakWord:()=>O.kZ,calculateColumns:()=>H.R,cancelCellEdits:()=>j.Pj,capitalize:()=>j.kC,cellActions:()=>I.j,cellWidth:()=>z.d,classNames:()=>G.A,collapsible:()=>L.m5,compoundExpand:()=>F.z,defaultTitle:()=>A.o,editable:()=>S.A,emptyCol:()=>W.tL,emptyTD:()=>W.m6,expandable:()=>L.zW,expandedRow:()=>L.L1,favoritable:()=>B.n,fitContent:()=>O.E0,getErrorTextByValidator:()=>j.GD,headerCol:()=>k,info:()=>D.u,isRowExpanded:()=>j.P6,mapOpenedRows:()=>H.A,mapProps:()=>W.jM,nowrap:()=>O.P8,parentId:()=>W.M3,scopeColTransformer:()=>W.UD,selectable:()=>w.e,sortable:()=>N.p,sortableFavorites:()=>N.$,textCenter:()=>Z,toCamel:()=>j.fZ,treeRow:()=>V.G,truncate:()=>O.$G,validateCellEdits:()=>j.Ni,wrappable:()=>O.WT});var a=i(3351),t=i(55656),o=i(22860),n=i(59197),l=i(89783),s=i(99975),p=i(25691),c=i(93264),d=i(38296),m=i(35356),f=i(84115),u=i(11924);const h=({value:e,rowIndex:r,cellIndex:i,onSelect:a=(()=>{}),clearSelection:t,isOpen:o=!1,onToggle:n=(()=>{}),selections:l=[""],options:s=[],props:p})=>{const h=c.createElement(m.Select,Object.assign({},p.editableSelectProps,{onSelect:(e,t,o)=>{a(t,e,r,i,o)}},t&&{onClear:e=>{t(r,i,e)}},{isOpen:o,onToggle:n,selections:l}),s);return c.createElement(c.Fragment,null,c.createElement("div",{className:f.Z.inlineEditValue},Array.isArray(e)?e.join(", "):e),c.createElement("div",{className:f.Z.inlineEditInput},h,c.createElement("div",{className:(0,d.i)(u.Z.formHelperText,u.Z.modifiers.error),"aria-live":"polite"},p.errorText)))};h.displayName="EditableSelectInputCell";var b=i(92607);const g=({value:e,rowIndex:r,cellIndex:i,props:a,handleTextInputChange:t,inputAriaLabel:o,isDisabled:n=!1})=>c.createElement(c.Fragment,null,c.createElement("div",{className:f.Z.inlineEditValue},e),c.createElement("div",{className:f.Z.inlineEditInput},c.createElement(b.oi,{isDisabled:n,value:void 0!==a.editableValue?a.editableValue:e,validated:!1!==a.isValid?"default":"error",type:"text",onChange:(e,a)=>{t(e,a,r,i)},"aria-label":o}),c.createElement("div",{className:(0,d.i)(u.Z.formHelperText,u.Z.modifiers.error),"aria-live":"polite"},a.errorText)));g.displayName="EditableTextCell";var T=i(2613),v=i(6934),_=i(90572),C=i(93968),x=i(55573),y=i(78466),E=i(48585),R=i(68065),w=i(9268),N=i(7732),I=i(24562),z=i(1082),S=i(90294),O=i(46818);const Z=()=>({textCenter:!0});var L=i(62480),F=i(56869);const k=(e="simple-node")=>(r,{rowIndex:i}={})=>{const a="object"==typeof r?r.title:r;return{component:"th",children:c.createElement("div",{id:`${e}${i}`},a)}};var G=i(22546),D=i(86379),B=i(14404),V=i(1522),W=i(95352),H=i(53747),A=i(27923),j=i(8792),q=i(75863),P=i(62990),$=i(77823),M=i(71305),U=i(47906),X=i(58240),J=i(3134),K=i(86151),Q=i(10951),Y=i(31476),ee=i(70655);const re=e=>{var{children:r,className:i}=e,a=(0,ee._T)(e,["children","className"]);return c.createElement("caption",Object.assign({className:i},a),r)};re.displayName="Caption";var ie=i(25624);const ae=e=>{var{children:r,className:i}=e,a=(0,ee._T)(e,["children","className"]);return c.createElement("div",Object.assign({className:(0,d.i)(i,ie.Z.scrollOuterWrapper)},a),r)};ae.displayName="OuterScrollContainer";const te=e=>{var{children:r,className:i}=e,a=(0,ee._T)(e,["children","className"]);return c.createElement("div",Object.assign({className:(0,d.i)(i,ie.Z.scrollInnerWrapper)},a),r)};te.displayName="InnerScrollContainer"},90479:()=>{},78752:()=>{}}]);