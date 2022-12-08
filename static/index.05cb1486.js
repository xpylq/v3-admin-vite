import{d as e,r as t,g as a,a as l,s as n,b as r,u as i,c as s,e as o,o as c,f as u,h as d,w as p,T as f,i as m,j as h,k as v,_ as g,l as b,m as w,n as y,F as _,t as k,p as x,q as C,v as E,x as V,E as S,y as A,z as T,A as I,B as P,C as F,D as M,G as R,H as z,I as O,J as D,K as L,L as N,M as j,N as q,O as H,P as U,Q as B,R as X,S as $,U as W,V as G,W as Y,X as J,Y as Z,Z as K,$ as Q}from"./index.3592cdc5.js";import{_ as ee}from"./index.vue_vue_type_script_setup_true_lang.657ee673.js";var te=(e=>(e[e.Mobile=0]="Mobile",e[e.Desktop=1]="Desktop",e))(te||{});const ae=e("app",(()=>{const e=t({opened:"closed"!==a(),withoutAnimation:!1}),r=l(1);return{device:r,sidebar:e,toggleSidebar:t=>{e.opened=!e.opened,e.withoutAnimation=t,e.opened?n("opened"):n("closed")},closeSidebar:t=>{e.opened=!1,e.withoutAnimation=t,n("closed")},toggleDevice:e=>{r.value=e}}})),le=!0,ne=!0,re=!0,ie=!0,se=!0,oe=!0,ce=!0,ue=!1,de=!1,pe=e("settings",(()=>({fixedHeader:l(re),showSettings:l(le),showTagsView:l(ne),showSidebarLogo:l(ie),showNotify:l(se),showThemeSwitch:l(oe),showScreenfull:l(ce),showGreyMode:l(ue),showColorWeakness:l(de)}))),fe={class:"app-main"},me=g(r({__name:"AppMain",setup(e){const t=i(),a=s((()=>t.path));return(e,t)=>{const l=o("router-view");return c(),u("section",fe,[d(l,null,{default:p((({Component:e})=>[d(f,{name:"fade-transform",mode:"out-in"},{default:p((()=>[(c(),m(v(e),{key:h(a)}))])),_:2},1024)])),_:1})])}}}),[["__scopeId","data-v-bcc67543"]]);function he(e,t){void 0===t&&(t={});for(var a=function(e){for(var t=[],a=0;a<e.length;){var l=e[a];if("*"!==l&&"+"!==l&&"?"!==l)if("\\"!==l)if("{"!==l)if("}"!==l)if(":"!==l)if("("!==l)t.push({type:"CHAR",index:a,value:e[a++]});else{var n=1,r="";if("?"===e[s=a+1])throw new TypeError('Pattern cannot start with "?" at '.concat(s));for(;s<e.length;)if("\\"!==e[s]){if(")"===e[s]){if(0==--n){s++;break}}else if("("===e[s]&&(n++,"?"!==e[s+1]))throw new TypeError("Capturing groups are not allowed at ".concat(s));r+=e[s++]}else r+=e[s++]+e[s++];if(n)throw new TypeError("Unbalanced pattern at ".concat(a));if(!r)throw new TypeError("Missing pattern at ".concat(a));t.push({type:"PATTERN",index:a,value:r}),a=s}else{for(var i="",s=a+1;s<e.length;){var o=e.charCodeAt(s);if(!(o>=48&&o<=57||o>=65&&o<=90||o>=97&&o<=122||95===o))break;i+=e[s++]}if(!i)throw new TypeError("Missing parameter name at ".concat(a));t.push({type:"NAME",index:a,value:i}),a=s}else t.push({type:"CLOSE",index:a,value:e[a++]});else t.push({type:"OPEN",index:a,value:e[a++]});else t.push({type:"ESCAPED_CHAR",index:a++,value:e[a++]});else t.push({type:"MODIFIER",index:a,value:e[a++]})}return t.push({type:"END",index:a,value:""}),t}(e),l=t.prefixes,n=void 0===l?"./":l,r="[^".concat(function(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}(t.delimiter||"/#?"),"]+?"),i=[],s=0,o=0,c="",u=function(e){if(o<a.length&&a[o].type===e)return a[o++].value},d=function(e){var t=u(e);if(void 0!==t)return t;var l=a[o],n=l.type,r=l.index;throw new TypeError("Unexpected ".concat(n," at ").concat(r,", expected ").concat(e))},p=function(){for(var e,t="";e=u("CHAR")||u("ESCAPED_CHAR");)t+=e;return t};o<a.length;){var f=u("CHAR"),m=u("NAME"),h=u("PATTERN");if(m||h){var v=f||"";-1===n.indexOf(v)&&(c+=v,v=""),c&&(i.push(c),c=""),i.push({name:m||s++,prefix:v,suffix:"",pattern:h||r,modifier:u("MODIFIER")||""})}else{var g=f||u("ESCAPED_CHAR");if(g)c+=g;else if(c&&(i.push(c),c=""),u("OPEN")){v=p();var b=u("NAME")||"",w=u("PATTERN")||"",y=p();d("CLOSE"),i.push({name:b||(w?s++:""),pattern:b&&!w?r:w,prefix:v,suffix:y,modifier:u("MODIFIER")||""})}else d("END")}}return i}function ve(e,t){return function(e,t){void 0===t&&(t={});var a=function(e){return e&&e.sensitive?"":"i"}(t),l=t.encode,n=void 0===l?function(e){return e}:l,r=t.validate,i=void 0===r||r,s=e.map((function(e){if("object"==typeof e)return new RegExp("^(?:".concat(e.pattern,")$"),a)}));return function(t){for(var a="",l=0;l<e.length;l++){var r=e[l];if("string"!=typeof r){var o=t?t[r.name]:void 0,c="?"===r.modifier||"*"===r.modifier,u="*"===r.modifier||"+"===r.modifier;if(Array.isArray(o)){if(!u)throw new TypeError('Expected "'.concat(r.name,'" to not repeat, but got an array'));if(0===o.length){if(c)continue;throw new TypeError('Expected "'.concat(r.name,'" to not be empty'))}for(var d=0;d<o.length;d++){var p=n(o[d],r);if(i&&!s[l].test(p))throw new TypeError('Expected all "'.concat(r.name,'" to match "').concat(r.pattern,'", but got "').concat(p,'"'));a+=r.prefix+p+r.suffix}}else if("string"!=typeof o&&"number"!=typeof o){if(!c){var f=u?"an array":"a string";throw new TypeError('Expected "'.concat(r.name,'" to be ').concat(f))}}else{p=n(String(o),r);if(i&&!s[l].test(p))throw new TypeError('Expected "'.concat(r.name,'" to match "').concat(r.pattern,'", but got "').concat(p,'"'));a+=r.prefix+p+r.suffix}}else a+=r}return a}}(he(e,t),t)}const ge={key:0,class:"no-redirect"},be=["onClick"],we=g(r({__name:"index",setup(e){const t=i(),a=b(),n=l([]),r=()=>{n.value=t.matched.filter((e=>e.meta&&e.meta.title&&!1!==e.meta.breadcrumb))},s=e=>{const{redirect:l,path:n}=e;l?a.push(l):a.push((e=>{const{params:a}=t;return ve(e)(a)})(n))};return w((()=>t.path),(e=>{e.startsWith("/redirect/")||r()})),r(),(e,t)=>{const a=o("el-breadcrumb-item"),l=o("el-breadcrumb");return c(),m(l,{class:"app-breadcrumb"},{default:p((()=>[(c(!0),u(_,null,y(n.value,((e,t)=>(c(),m(a,{key:e.path},{default:p((()=>["noRedirect"===e.redirect||t===n.value.length-1?(c(),u("span",ge,k(e.meta.title),1)):(c(),u("a",{key:1,onClick:x((t=>s(e)),["prevent"])},k(e.meta.title),9,be))])),_:2},1024)))),128))])),_:1})}}}),[["__scopeId","data-v-8ff70186"]]),ye=g(r({__name:"index",props:{isActive:{type:Boolean,default:!1}},emits:["toggle-click"],setup(e,{emit:t}){const a=e,l=()=>{t("toggle-click")};return(e,t)=>{const n=o("el-icon");return c(),u("div",{onClick:l},[d(n,{size:20,class:"icon"},{default:p((()=>[a.isActive?(c(),m(h(C),{key:0})):(c(),m(h(E),{key:1}))])),_:1})])}}}),[["__scopeId","data-v-b698c316"]]),_e=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],ke=(()=>{if("undefined"==typeof document)return!1;const e=_e[0],t={};for(const a of _e){if((null==a?void 0:a[1])in document){for(const[l,n]of a.entries())t[e[l]]=n;return t}}return!1})(),xe={change:ke.fullscreenchange,error:ke.fullscreenerror};let Ce={request:(e=document.documentElement,t)=>new Promise(((a,l)=>{const n=()=>{Ce.off("change",n),a()};Ce.on("change",n);const r=e[ke.requestFullscreen](t);r instanceof Promise&&r.then(n).catch(l)})),exit:()=>new Promise(((e,t)=>{if(!Ce.isFullscreen)return void e();const a=()=>{Ce.off("change",a),e()};Ce.on("change",a);const l=document[ke.exitFullscreen]();l instanceof Promise&&l.then(a).catch(t)})),toggle:(e,t)=>Ce.isFullscreen?Ce.exit():Ce.request(e,t),onchange(e){Ce.on("change",e)},onerror(e){Ce.on("error",e)},on(e,t){const a=xe[e];a&&document.addEventListener(a,t,!1)},off(e,t){const a=xe[e];a&&document.removeEventListener(a,t,!1)},raw:ke};Object.defineProperties(Ce,{isFullscreen:{get:()=>Boolean(document[ke.fullscreenElement])},element:{enumerable:!0,get:()=>{var e;return null!=(e=document[ke.fullscreenElement])?e:void 0}},isEnabled:{enumerable:!0,get:()=>Boolean(document[ke.fullscreenEnabled])}}),ke||(Ce={isEnabled:!1});const Ee=Ce,Ve=g(r({__name:"index",props:{element:{type:String,default:"html"},openTips:{type:String,default:"全屏"},exitTips:{type:String,default:"退出全屏"}},setup(e){const t=e,a=l(t.openTips),n=l(!1),r=()=>{const e=document.querySelector(t.element)||void 0;Ee.isEnabled?Ee.toggle(e):S.warning("您的浏览器无法工作")},i=()=>{n.value=Ee.isFullscreen,a.value=Ee.isFullscreen?t.exitTips:t.openTips};return Ee.on("change",i),V((()=>{Ee.isEnabled&&Ee.off("change",i)})),(e,t)=>{const l=o("svg-icon"),i=o("el-tooltip");return c(),u("div",{onClick:r},[d(i,{effect:"dark",content:a.value,placement:"bottom"},{default:p((()=>[d(l,{name:n.value?"fullscreen-exit":"fullscreen"},null,8,["name"])])),_:1},8,["content"])])}}}),[["__scopeId","data-v-bb8093c0"]]),Se={class:"card-header"},Ae={class:"card-title"},Te={class:"card-time"},Ie={key:0,class:"card-avatar"},Pe=["src"],Fe={class:"card-body"},Me=g(r({__name:"NotifyList",props:{list:{type:Object,required:!0}},setup(e){const t=e;return(e,a)=>{const l=o("el-empty"),n=o("el-tag"),r=o("el-card");return 0===t.list.length?(c(),m(l,{key:0})):(c(!0),u(_,{key:1},y(t.list,((e,t)=>(c(),m(r,{key:t,shadow:"never",class:"card-container"},{header:p((()=>[A("div",Se,[A("div",null,[A("span",null,[A("span",Ae,k(e.title),1),e.extra?(c(),m(n,{key:0,type:e.status,effect:"plain",size:"small"},{default:p((()=>[T(k(e.extra),1)])),_:2},1032,["type"])):I("",!0)]),A("div",Te,k(e.datetime),1)]),e.avatar?(c(),u("div",Ie,[A("img",{src:e.avatar,width:"34"},null,8,Pe)])):I("",!0)])])),default:p((()=>{var t;return[A("div",Fe,k(null!=(t=e.description)?t:"No Data"),1)]})),_:2},1024)))),128))}}}),[["__scopeId","data-v-4dc45f67"]]),Re=[{avatar:"https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png",title:"V3 Admin Vite 上线啦",datetime:"半年前",description:"一个免费开源的中后台管理系统基础解决方案，基于 Vue3、TypeScript、Element Plus、Pinia 和 Vite 等主流技术"},{avatar:"https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png",title:"V3 Admin 上线啦",datetime:"一年前",description:"一个中后台管理系统基础解决方案，基于 Vue3、TypeScript、Element Plus 和 Pinia"}],ze=[{avatar:"https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",title:"来自楚门的世界",description:"如果再也不能见到你，祝你早安、午安和晚安",datetime:"1998-06-05"},{avatar:"https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",title:"来自大话西游",description:"如果非要在这份爱上加上一个期限，我希望是一万年",datetime:"1995-02-04"},{avatar:"https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",title:"来自龙猫",description:"心存善意，定能途遇天使",datetime:"1988-04-16"}],Oe=[{title:"任务名称",description:"这家伙很懒，什么都没留下",extra:"未开始",status:"info"},{title:"任务名称",description:"这家伙很懒，什么都没留下",extra:"进行中",status:""},{title:"任务名称",description:"这家伙很懒，什么都没留下",extra:"已超时",status:"danger"}],De={class:"notify"},Le={class:"notify-history"},Ne=g(r({__name:"index",setup(e){const t=s((()=>{let e=0;for(let t=0;t<n.value.length;t++)e+=n.value[t].list.length;return e})),a=l("通知"),n=l([{name:"通知",type:"primary",list:Re},{name:"消息",type:"danger",list:ze},{name:"待办",type:"warning",list:Oe}]),r=()=>{S.success(`跳转到${a.value}历史页面`)};return(e,l)=>{const i=o("el-icon"),s=o("el-tooltip"),f=o("el-badge"),v=o("el-scrollbar"),g=o("el-tab-pane"),b=o("el-tabs"),w=o("el-button"),x=o("el-popover");return c(),u("div",De,[d(x,{placement:"bottom",width:350,trigger:"click"},{reference:p((()=>[d(f,{value:h(t),max:99,hidden:0===h(t)},{default:p((()=>[d(s,{effect:"dark",content:"消息通知",placement:"bottom"},{default:p((()=>[d(i,{size:20},{default:p((()=>[d(h(P))])),_:1})])),_:1})])),_:1},8,["value","hidden"])])),default:p((()=>[d(b,{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=e=>a.value=e),class:"demo-tabs",stretch:""},{default:p((()=>[(c(!0),u(_,null,y(n.value,((e,t)=>(c(),m(g,{name:e.name,key:t},{label:p((()=>[T(k(e.name)+" ",1),d(f,{value:e.list.length,max:99,type:e.type},null,8,["value","type"])])),default:p((()=>[d(v,{height:"400px"},{default:p((()=>[d(Me,{list:e.list},null,8,["list"])])),_:2},1024)])),_:2},1032,["name"])))),128))])),_:1},8,["modelValue"]),A("div",Le,[d(w,{link:"",onClick:r},{default:p((()=>[T("查看"+k(a.value)+"历史",1)])),_:1})])])),_:1})])}}}),[["__scopeId","data-v-ea7495cd"]]),je={class:"navigation-bar"},qe={class:"right-menu"},He={class:"right-menu-avatar"},Ue={target:"_blank",href:"https://juejin.cn/post/7089377403717287972"},Be={target:"_blank",href:"https://github.com/un-pany/v3-admin-vite"},Xe={target:"_blank",href:"https://gitee.com/un-pany/v3-admin-vite"},$e=(e=>(R("data-v-ab7a6f93"),e=e(),z(),e))((()=>A("span",{style:{display:"block"}},"退出登录",-1))),We=g(r({__name:"index",setup(e){const t=b(),a=ae(),l=pe(),n=F(),r=s((()=>a.sidebar)),i=s((()=>l.showNotify)),f=s((()=>l.showThemeSwitch)),v=s((()=>l.showScreenfull)),g=()=>{a.toggleSidebar(!1)},w=()=>{n.logout(),t.push("/login")};return(e,t)=>{const a=o("el-avatar"),l=o("el-dropdown-item"),s=o("el-dropdown-menu"),b=o("el-dropdown");return c(),u("div",je,[d(ye,{"is-active":h(r).opened,class:"hamburger",onToggleClick:g},null,8,["is-active"]),d(we,{class:"breadcrumb"}),A("div",qe,[h(v)?(c(),m(Ve,{key:0,class:"right-menu-item"})):I("",!0),h(f)?(c(),m(ee,{key:1,class:"right-menu-item"})):I("",!0),h(i)?(c(),m(Ne,{key:2,class:"right-menu-item"})):I("",!0),d(b,{class:"right-menu-item"},{dropdown:p((()=>[d(s,null,{default:p((()=>[A("a",Ue,[d(l,null,{default:p((()=>[T("中文文档")])),_:1})]),A("a",Be,[d(l,null,{default:p((()=>[T("GitHub")])),_:1})]),A("a",Xe,[d(l,null,{default:p((()=>[T("Gitee")])),_:1})]),d(l,{divided:"",onClick:w},{default:p((()=>[$e])),_:1})])),_:1})])),default:p((()=>[A("div",He,[d(a,{icon:h(M),size:30},null,8,["icon"]),A("span",null,k(h(n).username),1)])])),_:1})])])}}}),[["__scopeId","data-v-ab7a6f93"]]),Ge=e=>(R("data-v-711d466d"),e=e(),z(),e),Ye={class:"drawer-container"},Je=Ge((()=>A("h3",{class:"drawer-title"},"系统布局配置",-1))),Ze={class:"drawer-item"},Ke=Ge((()=>A("span",null,"显示标签栏",-1))),Qe={class:"drawer-item"},et=Ge((()=>A("span",null,"显示侧边栏 Logo",-1))),tt={class:"drawer-item"},at=Ge((()=>A("span",null,"固定 Header",-1))),lt={class:"drawer-item"},nt=Ge((()=>A("span",null,"显示消息通知",-1))),rt={class:"drawer-item"},it=Ge((()=>A("span",null,"显示切换主题按钮",-1))),st={class:"drawer-item"},ot=Ge((()=>A("span",null,"显示全屏按钮",-1))),ct={class:"drawer-item"},ut=Ge((()=>A("span",null,"显示灰色模式",-1))),dt={class:"drawer-item"},pt=Ge((()=>A("span",null,"显示色弱模式",-1))),ft=g(r({__name:"index",setup(e){const t=pe();return(e,a)=>{const l=o("el-switch");return c(),u("div",Ye,[A("div",null,[Je,A("div",Ze,[Ke,d(l,{modelValue:h(t).showTagsView,"onUpdate:modelValue":a[0]||(a[0]=e=>h(t).showTagsView=e),class:"drawer-switch"},null,8,["modelValue"])]),A("div",Qe,[et,d(l,{modelValue:h(t).showSidebarLogo,"onUpdate:modelValue":a[1]||(a[1]=e=>h(t).showSidebarLogo=e),class:"drawer-switch"},null,8,["modelValue"])]),A("div",tt,[at,d(l,{modelValue:h(t).fixedHeader,"onUpdate:modelValue":a[2]||(a[2]=e=>h(t).fixedHeader=e),class:"drawer-switch"},null,8,["modelValue"])]),A("div",lt,[nt,d(l,{modelValue:h(t).showNotify,"onUpdate:modelValue":a[3]||(a[3]=e=>h(t).showNotify=e),class:"drawer-switch"},null,8,["modelValue"])]),A("div",rt,[it,d(l,{modelValue:h(t).showThemeSwitch,"onUpdate:modelValue":a[4]||(a[4]=e=>h(t).showThemeSwitch=e),class:"drawer-switch"},null,8,["modelValue"])]),A("div",st,[ot,d(l,{modelValue:h(t).showScreenfull,"onUpdate:modelValue":a[5]||(a[5]=e=>h(t).showScreenfull=e),class:"drawer-switch"},null,8,["modelValue"])]),A("div",ct,[ut,d(l,{modelValue:h(t).showGreyMode,"onUpdate:modelValue":a[6]||(a[6]=e=>h(t).showGreyMode=e),class:"drawer-switch"},null,8,["modelValue"])]),A("div",dt,[pt,d(l,{modelValue:h(t).showColorWeakness,"onUpdate:modelValue":a[7]||(a[7]=e=>h(t).showColorWeakness=e),class:"drawer-switch"},null,8,["modelValue"])])])])}}}),[["__scopeId","data-v-711d466d"]]),mt=e=>/^(https?:|mailto:|tel:)/.test(e),ht=["href"],vt=r({__name:"SidebarItemLink",props:{to:{type:String,required:!0}},setup(e){const t=e;return(e,a)=>{const l=o("router-link");return h(mt)(t.to)?(c(),u("a",{key:0,href:t.to,target:"_blank",rel:"noopener"},[O(e.$slots,"default")],8,ht)):(c(),m(l,{key:1,to:t.to},{default:p((()=>[O(e.$slots,"default")])),_:3},8,["to"]))}}});function gt(e){if("string"!=typeof e)throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}function bt(e,t){for(var a,l="",n=0,r=-1,i=0,s=0;s<=e.length;++s){if(s<e.length)a=e.charCodeAt(s);else{if(47===a)break;a=47}if(47===a){if(r===s-1||1===i);else if(r!==s-1&&2===i){if(l.length<2||2!==n||46!==l.charCodeAt(l.length-1)||46!==l.charCodeAt(l.length-2))if(l.length>2){var o=l.lastIndexOf("/");if(o!==l.length-1){-1===o?(l="",n=0):n=(l=l.slice(0,o)).length-1-l.lastIndexOf("/"),r=s,i=0;continue}}else if(2===l.length||1===l.length){l="",n=0,r=s,i=0;continue}t&&(l.length>0?l+="/..":l="..",n=2)}else l.length>0?l+="/"+e.slice(r+1,s):l=e.slice(r+1,s),n=s-r-1;r=s,i=0}else 46===a&&-1!==i?++i:i=-1}return l}var wt={resolve:function(){for(var e,t="",a=!1,l=arguments.length-1;l>=-1&&!a;l--){var n;l>=0?n=arguments[l]:(void 0===e&&(e=process.cwd()),n=e),gt(n),0!==n.length&&(t=n+"/"+t,a=47===n.charCodeAt(0))}return t=bt(t,!a),a?t.length>0?"/"+t:"/":t.length>0?t:"."},normalize:function(e){if(gt(e),0===e.length)return".";var t=47===e.charCodeAt(0),a=47===e.charCodeAt(e.length-1);return 0!==(e=bt(e,!t)).length||t||(e="."),e.length>0&&a&&(e+="/"),t?"/"+e:e},isAbsolute:function(e){return gt(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0===arguments.length)return".";for(var e,t=0;t<arguments.length;++t){var a=arguments[t];gt(a),a.length>0&&(void 0===e?e=a:e+="/"+a)}return void 0===e?".":wt.normalize(e)},relative:function(e,t){if(gt(e),gt(t),e===t)return"";if((e=wt.resolve(e))===(t=wt.resolve(t)))return"";for(var a=1;a<e.length&&47===e.charCodeAt(a);++a);for(var l=e.length,n=l-a,r=1;r<t.length&&47===t.charCodeAt(r);++r);for(var i=t.length-r,s=n<i?n:i,o=-1,c=0;c<=s;++c){if(c===s){if(i>s){if(47===t.charCodeAt(r+c))return t.slice(r+c+1);if(0===c)return t.slice(r+c)}else n>s&&(47===e.charCodeAt(a+c)?o=c:0===c&&(o=0));break}var u=e.charCodeAt(a+c);if(u!==t.charCodeAt(r+c))break;47===u&&(o=c)}var d="";for(c=a+o+1;c<=l;++c)c!==l&&47!==e.charCodeAt(c)||(0===d.length?d+="..":d+="/..");return d.length>0?d+t.slice(r+o):(r+=o,47===t.charCodeAt(r)&&++r,t.slice(r))},_makeLong:function(e){return e},dirname:function(e){if(gt(e),0===e.length)return".";for(var t=e.charCodeAt(0),a=47===t,l=-1,n=!0,r=e.length-1;r>=1;--r)if(47===(t=e.charCodeAt(r))){if(!n){l=r;break}}else n=!1;return-1===l?a?"/":".":a&&1===l?"//":e.slice(0,l)},basename:function(e,t){if(void 0!==t&&"string"!=typeof t)throw new TypeError('"ext" argument must be a string');gt(e);var a,l=0,n=-1,r=!0;if(void 0!==t&&t.length>0&&t.length<=e.length){if(t.length===e.length&&t===e)return"";var i=t.length-1,s=-1;for(a=e.length-1;a>=0;--a){var o=e.charCodeAt(a);if(47===o){if(!r){l=a+1;break}}else-1===s&&(r=!1,s=a+1),i>=0&&(o===t.charCodeAt(i)?-1==--i&&(n=a):(i=-1,n=s))}return l===n?n=s:-1===n&&(n=e.length),e.slice(l,n)}for(a=e.length-1;a>=0;--a)if(47===e.charCodeAt(a)){if(!r){l=a+1;break}}else-1===n&&(r=!1,n=a+1);return-1===n?"":e.slice(l,n)},extname:function(e){gt(e);for(var t=-1,a=0,l=-1,n=!0,r=0,i=e.length-1;i>=0;--i){var s=e.charCodeAt(i);if(47!==s)-1===l&&(n=!1,l=i+1),46===s?-1===t?t=i:1!==r&&(r=1):-1!==t&&(r=-1);else if(!n){a=i+1;break}}return-1===t||-1===l||0===r||1===r&&t===l-1&&t===a+1?"":e.slice(t,l)},format:function(e){if(null===e||"object"!=typeof e)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return function(e,t){var a=t.dir||t.root,l=t.base||(t.name||"")+(t.ext||"");return a?a===t.root?a+l:a+e+l:l}("/",e)},parse:function(e){gt(e);var t={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return t;var a,l=e.charCodeAt(0),n=47===l;n?(t.root="/",a=1):a=0;for(var r=-1,i=0,s=-1,o=!0,c=e.length-1,u=0;c>=a;--c)if(47!==(l=e.charCodeAt(c)))-1===s&&(o=!1,s=c+1),46===l?-1===r?r=c:1!==u&&(u=1):-1!==r&&(u=-1);else if(!o){i=c+1;break}return-1===r||-1===s||0===u||1===u&&r===s-1&&r===i+1?-1!==s&&(t.base=t.name=0===i&&n?e.slice(1,s):e.slice(i,s)):(0===i&&n?(t.name=e.slice(1,r),t.base=e.slice(1,s)):(t.name=e.slice(i,r),t.base=e.slice(i,s)),t.ext=e.slice(r,s)),i>0?t.dir=e.slice(0,i-1):n&&(t.dir="/"),t},sep:"/",delimiter:":",win32:null,posix:null};wt.posix=wt;var yt=wt;const _t={key:2},kt=g(r({__name:"SidebarItem",props:{item:{type:Object,required:!0},isCollapse:{type:Boolean,default:!1},isFirstLevel:{type:Boolean,default:!0},basePath:{type:String,default:""}},setup(e){const t=e,a=s((()=>t.item.meta&&t.item.meta.alwaysShow)),l=s((()=>{if(t.item.children){return t.item.children.filter((e=>!(e.meta&&e.meta.hidden))).length}return 0})),n=s((()=>{if(l.value>1)return null;if(t.item.children)for(const e of t.item.children)if(!e.meta||!e.meta.hidden)return e;return{...t.item,path:""}})),r=e=>mt(e)?e:mt(t.basePath)?t.basePath:yt.resolve(t.basePath,e);return(e,l)=>{var i;const s=o("svg-icon"),f=o("el-menu-item"),g=o("sidebar-item",!0),b=o("el-sub-menu");return(null==(i=t.item.meta)?void 0:i.hidden)?I("",!0):(c(),u("div",{key:0,class:L({"simple-mode":t.isCollapse,"first-level":t.isFirstLevel})},[h(a)||!h(n)||h(n).children?(c(),m(b,{key:1,index:r(t.item.path),"popper-append-to-body":""},{title:p((()=>[t.item.meta&&t.item.meta.svgIcon?(c(),m(s,{key:0,name:t.item.meta.svgIcon},null,8,["name"])):t.item.meta&&t.item.meta.elIcon?(c(),m(v(t.item.meta.elIcon),{key:1,class:"el-icon"})):I("",!0),t.item.meta&&t.item.meta.title?(c(),u("span",_t,k(t.item.meta.title),1)):I("",!0)])),default:p((()=>[t.item.children?(c(!0),u(_,{key:0},y(t.item.children,(e=>(c(),m(g,{key:e.path,item:e,"is-collapse":t.isCollapse,"is-first-level":!1,"base-path":r(e.path)},null,8,["item","is-collapse","base-path"])))),128)):I("",!0)])),_:1},8,["index"])):(c(),u(_,{key:0},[h(n).meta?(c(),m(vt,{key:0,to:r(h(n).path)},{default:p((()=>[d(f,{index:r(h(n).path)},D({default:p((()=>[h(n).meta.svgIcon?(c(),m(s,{key:0,name:h(n).meta.svgIcon},null,8,["name"])):h(n).meta.elIcon?(c(),m(v(h(n).meta.elIcon),{key:1,class:"el-icon"})):I("",!0)])),_:2},[h(n).meta.title?{name:"title",fn:p((()=>[T(k(h(n).meta.title),1)])),key:"0"}:void 0]),1032,["index"])])),_:1},8,["to"])):I("",!0)],64))],2))}}}),[["__scopeId","data-v-2f788fbd"]]),xt=e=>(R("data-v-7415e5ef"),e=e(),z(),e),Ct=xt((()=>A("img",{src:"/v3-admin-vite/static/logo.cc70e06e.png",class:"sidebar-logo"},null,-1))),Et=xt((()=>A("img",{src:"/v3-admin-vite/static/logo-text-1.b6b0364d.png",class:"sidebar-logo-text"},null,-1))),Vt=g(r({__name:"SidebarLogo",props:{collapse:{type:Boolean,default:!0}},setup(e){const t=e;return(e,a)=>{const l=o("router-link");return c(),u("div",{class:L(["sidebar-logo-container",{collapse:t.collapse}])},[d(f,{name:"sidebar-logo-fade"},{default:p((()=>[t.collapse?(c(),m(l,{key:"collapse",to:"/"},{default:p((()=>[Ct])),_:1})):(c(),m(l,{key:"expand",to:"/"},{default:p((()=>[Et])),_:1}))])),_:1})],2)}}}),[["__scopeId","data-v-7415e5ef"]]),St=e=>{let t="";try{t=getComputedStyle(document.documentElement).getPropertyValue(e)}catch(a){console.error(a)}return t},At=g(r({__name:"index",setup(e){const t=St("--v3-sidebar-menu-bg-color"),a=St("--v3-sidebar-menu-text-color"),l=St("--v3-sidebar-menu-active-text-color"),n=i(),r=ae(),f=N(),v=pe(),{showSidebarLogo:g}=j(v),b=s((()=>{const{meta:e,path:t}=n;return(null==e?void 0:e.activeMenu)?e.activeMenu:t})),w=s((()=>!r.sidebar.opened));return(e,n)=>{const r=o("el-menu"),i=o("el-scrollbar");return c(),u("div",{class:L({"has-logo":h(g)})},[h(g)?(c(),m(Vt,{key:0,collapse:h(w)},null,8,["collapse"])):I("",!0),d(i,{"wrap-class":"scrollbar-wrapper"},{default:p((()=>[d(r,{"default-active":h(b),collapse:h(w),"background-color":h(t),"text-color":h(a),"active-text-color":h(l),"unique-opened":!0,"collapse-transition":!1,mode:"vertical"},{default:p((()=>[(c(!0),u(_,null,y(h(f).routes,(e=>(c(),m(kt,{key:e.path,item:e,"base-path":e.path,"is-collapse":h(w)},null,8,["item","base-path","is-collapse"])))),128))])),_:1},8,["default-active","collapse","background-color","text-color","active-text-color"])])),_:1})],2)}}}),[["__scopeId","data-v-add62d2b"]]),Tt=e("tags-view",(()=>{const e=l([]);return{visitedViews:e,addVisitedView:t=>{e.value.some(((a,l)=>{if(a.path===t.path)return a.fullPath!==t.fullPath&&(e.value[l]=Object.assign({},t)),!0}))||e.value.push(Object.assign({},t))},delVisitedView:t=>{for(const[a,l]of e.value.entries())if(l.path===t.path){e.value.splice(a,1);break}},delOthersVisitedViews:t=>{e.value=e.value.filter((e=>{var a;return(null==(a=e.meta)?void 0:a.affix)||e.path===t.path}))},delAllVisitedViews:()=>{const t=e.value.filter((e=>{var t;return null==(t=e.meta)?void 0:t.affix}));e.value=t}}})),It={class:"scroll-container"},Pt=g(r({__name:"ScrollPane",setup(e){const t=pe(),a=l(),n=l();let r=0;const i=({scrollLeft:e})=>{r=e},f=e=>{let t=0;const l=n.value.clientWidth,i=a.value.wrapRef.clientWidth,s=l-i-r;i>l||(t="left"===e?Math.max(0,r-200):Math.min(r+200,r+s),a.value.setScrollLeft(t))},v=s((()=>t.showScreenfull));return(e,t)=>{const l=o("el-icon");return c(),u("div",It,[d(l,{class:"arrow left",onClick:t[0]||(t[0]=e=>f("left"))},{default:p((()=>[d(h(q))])),_:1}),d(h(H),{ref_key:"scrollbarRef",ref:a,onScroll:i},{default:p((()=>[A("div",{ref_key:"scrollbarContentRef",ref:n,class:"scrollbar-content"},[O(e.$slots,"default",{},void 0,!0)],512)])),_:3},512),d(l,{class:"arrow right",onClick:t[1]||(t[1]=e=>f("right"))},{default:p((()=>[d(h(U))])),_:1}),h(v)?(c(),m(Ve,{key:0,element:".app-main",openTips:"内容区全屏",class:"screenfull"})):I("",!0)])}}}),[["__scopeId","data-v-2c6f672b"]]),Ft={class:"tags-view-container"},Mt=g(r({__name:"index",setup(e){const t=Y(),a=b(),n=i(),r=Tt(),s=N(),f=l(!1),v=l(0),g=l(0),C=l({});let E=[];const V=e=>e.path===n.path,S=e=>{var t;return null==(t=e.meta)?void 0:t.affix},P=(e,t="/")=>{let a=[];return e.forEach((e=>{var l;if(null==(l=e.meta)?void 0:l.affix){const l=yt.resolve(t,e.path);a.push({fullPath:l,path:l,name:e.name,meta:{...e.meta}})}if(e.children){const t=P(e.children,e.path);t.length>=1&&(a=a.concat(t))}})),a},F=()=>{n.name&&r.addVisitedView(n)},M=e=>{r.delVisitedView(e),V(e)&&z(r.visitedViews,e)},R=()=>{C.value.fullPath!==n.path&&void 0!==C.value.fullPath&&a.push(C.value.fullPath),r.delOthersVisitedViews(C.value)},z=(e,t)=>{const l=e.slice(-1)[0];void 0!==l&&void 0!==l.fullPath?a.push(l.fullPath):"Dashboard"===t.name?a.push({path:"/redirect"+t.path,query:t.query}):a.push("/")},O=()=>{f.value=!1};return w(n,(()=>{F()}),{deep:!0}),w(f,(e=>{e?document.body.addEventListener("click",O):document.body.removeEventListener("click",O)})),B((()=>{(()=>{E=P(s.routes);for(const e of E)e.name&&r.addVisitedView(e)})(),F()})),(e,l)=>{const i=o("el-icon"),s=o("router-link");return c(),u("div",Ft,[d(Pt,{class:"tags-view-wrapper"},{default:p((()=>[(c(!0),u(_,null,y(h(r).visitedViews,(e=>(c(),m(s,{key:e.path,class:L([V(e)?"active":"","tags-view-item"]),to:{path:e.path,query:e.query},onMouseup:x((t=>S(e)?"":M(e)),["middle"]),onContextmenu:x((a=>((e,a)=>{const l=t.proxy.$el.getBoundingClientRect().left,n=t.proxy.$el.offsetWidth-105,r=a.clientX-l+15;g.value=r>n?n:r,v.value=a.clientY,f.value=!0,C.value=e})(e,a)),["prevent"])},{default:p((()=>{var t;return[T(k(null==(t=e.meta)?void 0:t.title)+" ",1),S(e)?I("",!0):(c(),m(i,{key:0,size:12,onClick:x((t=>M(e)),["prevent","stop"])},{default:p((()=>[d(h(G))])),_:2},1032,["onClick"]))]})),_:2},1032,["class","to","onMouseup","onContextmenu"])))),128))])),_:1}),X(A("ul",{style:W({left:g.value+"px",top:v.value+"px"}),class:"contextmenu"},[A("li",{onClick:l[0]||(l[0]=e=>{return t=C.value,void a.replace({path:"/redirect"+t.path,query:t.query});var t})},"刷新"),S(C.value)?I("",!0):(c(),u("li",{key:0,onClick:l[1]||(l[1]=e=>M(C.value))},"关闭")),A("li",{onClick:R},"关闭其它"),A("li",{onClick:l[2]||(l[2]=e=>{return t=C.value,r.delAllVisitedViews(),void(E.some((e=>e.path===n.path))||z(r.visitedViews,t));var t})},"关闭所有")],4),[[$,f.value]])])}}}),[["__scopeId","data-v-2f847f82"]]),Rt=g(r({__name:"index",props:{buttonTop:{type:Number,default:350}},setup(e){const t=e;J((e=>({"8c501f28":a})));const a=t.buttonTop+"px",n=l(!1);return(e,t)=>{const a=o("el-icon"),l=o("el-drawer");return c(),u(_,null,[A("div",{class:"handle-button",onClick:t[0]||(t[0]=e=>n.value=!0)},[d(a,{size:24},{default:p((()=>[d(h(Z))])),_:1})]),d(l,{modelValue:n.value,"onUpdate:modelValue":t[1]||(t[1]=e=>n.value=e),size:"300px","with-header":!1},{default:p((()=>[O(e.$slots,"default",{},void 0,!0)])),_:3},8,["modelValue"])],64)}}}),[["__scopeId","data-v-038e37ce"]]),zt=g(r({__name:"index",setup(e){const t=ae(),a=pe();(()=>{const e=i(),t=ae(),a=()=>document.body.getBoundingClientRect().width-1<992,l=()=>{if(!document.hidden){const e=a();t.toggleDevice(e?te.Mobile:te.Desktop),e&&t.closeSidebar(!0)}};w((()=>e.name),(()=>{t.device===te.Mobile&&t.sidebar.opened&&t.closeSidebar(!1)})),K((()=>{window.addEventListener("resize",l)})),B((()=>{a()&&(t.toggleDevice(te.Mobile),t.closeSidebar(!0))})),Q((()=>{window.removeEventListener("resize",l)}))})();const l=s((()=>({hideSidebar:!t.sidebar.opened,openSidebar:t.sidebar.opened,withoutAnimation:t.sidebar.withoutAnimation,mobile:t.device===te.Mobile,showGreyMode:f.value,showColorWeakness:v.value}))),n=s((()=>a.showSettings)),r=s((()=>a.showTagsView)),o=s((()=>a.fixedHeader)),f=s((()=>a.showGreyMode)),v=s((()=>a.showColorWeakness)),g=()=>{t.closeSidebar(!1)};return(e,t)=>(c(),u("div",{class:L([h(l),"app-wrapper"])},[h(l).mobile&&h(l).openSidebar?(c(),u("div",{key:0,class:"drawer-bg",onClick:g})):I("",!0),d(h(At),{class:"sidebar-container"}),A("div",{class:L([{hasTagsView:h(r)},"main-container"])},[A("div",{class:L({"fixed-header":h(o)})},[d(h(We)),h(r)?(c(),m(h(Mt),{key:0})):I("",!0)],2),d(h(me)),h(n)?(c(),m(h(Rt),{key:0},{default:p((()=>[d(h(ft))])),_:1})):I("",!0)],2)],2))}}),[["__scopeId","data-v-7b51b9d8"]]);export{zt as default};
