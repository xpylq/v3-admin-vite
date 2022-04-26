var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,o=(a,t,l)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[t]=l,r=(e,a)=>{for(var t in a||(a={}))s.call(a,t)&&o(e,t,a[t]);if(l)for(var t of l(a))n.call(a,t)&&o(e,t,a[t]);return e},i=(e,l)=>a(e,t(l));import{t as u,U as d,I as c}from"./base-b43dcd71.js";import{E as p,_ as v}from"./SwitchRoles-1ca00993.js";import{d as b,_ as m,o as f,c as y,a as h,w as g,y as w,k,m as x,K as P,n as C,p as T,P as _,ba as $,ay as N,F as B,x as S,G as E,M as R,N as A,bb as j,bc as O,q as z,J as F,az as L,S as I,C as K,Y as M,E as V,aw as H,I as q,D,s as U,t as Y,ac as G,a7 as J,bd as W,a5 as X,be as Q,a0 as Z,a1 as ee,a2 as ae,H as te,O as le,bf as se,af as ne,$ as oe,A as re,z as ie,aa as ue}from"./index-40ce9d4d.js";import{m as de}from"./typescript-7283c357.js";import{a as ce}from"./arrow-right-7428197e.js";const pe=b({name:"ArrowLeft"}),ve={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},be=[h("path",{fill:"currentColor",d:"M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"},null,-1)];var me=m(pe,[["render",function(e,a,t,l,s,n){return f(),y("svg",ve,be)}]]);const fe=b({name:"Plus"}),ye={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},he=[h("path",{fill:"currentColor",d:"M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64h352z"},null,-1)];var ge=m(fe,[["render",function(e,a,t,l,s,n){return f(),y("svg",ye,he)}]]);const we=Symbol("tabsRootContextKey"),ke=k({tabs:{type:x(Array),default:()=>de([])}});var xe=E(b(i(r({},{name:"ElTabBar"}),{props:ke,setup(e,{expose:a}){const t=e,l=R(),s=P(we);s||u("ElTabBar","<el-tabs><el-tab-bar /></el-tabs>");const n=C("tabs"),o=T(),r=T(),i=()=>r.value=(()=>{let e=0,a=0;const n=["top","bottom"].includes(s.props.tabPosition)?"width":"height",o="width"===n?"x":"y";return t.tabs.every((s=>{var r,i,u,d;const c=null==(i=null==(r=l.parent)?void 0:r.refs)?void 0:i[`tab-${s.paneName}`];if(!c)return!1;if(!s.active)return!0;a=c[`client${$(n)}`];const p="x"===o?"left":"top";e=c.getBoundingClientRect()[p]-(null!=(d=null==(u=c.parentElement)?void 0:u.getBoundingClientRect()[p])?d:0);const v=window.getComputedStyle(c);return"width"===n&&(t.tabs.length>1&&(a-=Number.parseFloat(v.paddingLeft)+Number.parseFloat(v.paddingRight)),e+=Number.parseFloat(v.paddingLeft)),!1})),{[n]:`${a}px`,transform:`translate${$(o)}(${e}px)`}})();return g((()=>t.tabs),(async()=>{await _(),i()}),{immediate:!0}),N(o,(()=>i())),a({ref:o,update:i}),(e,a)=>(f(),y("div",{ref_key:"barRef",ref:o,class:B([w(n).e("active-bar"),w(n).is(w(s).props.tabPosition)]),style:S(r.value)},null,6))}})),[["__file","/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-bar.vue"]]);const Pe=k({panes:{type:x(Array),default:()=>de([])},currentName:{type:[String,Number],default:""},editable:Boolean,onTabClick:{type:x(Function),default:A},onTabRemove:{type:x(Function),default:A},type:{type:String,values:["card","border-card",""],default:""},stretch:Boolean}),Ce=b({name:"ElTabNav",props:Pe,setup(e,{expose:a}){const t=P(we);t||u("ElTabNav","<el-tabs><tab-nav /></el-tabs>");const l=C("tabs"),s=j(),n=O(),o=T(),r=T(),i=T(),d=T(!1),c=T(0),p=T(!1),v=T(!0),b=z((()=>["top","bottom"].includes(t.props.tabPosition)?"width":"height")),m=z((()=>({transform:`translate${"width"===b.value?"X":"Y"}(-${c.value}px)`}))),f=()=>{if(!o.value)return;const e=o.value[`offset${$(b.value)}`],a=c.value;if(!a)return;const t=a>e?a-e:0;c.value=t},y=()=>{if(!o.value||!r.value)return;const e=r.value[`offset${$(b.value)}`],a=o.value[`offset${$(b.value)}`],t=c.value;if(e-t<=a)return;const l=e-t>2*a?t+a:e-a;c.value=l},h=()=>{const e=r.value;if(!(d.value&&i.value&&o.value&&e))return;const a=i.value.querySelector(".is-active");if(!a)return;const l=o.value,s=["top","bottom"].includes(t.props.tabPosition),n=a.getBoundingClientRect(),u=l.getBoundingClientRect(),p=s?e.offsetWidth-u.width:e.offsetHeight-u.height,v=c.value;let b=v;s?(n.left<u.left&&(b=v-(u.left-n.left)),n.right>u.right&&(b=v+n.right-u.right)):(n.top<u.top&&(b=v-(u.top-n.top)),n.bottom>u.bottom&&(b=v+(n.bottom-u.bottom))),b=Math.max(b,0),c.value=Math.min(b,p)},w=()=>{if(!r.value||!o.value)return;const e=r.value[`offset${$(b.value)}`],a=o.value[`offset${$(b.value)}`],t=c.value;if(a<e){const t=c.value;d.value=d.value||{},d.value.prev=t,d.value.next=t+a<e,e-t<a&&(c.value=e-a)}else d.value=!1,t>0&&(c.value=0)},k=e=>{const a=e.code,{up:t,down:l,left:s,right:n}=V;if(![t,l,s,n].includes(a))return;const o=Array.from(e.currentTarget.querySelectorAll("[role=tab]")),r=o.indexOf(e.target);let i;i=a===s||a===t?0===r?o.length-1:r-1:r<o.length-1?r+1:0,o[i].focus(),o[i].click(),x()},x=()=>{v.value&&(p.value=!0)},_=()=>p.value=!1;return g(s,(e=>{"hidden"===e?v.value=!1:"visible"===e&&setTimeout((()=>v.value=!0),50)})),g(n,(e=>{e?setTimeout((()=>v.value=!0),50):v.value=!1})),N(i,w),F((()=>setTimeout((()=>h()),0))),L((()=>w())),a({scrollToActiveTab:h,removeFocus:_}),()=>{const a=d.value?[I("span",{class:[l.e("nav-prev"),l.is("disabled",!d.value.prev)],onClick:f},[I(K,null,{default:()=>[I(me,null,null)]})]),I("span",{class:[l.e("nav-next"),l.is("disabled",!d.value.next)],onClick:y},[I(K,null,{default:()=>[I(ce,null,null)]})])]:null,s=e.panes.map(((a,s)=>{var n,o;const r=a.props.name||a.index||`${s}`,i=a.isClosable||e.editable;a.index=`${s}`;const u=i?I(K,{class:"is-icon-close",onClick:t=>e.onTabRemove(a,t)},{default:()=>[I(M,null,null)]}):null,d=(null==(o=(n=a.instance.slots).label)?void 0:o.call(n))||a.props.label,c=a.active?0:-1;return I("div",{ref:`tab-${r}`,class:[l.e("item"),l.is(t.props.tabPosition),l.is("active",a.active),l.is("disabled",a.props.disabled),l.is("closable",i),l.is("focus",p.value)],id:`tab-${r}`,key:`tab-${r}`,"aria-controls":`pane-${r}`,role:"tab","aria-selected":a.active,tabindex:c,onFocus:()=>x(),onBlur:()=>_(),onClick:t=>{_(),e.onTabClick(a,r,t)},onKeydown:t=>{!i||t.code!==V.delete&&t.code!==V.backspace||e.onTabRemove(a,t)}},[d,u])}));return I("div",{ref:i,class:[l.e("nav-wrap"),l.is("scrollable",!!d.value),l.is(t.props.tabPosition)]},[a,I("div",{class:l.e("nav-scroll"),ref:o},[I("div",{class:[l.e("nav"),l.is(t.props.tabPosition),l.is("stretch",e.stretch&&["top","bottom"].includes(t.props.tabPosition))],ref:r,style:m.value,role:"tablist",onKeydown:k},[e.type?null:I(xe,{tabs:[...e.panes]},null),s])])])}}}),Te=k({type:{type:String,values:["card","border-card",""],default:""},activeName:{type:[String,Number],default:""},closable:Boolean,addable:Boolean,modelValue:{type:[String,Number],default:""},editable:Boolean,tabPosition:{type:String,values:["top","right","bottom","left"],default:"top"},beforeLeave:{type:x(Function),default:()=>!0},stretch:Boolean}),_e=e=>U(e)||Y(e),$e=(e,a=[])=>{const t=e.children||[];return Array.from(t).forEach((e=>{let t=e.type;t=t.name||t,"ElTabPane"===t&&e.component?a.push(e.component):t!==J&&"template"!==t||$e(e,a)})),a};var Ne=b({name:"ElTabs",props:Te,emits:{[d]:e=>_e(e),[c]:e=>_e(e),"tab-click":(e,a)=>a instanceof Event,"tab-change":e=>_e(e),edit:(e,a)=>["remove","add"].includes(a),"tab-remove":e=>_e(e),"tab-add":()=>!0},setup(e,{emit:a,slots:t,expose:l}){const s=R();(({from:e,replacement:a,scope:t,version:l,ref:s,type:n="API"},o)=>{g((()=>w(o)),(e=>{}),{immediate:!0})})({scope:"el-tabs",type:"Event",from:"input",replacement:"tab-change",version:"2.5.0",ref:"https://element-plus.org/en-US/component/tabs.html#tabs-events"},z((()=>{var e;return H(null==(e=s.vnode.props)?void 0:e.onInput)})));const n=C("tabs"),o=T(),r=T([]),i=T(e.modelValue||e.activeName||"0"),u={},p=(e=!1)=>{if(t.default){const a=s.subTree.children,t=Array.from(a).find((({props:e})=>(null==e?void 0:e.class)===n.e("content")));if(!t)return;const l=$e(t).map((e=>u[e.uid])),o=!(l.length===r.value.length&&l.every(((e,a)=>e.uid===r.value[a].uid)));(e||o)&&(r.value=l)}else 0!==r.value.length&&(r.value=[])},v=e=>{i.value=e,a(c,e),a(d,e),a("tab-change",e)},b=a=>{var t;if(i.value===a)return;const l=null==(t=e.beforeLeave)?void 0:t.call(e,a,i.value);G(l)?l.then((()=>{var e,t;v(a),null==(t=null==(e=o.value)?void 0:e.removeFocus)||t.call(e)}),A):!1!==l&&v(a)},m=(e,t,l)=>{e.props.disabled||(b(t),a("tab-click",e,l))},f=(e,t)=>{e.props.disabled||(t.stopPropagation(),a("edit",e.props.name,"remove"),a("tab-remove",e.props.name))},y=()=>{a("edit",void 0,"add"),a("tab-add")};return L((()=>p())),F((()=>p())),g((()=>e.activeName),(e=>b(e))),g((()=>e.modelValue),(e=>b(e))),g(i,(async()=>{var e,a;p(!0),await _(),await(null==(e=o.value)?void 0:e.$nextTick()),null==(a=o.value)||a.scrollToActiveTab()})),q(we,{props:e,currentName:i,updatePaneState:e=>u[e.uid]=e}),l({currentName:i}),()=>{const a=e.editable||e.addable?I("span",{class:n.e("new-tab"),tabindex:"0",onClick:y,onKeydown:e=>{e.code===V.enter&&y()}},[I(K,{class:n.is("icon-plus")},{default:()=>[I(ge,null,null)]})]):null,l=I("div",{class:[n.e("header"),n.is(e.tabPosition)]},[a,I(Ce,{ref:o,currentName:i.value,editable:e.editable,type:e.type,panes:r.value,stretch:e.stretch,onTabClick:m,onTabRemove:f},null)]),s=I("div",{class:n.e("content")},[D(t,"default")]);return I("div",{class:[n.b(),n.m(e.tabPosition),{[n.m("card")]:"card"===e.type,[n.m("border-card")]:"border-card"===e.type}]},[..."bottom"!==e.tabPosition?[l,s]:[s,l]])}}});const Be=k({label:{type:String,default:""},name:{type:[String,Number],default:""},closable:Boolean,disabled:Boolean,lazy:Boolean}),Se=["id","aria-hidden","aria-labelledby"];var Ee=E(b(i(r({},{name:"ElTabPane"}),{props:Be,setup(e){const a=e,t=R(),l=P(we);l||u("ElTabPane","usage: <el-tabs><el-tab-pane /></el-tabs/>");const s=C("tab-pane"),n=T(),o=z((()=>a.closable||l.props.closable)),r=W((()=>l.currentName.value===(a.name||n.value))),i=T(r.value),d=z((()=>a.name||n.value)),c=W((()=>!a.lazy||i.value||r.value));return g(r,(e=>{e&&(i.value=!0)})),l.updatePaneState(X({uid:t.uid,instance:Q(t),props:a,paneName:d,active:r,index:n,isClosable:o})),(e,a)=>w(c)?Z((f(),y("div",{key:0,id:`pane-${w(d)}`,class:B(w(s).b()),role:"tabpanel","aria-hidden":!w(r),"aria-labelledby":`tab-${w(d)}`},[D(e.$slots,"default")],10,Se)),[[ee,w(r)]]):ae("v-if",!0)}})),[["__file","/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-pane.vue"]]);const Re=te(Ne,{TabPane:Ee}),Ae=le(Ee);const je=e=>{if(e&&e instanceof Array&&e.length>0){const a=se().roles,t=e;return a.some((e=>t.includes(e)))}return console.error("need roles! Like v-permission=\"['admin','editor']\""),!1};const Oe={class:"app-container"},ze={class:"permission-alert"},Fe=ue(" 只有 "),Le=ue("admin"),Ie=ue("可以看见这个 "),Ke=ue(" v-permission=\"['admin']\" "),Me={class:"permission-alert"},Ve=ue(" 只有 "),He=ue("editor"),qe=ue("可以看见这个 "),De=ue(" v-permission=\"['editor']\" "),Ue={class:"permission-alert"},Ye=ue(" 两者 "),Ge=ue("admin"),Je=ue("和 "),We=ue("editor"),Xe=ue("都可以看见这个 "),Qe=ue(" v-permission=\"['admin', 'editor']\" "),Ze=ue(" 在某些情况下，不适合使用 v-permission。例如：element-plus 的 el-tab 或 el-table-column 以及其它动态渲染 dom 的场景。你只能通过手动设置 v-if 来实现。 "),ea=ue(" admin 可以看见这个 "),aa=ue(" v-if=\"checkPermission(['admin'])\" "),ta=ue(" editor 可以看见这个 "),la=ue(" v-if=\"checkPermission(['editor'])\" "),sa=ue(" 两者 admin 和 editor 都可以看见这个 "),na=ue(" v-if=\"checkPermission(['admin', 'editor'])\" ");var oa=ne(b({setup(e){const a=X({key:1,handleRolesChange:()=>{a.key++}});return(e,t)=>{const l=p,s=Ae,n=Re,o=oe("permission");return f(),y("div",Oe,[I(v,{onChange:w(a).handleRolesChange},null,8,["onChange"]),(f(),y("div",{key:w(a).key,style:{"margin-top":"30px"}},[h("div",null,[Z((f(),y("span",ze,[Fe,I(l,null,{default:re((()=>[Le])),_:1}),Ie])),[[o,["admin"]]]),Z((f(),ie(l,{class:"permission-sourceCode",type:"info",size:"large"},{default:re((()=>[Ke])),_:1})),[[o,["admin"]]])]),h("div",null,[Z((f(),y("span",Me,[Ve,I(l,null,{default:re((()=>[He])),_:1}),qe])),[[o,["editor"]]]),Z((f(),ie(l,{class:"permission-sourceCode",type:"info",size:"large"},{default:re((()=>[De])),_:1})),[[o,["editor"]]])]),h("div",null,[Z((f(),y("span",Ue,[Ye,I(l,null,{default:re((()=>[Ge])),_:1}),Je,I(l,null,{default:re((()=>[We])),_:1}),Xe])),[[o,["admin","editor"]]]),Z((f(),ie(l,{class:"permission-sourceCode",type:"info",size:"large"},{default:re((()=>[Qe])),_:1})),[[o,["admin","editor"]]])])])),(f(),y("div",{key:"checkPermission"+w(a).key,style:{"margin-top":"60px"}},[I(l,{type:"info",size:"large"},{default:re((()=>[Ze])),_:1}),I(n,{type:"border-card",style:{width:"550px","margin-top":"60px"}},{default:re((()=>[w(je)(["admin"])?(f(),ie(s,{key:0,label:"admin"},{default:re((()=>[ea,I(l,{class:"permission-sourceCode",type:"info"},{default:re((()=>[aa])),_:1})])),_:1})):ae("",!0),w(je)(["editor"])?(f(),ie(s,{key:1,label:"editor"},{default:re((()=>[ta,I(l,{class:"permission-sourceCode",type:"info"},{default:re((()=>[la])),_:1})])),_:1})):ae("",!0),w(je)(["admin","editor"])?(f(),ie(s,{key:2,label:"admin 和 editor"},{default:re((()=>[sa,I(l,{class:"permission-sourceCode",type:"info"},{default:re((()=>[na])),_:1})])),_:1})):ae("",!0)])),_:1})]))])}}}),[["__scopeId","data-v-6aac19ea"]]);export{oa as default};
