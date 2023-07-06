import{d as e,r as t,g as a,a as l,w as n,s as r,u as o,o as s,b as i,c,e as u,f as d,h as p,i as f,j as v,k as h,l as m,m as g,n as b,T as y,p as w,K as _,q as k,t as x,_ as C,v as E,x as A,y as S,F as V,z as T,A as I,B as M,C as R,D as F,E as P,G as D,H as z,I as L,J as N,L as O,M as q,N as j,O as W,P as B,Q as $,R as H,S as X,U,V as G,W as Y,X as J,Y as Z,Z as K,$ as Q,a0 as ee,a1 as te,a2 as ae,a3 as le,a4 as ne,a5 as re,a6 as oe,a7 as se,a8 as ie,a9 as ce,aa as ue}from"./index-81752a4e.js";import{_ as de}from"./index.vue_vue_type_script_setup_true_lang-674ccebd.js";var pe=(e=>(e[e.Mobile=0]="Mobile",e[e.Desktop=1]="Desktop",e))(pe||{});const fe="closed";const ve=e("app",(()=>{const e=t({opened:a()!==fe,withoutAnimation:!1}),o=l(pe.Desktop);n((()=>e.opened),(e=>function(e){r(e?"opened":fe)}(e)));return{device:o,sidebar:e,toggleSidebar:t=>{e.opened=!e.opened,e.withoutAnimation=t},closeSidebar:t=>{e.opened=!1,e.withoutAnimation=t},toggleDevice:e=>{o.value=e}}})),he={class:"app-main"},me={class:"app-scrollbar"},ge=C(u({__name:"AppMain",setup(e){const t=o(),a=d(),l=p((()=>t.path));return(e,t)=>{const n=f("router-view");return v(),h("section",he,[m("div",me,[g(n,null,{default:b((({Component:e})=>[g(y,{name:"el-fade-in",mode:"out-in"},{default:b((()=>[(v(),w(_,{include:k(a).cachedViews},[(v(),w(x(e),{key:l.value}))],1032,["include"]))])),_:2},1024)])),_:1})])])}}}),[["__scopeId","data-v-ff33bb27"]]),be=C(u({__name:"index",props:{isActive:{type:Boolean,default:!1}},emits:["toggleClick"],setup(e,{emit:t}){const a=e,l=()=>{t("toggleClick")};return(e,t)=>{const n=f("el-icon");return v(),h("div",{onClick:l},[g(n,{size:20,class:"icon"},{default:b((()=>[a.isActive?(v(),w(k(E),{key:0})):(v(),w(k(A),{key:1}))])),_:1})])}}}),[["__scopeId","data-v-252d9bf8"]]);function ye(e,t){void 0===t&&(t={});for(var a=function(e){for(var t=[],a=0;a<e.length;){var l=e[a];if("*"!==l&&"+"!==l&&"?"!==l)if("\\"!==l)if("{"!==l)if("}"!==l)if(":"!==l)if("("!==l)t.push({type:"CHAR",index:a,value:e[a++]});else{var n=1,r="";if("?"===e[s=a+1])throw new TypeError('Pattern cannot start with "?" at '.concat(s));for(;s<e.length;)if("\\"!==e[s]){if(")"===e[s]){if(0==--n){s++;break}}else if("("===e[s]&&(n++,"?"!==e[s+1]))throw new TypeError("Capturing groups are not allowed at ".concat(s));r+=e[s++]}else r+=e[s++]+e[s++];if(n)throw new TypeError("Unbalanced pattern at ".concat(a));if(!r)throw new TypeError("Missing pattern at ".concat(a));t.push({type:"PATTERN",index:a,value:r}),a=s}else{for(var o="",s=a+1;s<e.length;){var i=e.charCodeAt(s);if(!(i>=48&&i<=57||i>=65&&i<=90||i>=97&&i<=122||95===i))break;o+=e[s++]}if(!o)throw new TypeError("Missing parameter name at ".concat(a));t.push({type:"NAME",index:a,value:o}),a=s}else t.push({type:"CLOSE",index:a,value:e[a++]});else t.push({type:"OPEN",index:a,value:e[a++]});else t.push({type:"ESCAPED_CHAR",index:a++,value:e[a++]});else t.push({type:"MODIFIER",index:a,value:e[a++]})}return t.push({type:"END",index:a,value:""}),t}(e),l=t.prefixes,n=void 0===l?"./":l,r="[^".concat(function(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}(t.delimiter||"/#?"),"]+?"),o=[],s=0,i=0,c="",u=function(e){if(i<a.length&&a[i].type===e)return a[i++].value},d=function(e){var t=u(e);if(void 0!==t)return t;var l=a[i],n=l.type,r=l.index;throw new TypeError("Unexpected ".concat(n," at ").concat(r,", expected ").concat(e))},p=function(){for(var e,t="";e=u("CHAR")||u("ESCAPED_CHAR");)t+=e;return t};i<a.length;){var f=u("CHAR"),v=u("NAME"),h=u("PATTERN");if(v||h){var m=f||"";-1===n.indexOf(m)&&(c+=m,m=""),c&&(o.push(c),c=""),o.push({name:v||s++,prefix:m,suffix:"",pattern:h||r,modifier:u("MODIFIER")||""})}else{var g=f||u("ESCAPED_CHAR");if(g)c+=g;else if(c&&(o.push(c),c=""),u("OPEN")){m=p();var b=u("NAME")||"",y=u("PATTERN")||"",w=p();d("CLOSE"),o.push({name:b||(y?s++:""),pattern:b&&!y?r:y,prefix:m,suffix:w,modifier:u("MODIFIER")||""})}else d("END")}}return o}function we(e,t){return function(e,t){void 0===t&&(t={});var a=function(e){return e&&e.sensitive?"":"i"}(t),l=t.encode,n=void 0===l?function(e){return e}:l,r=t.validate,o=void 0===r||r,s=e.map((function(e){if("object"==typeof e)return new RegExp("^(?:".concat(e.pattern,")$"),a)}));return function(t){for(var a="",l=0;l<e.length;l++){var r=e[l];if("string"!=typeof r){var i=t?t[r.name]:void 0,c="?"===r.modifier||"*"===r.modifier,u="*"===r.modifier||"+"===r.modifier;if(Array.isArray(i)){if(!u)throw new TypeError('Expected "'.concat(r.name,'" to not repeat, but got an array'));if(0===i.length){if(c)continue;throw new TypeError('Expected "'.concat(r.name,'" to not be empty'))}for(var d=0;d<i.length;d++){var p=n(i[d],r);if(o&&!s[l].test(p))throw new TypeError('Expected all "'.concat(r.name,'" to match "').concat(r.pattern,'", but got "').concat(p,'"'));a+=r.prefix+p+r.suffix}}else if("string"!=typeof i&&"number"!=typeof i){if(!c){var f=u?"an array":"a string";throw new TypeError('Expected "'.concat(r.name,'" to be ').concat(f))}}else{p=n(String(i),r);if(o&&!s[l].test(p))throw new TypeError('Expected "'.concat(r.name,'" to match "').concat(r.pattern,'", but got "').concat(p,'"'));a+=r.prefix+p+r.suffix}}else a+=r}return a}}(ye(e,t),t)}const _e={key:0,class:"no-redirect"},ke=["onClick"],xe=C(u({__name:"index",setup(e){const t=o(),a=S(),r=l([]),s=()=>{r.value=t.matched.filter((e=>{var t,a;return(null==(t=e.meta)?void 0:t.title)&&!1!==(null==(a=e.meta)?void 0:a.breadcrumb)}))},i=e=>{const{redirect:l,path:n}=e;l?a.push(l):a.push((e=>we(e)(t.params))(n))};return n((()=>t.path),(e=>{e.startsWith("/redirect/")||s()})),s(),(e,t)=>{const a=f("el-breadcrumb-item"),l=f("el-breadcrumb");return v(),w(l,{class:"app-breadcrumb"},{default:b((()=>[(v(!0),h(V,null,T(r.value,((e,t)=>(v(),w(a,{key:e.path},{default:b((()=>["noRedirect"===e.redirect||t===r.value.length-1?(v(),h("span",_e,I(e.meta.title),1)):(v(),h("a",{key:1,onClick:M((t=>i(e)),["prevent"])},I(e.meta.title),9,ke))])),_:2},1024)))),128))])),_:1})}}}),[["__scopeId","data-v-94c6aa4b"]]),Ce=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],Ee=(()=>{if("undefined"==typeof document)return!1;const e=Ce[0],t={};for(const a of Ce){if((null==a?void 0:a[1])in document){for(const[l,n]of a.entries())t[e[l]]=n;return t}}return!1})(),Ae={change:Ee.fullscreenchange,error:Ee.fullscreenerror};let Se={request:(e=document.documentElement,t)=>new Promise(((a,l)=>{const n=()=>{Se.off("change",n),a()};Se.on("change",n);const r=e[Ee.requestFullscreen](t);r instanceof Promise&&r.then(n).catch(l)})),exit:()=>new Promise(((e,t)=>{if(!Se.isFullscreen)return void e();const a=()=>{Se.off("change",a),e()};Se.on("change",a);const l=document[Ee.exitFullscreen]();l instanceof Promise&&l.then(a).catch(t)})),toggle:(e,t)=>Se.isFullscreen?Se.exit():Se.request(e,t),onchange(e){Se.on("change",e)},onerror(e){Se.on("error",e)},on(e,t){const a=Ae[e];a&&document.addEventListener(a,t,!1)},off(e,t){const a=Ae[e];a&&document.removeEventListener(a,t,!1)},raw:Ee};Object.defineProperties(Se,{isFullscreen:{get:()=>Boolean(document[Ee.fullscreenElement])},element:{enumerable:!0,get:()=>document[Ee.fullscreenElement]??void 0},isEnabled:{enumerable:!0,get:()=>Boolean(document[Ee.fullscreenEnabled])}}),Ee||(Se={isEnabled:!1});const Ve=Se,Te=C(u({__name:"index",props:{element:{default:"html"},openTips:{default:"全屏"},exitTips:{default:"退出全屏"},content:{type:Boolean,default:!1}},setup(e){const t=e,a=l(!1),n=p((()=>a.value?t.exitTips:t.openTips)),r=p((()=>a.value?"fullscreen-exit":"fullscreen")),o=()=>{const e=document.querySelector(t.element)||void 0;Ve.isEnabled?Ve.toggle(e):P.warning("您的浏览器无法工作")},s=()=>{a.value=Ve.isFullscreen};R((e=>{Ve.on("change",s),e((()=>{Ve.isEnabled&&Ve.off("change",s)}))}));const i=l(!1),c=p((()=>i.value?"内容区复原":"内容区放大")),u=p((()=>i.value?"fullscreen-exit":"fullscreen")),d=()=>{document.body.className=i.value?"":"content-large",i.value=!i.value};return(e,t)=>{const l=f("SvgIcon"),s=f("el-tooltip"),i=f("el-dropdown-item"),p=f("el-dropdown-menu"),m=f("el-dropdown");return v(),h("div",null,[e.content?(v(),w(m,{key:1},{dropdown:b((()=>[g(p,null,{default:b((()=>[g(i,{onClick:d},{default:b((()=>[F(I(c.value),1)])),_:1}),g(i,{onClick:o,disabled:a.value},{default:b((()=>[F("内容区全屏")])),_:1},8,["disabled"])])),_:1})])),default:b((()=>[g(l,{name:u.value},null,8,["name"])])),_:1})):(v(),w(s,{key:0,effect:"dark",content:n.value,placement:"bottom"},{default:b((()=>[g(l,{name:r.value,onClick:o},null,8,["name"])])),_:1},8,["content"]))])}}}),[["__scopeId","data-v-9e7c36e4"]]),Ie={class:"card-header"},Me={class:"card-title"},Re={class:"card-time"},Fe={key:0,class:"card-avatar"},Pe=["src"],De={class:"card-body"},ze=C(u({__name:"NotifyList",props:{list:{}},setup(e){const t=e;return(e,a)=>{const l=f("el-empty"),n=f("el-tag"),r=f("el-card");return 0===t.list.length?(v(),w(l,{key:0})):(v(!0),h(V,{key:1},T(t.list,((e,t)=>(v(),w(r,{key:t,shadow:"never",class:"card-container"},{header:b((()=>[m("div",Ie,[m("div",null,[m("span",null,[m("span",Me,I(e.title),1),e.extra?(v(),w(n,{key:0,type:e.status,effect:"plain",size:"small"},{default:b((()=>[F(I(e.extra),1)])),_:2},1032,["type"])):D("",!0)]),m("div",Re,I(e.datetime),1)]),e.avatar?(v(),h("div",Fe,[m("img",{src:e.avatar,width:"34"},null,8,Pe)])):D("",!0)])])),default:b((()=>[m("div",De,I(e.description??"No Data"),1)])),_:2},1024)))),128))}}}),[["__scopeId","data-v-137655f9"]]),Le=[{avatar:"https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png",title:"V3 Admin Vite 上线啦",datetime:"半年前",description:"一个免费开源的中后台管理系统基础解决方案，基于 Vue3、TypeScript、Element Plus、Pinia 和 Vite 等主流技术"},{avatar:"https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png",title:"V3 Admin 上线啦",datetime:"一年前",description:"一个中后台管理系统基础解决方案，基于 Vue3、TypeScript、Element Plus 和 Pinia"}],Ne=[{avatar:"https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",title:"来自楚门的世界",description:"如果再也不能见到你，祝你早安、午安和晚安",datetime:"1998-06-05"},{avatar:"https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",title:"来自大话西游",description:"如果非要在这份爱上加上一个期限，我希望是一万年",datetime:"1995-02-04"},{avatar:"https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",title:"来自龙猫",description:"心存善意，定能途遇天使",datetime:"1988-04-16"}],Oe=[{title:"任务名称",description:"这家伙很懒，什么都没留下",extra:"未开始",status:"info"},{title:"任务名称",description:"这家伙很懒，什么都没留下",extra:"进行中",status:""},{title:"任务名称",description:"这家伙很懒，什么都没留下",extra:"已超时",status:"danger"}],qe={class:"notify"},je={class:"notify-history"},We=C(u({__name:"index",setup(e){const t=p((()=>n.value.reduce(((e,t)=>e+t.list.length),0))),a=l("通知"),n=l([{name:"通知",type:"primary",list:Le},{name:"消息",type:"danger",list:Ne},{name:"待办",type:"warning",list:Oe}]),r=()=>{P.success(`跳转到${a.value}历史页面`)};return(e,l)=>{const o=f("el-icon"),s=f("el-tooltip"),i=f("el-badge"),c=f("el-scrollbar"),u=f("el-tab-pane"),d=f("el-tabs"),p=f("el-button"),y=f("el-popover");return v(),h("div",qe,[g(y,{placement:"bottom",width:350,trigger:"click"},{reference:b((()=>[g(i,{value:t.value,max:99,hidden:0===t.value},{default:b((()=>[g(s,{effect:"dark",content:"消息通知",placement:"bottom"},{default:b((()=>[g(o,{size:20},{default:b((()=>[g(k(z))])),_:1})])),_:1})])),_:1},8,["value","hidden"])])),default:b((()=>[g(d,{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=e=>a.value=e),class:"demo-tabs",stretch:""},{default:b((()=>[(v(!0),h(V,null,T(n.value,((e,t)=>(v(),w(u,{name:e.name,key:t},{label:b((()=>[F(I(e.name)+" ",1),g(i,{value:e.list.length,max:99,type:e.type},null,8,["value","type"])])),default:b((()=>[g(c,{height:"400px"},{default:b((()=>[g(ze,{list:e.list},null,8,["list"])])),_:2},1024)])),_:2},1032,["name"])))),128))])),_:1},8,["modelValue"]),m("div",je,[g(p,{link:"",onClick:r},{default:b((()=>[F("查看"+I(a.value)+"历史",1)])),_:1})])])),_:1})])}}}),[["__scopeId","data-v-50089150"]]),Be={class:"navigation-bar"},$e={class:"right-menu"},He={class:"right-menu-avatar"},Xe={target:"_blank",href:"https://juejin.cn/post/7089377403717287972"},Ue={target:"_blank",href:"https://github.com/un-pany/v3-admin-vite"},Ge={target:"_blank",href:"https://gitee.com/un-pany/v3-admin-vite"},Ye=(e=>(j("data-v-67da4398"),e=e(),W(),e))((()=>m("span",{style:{display:"block"}},"退出登录",-1))),Je=C(u({__name:"index",setup(e){const t=S(),a=ve(),l=L(),n=N(),{sidebar:r}=O(a),{showNotify:o,showThemeSwitch:s,showScreenfull:i}=O(l),c=()=>{a.toggleSidebar(!1)},u=()=>{n.logout(),t.push("/login")};return(e,t)=>{const a=f("el-avatar"),l=f("el-dropdown-item"),d=f("el-dropdown-menu"),p=f("el-dropdown");return v(),h("div",Be,[g(be,{"is-active":k(r).opened,class:"hamburger",onToggleClick:c},null,8,["is-active"]),g(xe,{class:"breadcrumb"}),m("div",$e,[k(i)?(v(),w(Te,{key:0,class:"right-menu-item"})):D("",!0),k(s)?(v(),w(de,{key:1,class:"right-menu-item"})):D("",!0),k(o)?(v(),w(We,{key:2,class:"right-menu-item"})):D("",!0),g(p,{class:"right-menu-item"},{dropdown:b((()=>[g(d,null,{default:b((()=>[m("a",Xe,[g(l,null,{default:b((()=>[F("中文文档")])),_:1})]),m("a",Ue,[g(l,null,{default:b((()=>[F("GitHub")])),_:1})]),m("a",Ge,[g(l,null,{default:b((()=>[F("Gitee")])),_:1})]),g(l,{divided:"",onClick:u},{default:b((()=>[Ye])),_:1})])),_:1})])),default:b((()=>[m("div",He,[g(a,{icon:k(q),size:30},null,8,["icon"]),m("span",null,I(k(n).username),1)])])),_:1})])])}}}),[["__scopeId","data-v-67da4398"]]),Ze=e=>(j("data-v-101dd14f"),e=e(),W(),e),Ke={class:"setting-container"},Qe=Ze((()=>m("h4",null,"布局配置",-1))),et=Ze((()=>m("h4",null,"功能配置",-1))),tt={class:"setting-name"},at=C(u({__name:"index",setup(e){const t=L(),{layoutMode:a,showTagsView:l,showLogo:n,fixedHeader:r,showNotify:o,showThemeSwitch:s,showScreenfull:i,cacheTagsView:c,showGreyMode:u,showColorWeakness:d}=O(t),p={"显示标签栏":l,"显示 Logo":n,"固定 Header":r,"显示消息通知":o,"显示切换主题按钮":s,"显示全屏按钮":i,"是否缓存标签栏":c,"显示灰色模式":u,"显示色弱模式":d};return R((()=>{"left"!==a.value&&(r.value=!0)})),(e,t)=>{const l=f("el-radio"),n=f("el-radio-group"),r=f("el-switch"),o=f("el-button");return v(),h("div",Ke,[Qe,g(n,{modelValue:k(a),"onUpdate:modelValue":t[0]||(t[0]=e=>B(a)?a.value=e:null)},{default:b((()=>[g(l,{label:"left"},{default:b((()=>[F("左侧模式")])),_:1}),g(l,{label:"top"},{default:b((()=>[F("顶部模式（开发中）")])),_:1}),g(l,{label:"left-top"},{default:b((()=>[F("混合模式")])),_:1})])),_:1},8,["modelValue"]),et,(v(),h(V,null,T(p,((e,t,l)=>m("div",{class:"setting-item",key:l},[m("span",tt,I(t),1),g(r,{modelValue:e.value,"onUpdate:modelValue":t=>e.value=t,disabled:"left"!==k(a)&&"固定 Header"===t},null,8,["modelValue","onUpdate:modelValue","disabled"])]))),64)),g(o,{type:"danger",icon:k($),onClick:k(H)},{default:b((()=>[F("重 置")])),_:1},8,["icon","onClick"])])}}}),[["__scopeId","data-v-101dd14f"]]),lt=e=>/^(https?:|mailto:|tel:)/.test(e),nt=["href"],rt=u({__name:"SidebarItemLink",props:{to:{}},setup(e){const t=e;return(e,a)=>{const l=f("router-link");return k(lt)(t.to)?(v(),h("a",{key:0,href:t.to,target:"_blank",rel:"noopener"},[X(e.$slots,"default")],8,nt)):(v(),w(l,{key:1,to:t.to},{default:b((()=>[X(e.$slots,"default")])),_:3},8,["to"]))}}});function ot(e){if("string"!=typeof e)throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}function st(e,t){for(var a,l="",n=0,r=-1,o=0,s=0;s<=e.length;++s){if(s<e.length)a=e.charCodeAt(s);else{if(47===a)break;a=47}if(47===a){if(r===s-1||1===o);else if(r!==s-1&&2===o){if(l.length<2||2!==n||46!==l.charCodeAt(l.length-1)||46!==l.charCodeAt(l.length-2))if(l.length>2){var i=l.lastIndexOf("/");if(i!==l.length-1){-1===i?(l="",n=0):n=(l=l.slice(0,i)).length-1-l.lastIndexOf("/"),r=s,o=0;continue}}else if(2===l.length||1===l.length){l="",n=0,r=s,o=0;continue}t&&(l.length>0?l+="/..":l="..",n=2)}else l.length>0?l+="/"+e.slice(r+1,s):l=e.slice(r+1,s),n=s-r-1;r=s,o=0}else 46===a&&-1!==o?++o:o=-1}return l}var it={resolve:function(){for(var e,t="",a=!1,l=arguments.length-1;l>=-1&&!a;l--){var n;l>=0?n=arguments[l]:(void 0===e&&(e=process.cwd()),n=e),ot(n),0!==n.length&&(t=n+"/"+t,a=47===n.charCodeAt(0))}return t=st(t,!a),a?t.length>0?"/"+t:"/":t.length>0?t:"."},normalize:function(e){if(ot(e),0===e.length)return".";var t=47===e.charCodeAt(0),a=47===e.charCodeAt(e.length-1);return 0!==(e=st(e,!t)).length||t||(e="."),e.length>0&&a&&(e+="/"),t?"/"+e:e},isAbsolute:function(e){return ot(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0===arguments.length)return".";for(var e,t=0;t<arguments.length;++t){var a=arguments[t];ot(a),a.length>0&&(void 0===e?e=a:e+="/"+a)}return void 0===e?".":it.normalize(e)},relative:function(e,t){if(ot(e),ot(t),e===t)return"";if((e=it.resolve(e))===(t=it.resolve(t)))return"";for(var a=1;a<e.length&&47===e.charCodeAt(a);++a);for(var l=e.length,n=l-a,r=1;r<t.length&&47===t.charCodeAt(r);++r);for(var o=t.length-r,s=n<o?n:o,i=-1,c=0;c<=s;++c){if(c===s){if(o>s){if(47===t.charCodeAt(r+c))return t.slice(r+c+1);if(0===c)return t.slice(r+c)}else n>s&&(47===e.charCodeAt(a+c)?i=c:0===c&&(i=0));break}var u=e.charCodeAt(a+c);if(u!==t.charCodeAt(r+c))break;47===u&&(i=c)}var d="";for(c=a+i+1;c<=l;++c)c!==l&&47!==e.charCodeAt(c)||(0===d.length?d+="..":d+="/..");return d.length>0?d+t.slice(r+i):(r+=i,47===t.charCodeAt(r)&&++r,t.slice(r))},_makeLong:function(e){return e},dirname:function(e){if(ot(e),0===e.length)return".";for(var t=e.charCodeAt(0),a=47===t,l=-1,n=!0,r=e.length-1;r>=1;--r)if(47===(t=e.charCodeAt(r))){if(!n){l=r;break}}else n=!1;return-1===l?a?"/":".":a&&1===l?"//":e.slice(0,l)},basename:function(e,t){if(void 0!==t&&"string"!=typeof t)throw new TypeError('"ext" argument must be a string');ot(e);var a,l=0,n=-1,r=!0;if(void 0!==t&&t.length>0&&t.length<=e.length){if(t.length===e.length&&t===e)return"";var o=t.length-1,s=-1;for(a=e.length-1;a>=0;--a){var i=e.charCodeAt(a);if(47===i){if(!r){l=a+1;break}}else-1===s&&(r=!1,s=a+1),o>=0&&(i===t.charCodeAt(o)?-1==--o&&(n=a):(o=-1,n=s))}return l===n?n=s:-1===n&&(n=e.length),e.slice(l,n)}for(a=e.length-1;a>=0;--a)if(47===e.charCodeAt(a)){if(!r){l=a+1;break}}else-1===n&&(r=!1,n=a+1);return-1===n?"":e.slice(l,n)},extname:function(e){ot(e);for(var t=-1,a=0,l=-1,n=!0,r=0,o=e.length-1;o>=0;--o){var s=e.charCodeAt(o);if(47!==s)-1===l&&(n=!1,l=o+1),46===s?-1===t?t=o:1!==r&&(r=1):-1!==t&&(r=-1);else if(!n){a=o+1;break}}return-1===t||-1===l||0===r||1===r&&t===l-1&&t===a+1?"":e.slice(t,l)},format:function(e){if(null===e||"object"!=typeof e)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return function(e,t){var a=t.dir||t.root,l=t.base||(t.name||"")+(t.ext||"");return a?a===t.root?a+l:a+e+l:l}("/",e)},parse:function(e){ot(e);var t={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return t;var a,l=e.charCodeAt(0),n=47===l;n?(t.root="/",a=1):a=0;for(var r=-1,o=0,s=-1,i=!0,c=e.length-1,u=0;c>=a;--c)if(47!==(l=e.charCodeAt(c)))-1===s&&(i=!1,s=c+1),46===l?-1===r?r=c:1!==u&&(u=1):-1!==r&&(u=-1);else if(!i){o=c+1;break}return-1===r||-1===s||0===u||1===u&&r===s-1&&r===o+1?-1!==s&&(t.base=t.name=0===o&&n?e.slice(1,s):e.slice(o,s)):(0===o&&n?(t.name=e.slice(1,r),t.base=e.slice(1,s)):(t.name=e.slice(o,r),t.base=e.slice(o,s)),t.ext=e.slice(r,s)),o>0?t.dir=e.slice(0,o-1):n&&(t.dir="/"),t},sep:"/",delimiter:":",win32:null,posix:null};it.posix=it;const ct=U(it),ut={key:2},dt=C(u({__name:"SidebarItem",props:{item:{},isCollapse:{type:Boolean,default:!1},isFirstLevel:{type:Boolean,default:!0},basePath:{default:""}},setup(e){const t=e,a=p((()=>{var e;return null==(e=t.item.meta)?void 0:e.alwaysShow})),l=p((()=>{var e;return(null==(e=t.item.children)?void 0:e.filter((e=>{var t;return!(null==(t=e.meta)?void 0:t.hidden)})))??[]})),n=p((()=>l.value.length)),r=p((()=>{const e=n.value;switch(!0){case e>1:return null;case 1===e:return l.value[0];default:return{...t.item,path:""}}})),o=e=>{switch(!0){case lt(e):return e;case lt(t.basePath):return t.basePath;default:return ct.resolve(t.basePath,e)}};return(e,l)=>{var n;const s=f("SvgIcon"),i=f("el-menu-item"),c=f("sidebar-item",!0),u=f("el-sub-menu");return(null==(n=t.item.meta)?void 0:n.hidden)?D("",!0):(v(),h("div",{key:0,class:Y({"simple-mode":t.isCollapse,"first-level":t.isFirstLevel})},[a.value||!r.value||r.value.children?(v(),w(u,{key:1,index:o(t.item.path),teleported:""},{title:b((()=>{var e,a,l;return[(null==(e=t.item.meta)?void 0:e.svgIcon)?(v(),w(s,{key:0,name:t.item.meta.svgIcon},null,8,["name"])):(null==(a=t.item.meta)?void 0:a.elIcon)?(v(),w(x(t.item.meta.elIcon),{key:1,class:"el-icon"})):D("",!0),(null==(l=t.item.meta)?void 0:l.title)?(v(),h("span",ut,I(t.item.meta.title),1)):D("",!0)]})),default:b((()=>[t.item.children?(v(!0),h(V,{key:0},T(t.item.children,(e=>(v(),w(c,{key:e.path,item:e,"is-collapse":t.isCollapse,"is-first-level":!1,"base-path":o(e.path)},null,8,["item","is-collapse","base-path"])))),128)):D("",!0)])),_:1},8,["index"])):(v(),h(V,{key:0},[r.value.meta?(v(),w(rt,{key:0,to:o(r.value.path)},{default:b((()=>[g(i,{index:o(r.value.path)},G({default:b((()=>[r.value.meta.svgIcon?(v(),w(s,{key:0,name:r.value.meta.svgIcon},null,8,["name"])):r.value.meta.elIcon?(v(),w(x(r.value.meta.elIcon),{key:1,class:"el-icon"})):D("",!0)])),_:2},[r.value.meta.title?{name:"title",fn:b((()=>[F(I(r.value.meta.title),1)])),key:"0"}:void 0]),1032,["index"])])),_:1},8,["to"])):D("",!0)],64))],2))}}}),[["__scopeId","data-v-a018f292"]]),pt=["src"],ft=["src"],vt=C(u({__name:"index",props:{collapse:{type:Boolean,default:!0}},setup(e){const t=e;J((e=>({"2f79d5a6":n.value})));const a=L(),{layoutMode:l}=O(a),n=p((()=>"left"!==l.value?Z("--v3-header-bg-color"):Z("--v3-sidebar-menu-bg-color")));return(e,a)=>{const n=f("router-link");return v(),h("div",{class:Y(["layout-logo-container",{collapse:t.collapse}])},[g(y,{name:"layout-logo-fade"},{default:b((()=>[t.collapse?(v(),w(n,{key:"collapse",to:"/"},{default:b((()=>[m("img",{src:k("/v3-admin-vite/static/logo-cc70e06e.png"),class:"layout-logo"},null,8,pt)])),_:1})):(v(),w(n,{key:"expand",to:"/"},{default:b((()=>[m("img",{src:"left"!==k(l)?k("/v3-admin-vite/static/logo-text-2-eef467fb.png"):k("/v3-admin-vite/static/logo-text-1-b6b0364d.png"),class:"layout-logo-text"},null,8,ft)])),_:1}))])),_:1})],2)}}}),[["__scopeId","data-v-8dd93135"]]),ht=C(u({__name:"index",setup(e){const t=Z("--v3-sidebar-menu-bg-color"),a=Z("--v3-sidebar-menu-text-color"),l=Z("--v3-sidebar-menu-active-text-color"),n=o(),r=ve(),s=K(),i=L(),{layoutMode:c,showLogo:u}=O(i),d=p((()=>{const{meta:{activeMenu:e},path:t}=n;return e||t})),m=p((()=>!r.sidebar.opened)),y=p((()=>"left"===c.value&&u.value));return(e,n)=>{const r=f("el-menu"),o=f("el-scrollbar");return v(),h("div",{class:Y({"has-logo":y.value})},[y.value?(v(),w(vt,{key:0,collapse:m.value},null,8,["collapse"])):D("",!0),g(o,{"wrap-class":"scrollbar-wrapper"},{default:b((()=>[g(r,{"default-active":d.value,collapse:m.value,"background-color":k(t),"text-color":k(a),"active-text-color":k(l),"unique-opened":!0,"collapse-transition":!1,mode:"vertical"},{default:b((()=>[(v(!0),h(V,null,T(k(s).routes,(e=>(v(),w(dt,{key:e.path,item:e,"base-path":e.path,"is-collapse":m.value},null,8,["item","base-path","is-collapse"])))),128))])),_:1},8,["default-active","collapse","background-color","text-color","active-text-color"])])),_:1})],2)}}}),[["__scopeId","data-v-4d6b9d72"]]),mt={class:"scroll-container"},gt=C(u({__name:"ScrollPane",props:{tagRefs:{}},setup(e){const t=e,a=o(),r=L(),s=l(),i=l();let c=0;const u=({scrollLeft:e})=>{c=e},d=({deltaY:e})=>{/^-/.test(e.toString())?y("left"):y("right")},p=()=>{const e=i.value.clientWidth,t=s.value.wrapRef.clientWidth;return{scrollbarContentRefWidth:e,scrollbarRefWidth:t,lastDistance:e-t-c}},y=(e,t=200)=>{let a=0;const{scrollbarContentRefWidth:l,scrollbarRefWidth:n,lastDistance:r}=p();n>l||(a="left"===e?Math.max(0,c-t):Math.min(c+t,c+r),s.value.setScrollLeft(a))},_=()=>{const e=t.tagRefs;for(let t=0;t<e.length;t++)if(a.path===e[t].$props.to.path){const a=e[t].$el,l=a.offsetWidth,n=a.offsetLeft,{scrollbarRefWidth:r}=p();if(n<c){return void y("left",c-n)}const o=r+c-l;if(n>o){return void y("right",n-o)}}};return n(a,(()=>{Q(_)}),{deep:!0}),(e,t)=>{const a=f("el-icon");return v(),h("div",mt,[g(a,{class:"arrow left",onClick:t[0]||(t[0]=e=>y("left"))},{default:b((()=>[g(k(ee))])),_:1}),g(k(te),{ref_key:"scrollbarRef",ref:s,onWheelPassive:d,onScroll:u},{default:b((()=>[m("div",{ref_key:"scrollbarContentRef",ref:i,class:"scrollbar-content"},[X(e.$slots,"default",{},void 0,!0)],512)])),_:3},512),g(a,{class:"arrow right",onClick:t[1]||(t[1]=e=>y("right"))},{default:b((()=>[g(k(ae))])),_:1}),k(r).showScreenfull?(v(),w(Te,{key:0,element:".app-main",content:!0,class:"screenfull"})):D("",!0)])}}}),[["__scopeId","data-v-01845fab"]]),bt={class:"tags-view-container"},yt=C(u({__name:"index",setup(e){const t=le(),a=S(),r=o(),s=d(),c=K(),u=l([]),p=l(!1),y=l(0),_=l(0),x=l({});let C=[];const E=e=>e.path===r.path,A=e=>{var t;return null==(t=e.meta)?void 0:t.affix},R=(e,t="/")=>{const a=[];return e.forEach((e=>{if(A(e)){const l=ct.resolve(t,e.path);a.push({fullPath:l,path:l,name:e.name,meta:{...e.meta}})}if(e.children){const t=R(e.children,e.path);a.push(...t)}})),a},P=()=>{r.name&&(s.addVisitedView(r),s.addCachedView(r))},z=e=>{s.delVisitedView(e),s.delCachedView(e),E(e)&&N(s.visitedViews,e)},L=()=>{const e=x.value.fullPath;e!==r.path&&void 0!==e&&a.push(e),s.delOthersVisitedViews(x.value),s.delOthersCachedViews(x.value)},N=(e,t)=>{const l=e.slice(-1)[0],n=null==l?void 0:l.fullPath;void 0!==n?a.push(n):"Dashboard"===t.name?a.push({path:"/redirect"+t.path,query:t.query}):a.push("/")},O=()=>{p.value=!1};return n(r,(()=>{P()}),{deep:!0}),n(p,(e=>{e?document.body.addEventListener("click",O):document.body.removeEventListener("click",O)})),i((()=>{(()=>{C=R(c.routes);for(const e of C)e.name&&s.addVisitedView(e)})(),P()})),(e,l)=>{const n=f("el-icon");return v(),h("div",bt,[g(gt,{class:"tags-view-wrapper","tag-refs":u.value},{default:b((()=>[(v(!0),h(V,null,T(k(s).visitedViews,(e=>(v(),w(k(ne),{ref_for:!0,ref_key:"tagRefs",ref:u,key:e.path,class:Y([{active:E(e)},"tags-view-item"]),to:{path:e.path,query:e.query},onMouseup:M((t=>!A(e)&&z(e)),["middle"]),onContextmenu:M((a=>((e,a)=>{const l=t.proxy.$el.getBoundingClientRect().left,n=t.proxy.$el.offsetWidth-105,r=a.clientX-l+15;_.value=r>n?n:r,y.value=a.clientY,p.value=!0,x.value=e})(e,a)),["prevent"])},{default:b((()=>{var t;return[F(I(null==(t=e.meta)?void 0:t.title)+" ",1),A(e)?D("",!0):(v(),w(n,{key:0,size:12,onClick:M((t=>z(e)),["prevent","stop"])},{default:b((()=>[g(k(re))])),_:2},1032,["onClick"]))]})),_:2},1032,["class","to","onMouseup","onContextmenu"])))),128))])),_:1},8,["tag-refs"]),oe(m("ul",{class:"contextmenu",style:ie({left:_.value+"px",top:y.value+"px"})},[m("li",{onClick:l[0]||(l[0]=e=>{return t=x.value,s.delCachedView(t),void a.replace({path:"/redirect"+t.path,query:t.query});var t})},"刷新"),A(x.value)?D("",!0):(v(),h("li",{key:0,onClick:l[1]||(l[1]=e=>z(x.value))},"关闭")),m("li",{onClick:L},"关闭其它"),m("li",{onClick:l[2]||(l[2]=e=>{return t=x.value,s.delAllVisitedViews(),s.delAllCachedViews(),void(C.some((e=>e.path===r.path))||N(s.visitedViews,t));var t})},"关闭所有")],4),[[se,p.value]])])}}}),[["__scopeId","data-v-6256a9c5"]]),wt=C(u({__name:"index",props:{buttonTop:{default:350}},setup(e){const t=e;J((e=>({"184df93f":a})));const a=t.buttonTop+"px",n=l(!1);return(e,t)=>{const a=f("el-icon"),l=f("el-drawer");return v(),h(V,null,[m("div",{class:"handle-button",onClick:t[0]||(t[0]=e=>n.value=!0)},[g(a,{size:24},{default:b((()=>[g(k(ce))])),_:1})]),g(l,{modelValue:n.value,"onUpdate:modelValue":t[1]||(t[1]=e=>n.value=e),size:"300px","with-header":!1},{default:b((()=>[X(e.$slots,"default",{},void 0,!0)])),_:3},8,["modelValue"])],64)}}}),[["__scopeId","data-v-79eaf320"]]),_t=C(u({__name:"LeftMode",setup(e){const t=ve(),a=L(),{showTagsView:l,fixedHeader:n}=O(a),r=p((()=>({hideSidebar:!t.sidebar.opened,openSidebar:t.sidebar.opened,withoutAnimation:t.sidebar.withoutAnimation,mobile:t.device===pe.Mobile}))),o=()=>{t.closeSidebar(!1)};return(e,t)=>(v(),h("div",{class:Y([r.value,"app-wrapper"])},[r.value.mobile&&r.value.openSidebar?(v(),h("div",{key:0,class:"drawer-bg",onClick:o})):D("",!0),g(k(ht),{class:"sidebar-container"}),m("div",{class:Y([{hasTagsView:k(l)},"main-container"])},[m("div",{class:Y([{"fixed-header":k(n)},"layout-header"])},[g(k(Je)),oe(g(k(yt),null,null,512),[[se,k(l)]])],2),g(k(ge),{class:"app-main"})],2)],2))}}),[["__scopeId","data-v-18b53696"]]),kt={class:"fixed-header layout-header"},xt={class:"content"},Ct=C(u({__name:"LeftTopMode",setup(e){const t=ve(),a=L(),{showTagsView:l,showLogo:n}=O(a),r=p((()=>({hideSidebar:!t.sidebar.opened})));return(e,t)=>(v(),h("div",{class:Y([r.value,"app-wrapper"])},[m("div",kt,[k(n)?(v(),w(k(vt),{key:0,collapse:!1,class:"logo"})):D("",!0),m("div",xt,[g(k(Je)),oe(g(k(yt),null,null,512),[[se,k(l)]])])]),m("div",{class:Y([{hasTagsView:k(l)},"main-container"])},[g(k(ht),{class:"sidebar-container"}),g(k(ge),{class:"app-main"})],2)],2))}}),[["__scopeId","data-v-4c30dc0a"]]),Et="--v3-tagsview-height",At=C(u({__name:"index",setup(e){(()=>{const e=o(),t=ve(),a=()=>document.body.getBoundingClientRect().width-1<992,l=()=>{if(!document.hidden){const e=a();t.toggleDevice(e?pe.Mobile:pe.Desktop),e&&t.closeSidebar(!0)}};n((()=>e.name),(()=>{t.device===pe.Mobile&&t.sidebar.opened&&t.closeSidebar(!1)})),s((()=>{window.addEventListener("resize",l)})),i((()=>{a()&&(t.toggleDevice(pe.Mobile),t.closeSidebar(!0))})),c((()=>{window.removeEventListener("resize",l)}))})();const t=ve(),a=L(),{showSettings:l,layoutMode:r,showTagsView:u,showGreyMode:d,showColorWeakness:f}=O(a),m=p((()=>({showGreyMode:d.value,showColorWeakness:f.value}))),y=Z(Et);return R((()=>{u.value?ue(Et,y):ue(Et,"0px")})),(e,a)=>(v(),h("div",{class:Y(m.value)},["left"===k(r)||k(t).device===k(pe).Mobile?(v(),w(_t,{key:0})):"left-top"===k(r)?(v(),w(Ct,{key:1})):D("",!0),k(l)?(v(),w(k(wt),{key:2},{default:b((()=>[g(k(at))])),_:1})):D("",!0)],2))}}),[["__scopeId","data-v-69e1ce11"]]);export{At as default};
