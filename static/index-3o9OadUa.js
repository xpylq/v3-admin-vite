import{aA as je,Z as Ye,r as D,b as De,E as Fe,d as be,z as Ne,e as V,l as L,m as u,p as T,T as B,u as v,ag as g,q as x,U as d,O as _,W as ze,M as k,aB as Qe,Q as re,R,aC as fe,aD as pe,F as U,a7 as Q,a2 as se,H as ce,a9 as et,S as J,I as H,aE as j,aF as Be,w as ie,aG as tt,aH as We,c as Oe,J as He,aI as ye,aJ as we,s as nt,a8 as ae,n as ot,aK as at,P as ve,V as me}from"./vue-oj1OEJet.js";import{g as st,s as Me,u as _e,_ as P,a as qe,b as K,r as lt,c as Se,d as rt}from"./index-RnVwDe_x.js";import{u as ct}from"./useWatermark-j-5MA1sa.js";import{h as it,j as ut,g as dt,k as ft,b as ue,l as pt,n as vt,o as Ue,u as mt,r as _t,p as ht,q as gt,s as bt,t as yt}from"./element-kafCWjek.js";import{_ as wt}from"./index.vue_vue_type_script_setup_true_lang-85RsyXks.js";import"./vxe-2yBdWm9K.js";var Y=(n=>(n[n.Mobile=0]="Mobile",n[n.Desktop=1]="Desktop",n))(Y||{});const St="opened",Xe="closed";function kt(n){n?Me(St):Me(Xe)}const ne=je("app",()=>{const n=Ye({opened:st()!==Xe,withoutAnimation:!1}),e=D(Y.Desktop);return De(()=>n.opened,o=>kt(o)),{device:e,sidebar:n,toggleSidebar:o=>{n.opened=!n.opened,n.withoutAnimation=o},closeSidebar:o=>{n.opened=!1,n.withoutAnimation=o},toggleDevice:o=>{e.value=o}}}),xt=992,Ct=()=>{const n=ne(),{listenerRouteChange:e}=_e(),t=()=>document.body.getBoundingClientRect().width-1<xt,r=()=>{if(!document.hidden){const a=t();n.toggleDevice(a?Y.Mobile:Y.Desktop),a&&n.closeSidebar(!0)}};e(()=>{n.device===Y.Mobile&&n.sidebar.opened&&n.closeSidebar(!1)}),Fe(()=>{window.addEventListener("resize",r)}),be(()=>{t()&&(n.toggleDevice(Y.Mobile),n.closeSidebar(!0))}),Ne(()=>{window.removeEventListener("resize",r)})},Ke=ne(),Tt=V(()=>Ke.device===Y.Mobile),Et=V(()=>Ke.device===Y.Desktop);function oe(){return{isMobile:Tt,isDesktop:Et}}const $t={class:"layout-footer"},Vt=L({__name:"index",setup(n){const e="V3 Admin Vite";return(t,r)=>(u(),T("footer",$t,"MIT © 2021-PRESENT "+B(v(e)),1))}}),Mt=P(Vt,[["__scopeId","data-v-034a5242"]]),At={class:"app-main"},It={class:"app-scrollbar"},Rt=L({__name:"AppMain",setup(n){const e=qe(),t=K();return(r,a)=>{const o=g("router-view"),l=g("el-backtop");return u(),T("section",At,[x("div",It,[d(o,null,{default:_(({Component:s,route:c})=>[d(ze,{name:"el-fade-in",mode:"out-in"},{default:_(()=>[(u(),k(Qe,{include:v(e).cachedViews},[(u(),k(re(s),{key:c.path,class:"app-container-grow"}))],1032,["include"]))]),_:2},1024)]),_:1}),v(t).showFooter?(u(),k(Mt,{key:0})):R("",!0)]),d(l),d(l,{target:".app-scrollbar"})])}}}),ke=P(Rt,[["__scopeId","data-v-d87ee2cd"]]),Lt=L({__name:"index",props:{isActive:{type:Boolean,default:!1}},emits:["toggleClick"],setup(n,{emit:e}){const t=n,r=e,a=()=>{r("toggleClick")};return(o,l)=>{const s=g("el-icon");return u(),T("div",{onClick:a},[d(s,{size:20,class:"icon"},{default:_(()=>[t.isActive?(u(),k(v(it),{key:0})):(u(),k(v(ut),{key:1}))]),_:1})])}}}),Pt=P(Lt,[["__scopeId","data-v-252d9bf8"]]);function Dt(n){for(var e=[],t=0;t<n.length;){var r=n[t];if(r==="*"||r==="+"||r==="?"){e.push({type:"MODIFIER",index:t,value:n[t++]});continue}if(r==="\\"){e.push({type:"ESCAPED_CHAR",index:t++,value:n[t++]});continue}if(r==="{"){e.push({type:"OPEN",index:t,value:n[t++]});continue}if(r==="}"){e.push({type:"CLOSE",index:t,value:n[t++]});continue}if(r===":"){for(var a="",o=t+1;o<n.length;){var l=n.charCodeAt(o);if(l>=48&&l<=57||l>=65&&l<=90||l>=97&&l<=122||l===95){a+=n[o++];continue}break}if(!a)throw new TypeError("Missing parameter name at ".concat(t));e.push({type:"NAME",index:t,value:a}),t=o;continue}if(r==="("){var s=1,c="",o=t+1;if(n[o]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(o));for(;o<n.length;){if(n[o]==="\\"){c+=n[o++]+n[o++];continue}if(n[o]===")"){if(s--,s===0){o++;break}}else if(n[o]==="("&&(s++,n[o+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(o));c+=n[o++]}if(s)throw new TypeError("Unbalanced pattern at ".concat(t));if(!c)throw new TypeError("Missing pattern at ".concat(t));e.push({type:"PATTERN",index:t,value:c}),t=o;continue}e.push({type:"CHAR",index:t,value:n[t++]})}return e.push({type:"END",index:t,value:""}),e}function Ft(n,e){e===void 0&&(e={});for(var t=Dt(n),r=e.prefixes,a=r===void 0?"./":r,o="[^".concat(Bt(e.delimiter||"/#?"),"]+?"),l=[],s=0,c=0,f="",p=function(S){if(c<t.length&&t[c].type===S)return t[c++].value},i=function(S){var E=p(S);if(E!==void 0)return E;var F=t[c],b=F.type,M=F.index;throw new TypeError("Unexpected ".concat(b," at ").concat(M,", expected ").concat(S))},y=function(){for(var S="",E;E=p("CHAR")||p("ESCAPED_CHAR");)S+=E;return S};c<t.length;){var m=p("CHAR"),h=p("NAME"),w=p("PATTERN");if(h||w){var C=m||"";a.indexOf(C)===-1&&(f+=C,C=""),f&&(l.push(f),f=""),l.push({name:h||s++,prefix:C,suffix:"",pattern:w||o,modifier:p("MODIFIER")||""});continue}var I=m||p("ESCAPED_CHAR");if(I){f+=I;continue}f&&(l.push(f),f="");var W=p("OPEN");if(W){var C=y(),z=p("NAME")||"",O=p("PATTERN")||"",A=y();i("CLOSE"),l.push({name:z||(O?s++:""),pattern:z&&!O?o:O,prefix:C,suffix:A,modifier:p("MODIFIER")||""});continue}i("END")}return l}function Nt(n,e){return zt(Ft(n,e),e)}function zt(n,e){e===void 0&&(e={});var t=Wt(e),r=e.encode,a=r===void 0?function(c){return c}:r,o=e.validate,l=o===void 0?!0:o,s=n.map(function(c){if(typeof c=="object")return new RegExp("^(?:".concat(c.pattern,")$"),t)});return function(c){for(var f="",p=0;p<n.length;p++){var i=n[p];if(typeof i=="string"){f+=i;continue}var y=c?c[i.name]:void 0,m=i.modifier==="?"||i.modifier==="*",h=i.modifier==="*"||i.modifier==="+";if(Array.isArray(y)){if(!h)throw new TypeError('Expected "'.concat(i.name,'" to not repeat, but got an array'));if(y.length===0){if(m)continue;throw new TypeError('Expected "'.concat(i.name,'" to not be empty'))}for(var w=0;w<y.length;w++){var C=a(y[w],i);if(l&&!s[p].test(C))throw new TypeError('Expected all "'.concat(i.name,'" to match "').concat(i.pattern,'", but got "').concat(C,'"'));f+=i.prefix+C+i.suffix}continue}if(typeof y=="string"||typeof y=="number"){var C=a(String(y),i);if(l&&!s[p].test(C))throw new TypeError('Expected "'.concat(i.name,'" to match "').concat(i.pattern,'", but got "').concat(C,'"'));f+=i.prefix+C+i.suffix;continue}if(!m){var I=h?"an array":"a string";throw new TypeError('Expected "'.concat(i.name,'" to be ').concat(I))}}return f}}function Bt(n){return n.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function Wt(n){return n&&n.sensitive?"":"i"}const Ot={key:0,class:"no-redirect"},Ht=["onClick"],qt=L({__name:"index",setup(n){const e=fe(),t=pe(),{listenerRouteChange:r}=_e(),a=D([]),o=()=>{a.value=e.matched.filter(c=>{var f,p;return((f=c.meta)==null?void 0:f.title)&&((p=c.meta)==null?void 0:p.breadcrumb)!==!1})},l=c=>Nt(c)(e.params),s=c=>{const{redirect:f,path:p}=c;if(f){t.push(f);return}t.push(l(p))};return r(c=>{c.path.startsWith("/redirect/")||o()},!0),(c,f)=>{const p=g("el-breadcrumb-item"),i=g("el-breadcrumb");return u(),k(i,{class:"app-breadcrumb"},{default:_(()=>[(u(!0),T(U,null,Q(a.value,(y,m)=>(u(),k(p,{key:y.path},{default:_(()=>[y.redirect==="noRedirect"||m===a.value.length-1?(u(),T("span",Ot,B(y.meta.title),1)):(u(),T("a",{key:1,onClick:se(h=>s(y),["prevent"])},B(y.meta.title),9,Ht))]),_:2},1024))),128))]),_:1})}}}),Ut=P(qt,[["__scopeId","data-v-2eef2d12"]]),de=n=>/^(https?:|mailto:|tel:)/.test(n),Xt=["href"],Kt=L({__name:"SidebarItemLink",props:{to:{}},setup(n){const e=n;return(t,r)=>{const a=g("router-link");return v(de)(e.to)?(u(),T("a",{key:0,href:e.to,target:"_blank",rel:"noopener"},[ce(t.$slots,"default")],8,Xt)):(u(),k(a,{key:1,to:e.to},{default:_(()=>[ce(t.$slots,"default")]),_:3},8,["to"]))}}});function G(n){if(typeof n!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(n))}function Ae(n,e){for(var t="",r=0,a=-1,o=0,l,s=0;s<=n.length;++s){if(s<n.length)l=n.charCodeAt(s);else{if(l===47)break;l=47}if(l===47){if(!(a===s-1||o===1))if(a!==s-1&&o===2){if(t.length<2||r!==2||t.charCodeAt(t.length-1)!==46||t.charCodeAt(t.length-2)!==46){if(t.length>2){var c=t.lastIndexOf("/");if(c!==t.length-1){c===-1?(t="",r=0):(t=t.slice(0,c),r=t.length-1-t.lastIndexOf("/")),a=s,o=0;continue}}else if(t.length===2||t.length===1){t="",r=0,a=s,o=0;continue}}e&&(t.length>0?t+="/..":t="..",r=2)}else t.length>0?t+="/"+n.slice(a+1,s):t=n.slice(a+1,s),r=s-a-1;a=s,o=0}else l===46&&o!==-1?++o:o=-1}return t}function Gt(n,e){var t=e.dir||e.root,r=e.base||(e.name||"")+(e.ext||"");return t?t===e.root?t+r:t+n+r:r}var te={resolve:function(){for(var e="",t=!1,r,a=arguments.length-1;a>=-1&&!t;a--){var o;a>=0?o=arguments[a]:(r===void 0&&(r=process.cwd()),o=r),G(o),o.length!==0&&(e=o+"/"+e,t=o.charCodeAt(0)===47)}return e=Ae(e,!t),t?e.length>0?"/"+e:"/":e.length>0?e:"."},normalize:function(e){if(G(e),e.length===0)return".";var t=e.charCodeAt(0)===47,r=e.charCodeAt(e.length-1)===47;return e=Ae(e,!t),e.length===0&&!t&&(e="."),e.length>0&&r&&(e+="/"),t?"/"+e:e},isAbsolute:function(e){return G(e),e.length>0&&e.charCodeAt(0)===47},join:function(){if(arguments.length===0)return".";for(var e,t=0;t<arguments.length;++t){var r=arguments[t];G(r),r.length>0&&(e===void 0?e=r:e+="/"+r)}return e===void 0?".":te.normalize(e)},relative:function(e,t){if(G(e),G(t),e===t||(e=te.resolve(e),t=te.resolve(t),e===t))return"";for(var r=1;r<e.length&&e.charCodeAt(r)===47;++r);for(var a=e.length,o=a-r,l=1;l<t.length&&t.charCodeAt(l)===47;++l);for(var s=t.length,c=s-l,f=o<c?o:c,p=-1,i=0;i<=f;++i){if(i===f){if(c>f){if(t.charCodeAt(l+i)===47)return t.slice(l+i+1);if(i===0)return t.slice(l+i)}else o>f&&(e.charCodeAt(r+i)===47?p=i:i===0&&(p=0));break}var y=e.charCodeAt(r+i),m=t.charCodeAt(l+i);if(y!==m)break;y===47&&(p=i)}var h="";for(i=r+p+1;i<=a;++i)(i===a||e.charCodeAt(i)===47)&&(h.length===0?h+="..":h+="/..");return h.length>0?h+t.slice(l+p):(l+=p,t.charCodeAt(l)===47&&++l,t.slice(l))},_makeLong:function(e){return e},dirname:function(e){if(G(e),e.length===0)return".";for(var t=e.charCodeAt(0),r=t===47,a=-1,o=!0,l=e.length-1;l>=1;--l)if(t=e.charCodeAt(l),t===47){if(!o){a=l;break}}else o=!1;return a===-1?r?"/":".":r&&a===1?"//":e.slice(0,a)},basename:function(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');G(e);var r=0,a=-1,o=!0,l;if(t!==void 0&&t.length>0&&t.length<=e.length){if(t.length===e.length&&t===e)return"";var s=t.length-1,c=-1;for(l=e.length-1;l>=0;--l){var f=e.charCodeAt(l);if(f===47){if(!o){r=l+1;break}}else c===-1&&(o=!1,c=l+1),s>=0&&(f===t.charCodeAt(s)?--s===-1&&(a=l):(s=-1,a=c))}return r===a?a=c:a===-1&&(a=e.length),e.slice(r,a)}else{for(l=e.length-1;l>=0;--l)if(e.charCodeAt(l)===47){if(!o){r=l+1;break}}else a===-1&&(o=!1,a=l+1);return a===-1?"":e.slice(r,a)}},extname:function(e){G(e);for(var t=-1,r=0,a=-1,o=!0,l=0,s=e.length-1;s>=0;--s){var c=e.charCodeAt(s);if(c===47){if(!o){r=s+1;break}continue}a===-1&&(o=!1,a=s+1),c===46?t===-1?t=s:l!==1&&(l=1):t!==-1&&(l=-1)}return t===-1||a===-1||l===0||l===1&&t===a-1&&t===r+1?"":e.slice(t,a)},format:function(e){if(e===null||typeof e!="object")throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return Gt("/",e)},parse:function(e){G(e);var t={root:"",dir:"",base:"",ext:"",name:""};if(e.length===0)return t;var r=e.charCodeAt(0),a=r===47,o;a?(t.root="/",o=1):o=0;for(var l=-1,s=0,c=-1,f=!0,p=e.length-1,i=0;p>=o;--p){if(r=e.charCodeAt(p),r===47){if(!f){s=p+1;break}continue}c===-1&&(f=!1,c=p+1),r===46?l===-1?l=p:i!==1&&(i=1):l!==-1&&(i=-1)}return l===-1||c===-1||i===0||i===1&&l===c-1&&l===s+1?c!==-1&&(s===0&&a?t.base=t.name=e.slice(1,c):t.base=t.name=e.slice(s,c)):(s===0&&a?(t.name=e.slice(1,l),t.base=e.slice(1,c)):(t.name=e.slice(s,l),t.base=e.slice(s,c)),t.ext=e.slice(l,c)),s>0?t.dir=e.slice(0,s-1):a&&(t.dir="/"),t},sep:"/",delimiter:":",win32:null,posix:null};te.posix=te;var Jt=te;const Ge=dt(Jt),Zt={key:2},jt=L({__name:"SidebarItem",props:{item:{},isCollapse:{type:Boolean,default:!1},isTop:{type:Boolean,default:!1},isFirstLevel:{type:Boolean,default:!0},basePath:{default:""}},setup(n){const e=n,t=V(()=>{var s;return(s=e.item.meta)==null?void 0:s.alwaysShow}),r=V(()=>{var s;return((s=e.item.children)==null?void 0:s.filter(c=>{var f;return!((f=c.meta)!=null&&f.hidden)}))??[]}),a=V(()=>r.value.length),o=V(()=>{const s=a.value;switch(!0){case s>1:return null;case s===1:return r.value[0];default:return{...e.item,path:""}}}),l=s=>{switch(!0){case de(s):return s;case de(e.basePath):return e.basePath;default:return Ge.resolve(e.basePath,s)}};return(s,c)=>{const f=g("SvgIcon"),p=g("el-menu-item"),i=g("SidebarItem",!0),y=g("el-sub-menu");return u(),T("div",{class:H({"simple-mode":e.isCollapse&&!s.isTop,"first-level":e.isFirstLevel})},[!t.value&&o.value&&!o.value.children?(u(),T(U,{key:0},[o.value.meta?(u(),k(Kt,{key:0,to:l(o.value.path)},{default:_(()=>[d(p,{index:l(o.value.path)},et({default:_(()=>[o.value.meta.svgIcon?(u(),k(f,{key:0,name:o.value.meta.svgIcon},null,8,["name"])):o.value.meta.elIcon?(u(),k(re(o.value.meta.elIcon),{key:1,class:"el-icon"})):R("",!0)]),_:2},[o.value.meta.title?{name:"title",fn:_(()=>[J(B(o.value.meta.title),1)]),key:"0"}:void 0]),1032,["index"])]),_:1},8,["to"])):R("",!0)],64)):(u(),k(y,{key:1,index:l(e.item.path),teleported:""},{title:_(()=>{var m,h,w;return[(m=e.item.meta)!=null&&m.svgIcon?(u(),k(f,{key:0,name:e.item.meta.svgIcon},null,8,["name"])):(h=e.item.meta)!=null&&h.elIcon?(u(),k(re(e.item.meta.elIcon),{key:1,class:"el-icon"})):R("",!0),(w=e.item.meta)!=null&&w.title?(u(),T("span",Zt,B(e.item.meta.title),1)):R("",!0)]}),default:_(()=>[e.item.children?(u(!0),T(U,{key:0},Q(r.value,m=>(u(),k(i,{key:m.path,item:m,"is-collapse":e.isCollapse,"is-first-level":!1,"base-path":l(m.path)},null,8,["item","is-collapse","base-path"]))),128)):R("",!0)]),_:1},8,["index"]))],2)}}}),Yt=P(jt,[["__scopeId","data-v-6ae03ba2"]]),Qt="/v3-admin-vite/static/logo-WN1ETR0H.png",en="/v3-admin-vite/static/logo-text-1-h7hJu_cc.png",tn="/v3-admin-vite/static/logo-text-2-lXsH_ESZ.png",nn=["src"],on=["src"],an=L({__name:"index",props:{collapse:{type:Boolean,default:!0}},setup(n){const e=n,t=K(),{layoutMode:r}=j(t);return(a,o)=>{const l=g("router-link");return u(),T("div",{class:H(["layout-logo-container",{collapse:e.collapse,"layout-mode-top":v(r)==="top"}])},[d(ze,{name:"layout-logo-fade"},{default:_(()=>[e.collapse?(u(),k(l,{key:"collapse",to:"/"},{default:_(()=>[x("img",{src:v(Qt),class:"layout-logo"},null,8,nn)]),_:1})):(u(),k(l,{key:"expand",to:"/"},{default:_(()=>[x("img",{src:v(r)!=="left"?v(tn):v(en),class:"layout-logo-text"},null,8,on)]),_:1}))]),_:1})],2)}}}),xe=P(an,[["__scopeId","data-v-8474c76e"]]),le=n=>{let e="";try{e=getComputedStyle(document.documentElement).getPropertyValue(n)}catch(t){console.error(t)}return e},Ie=(n,e)=>{try{document.documentElement.style.setProperty(n,e)}catch(t){console.error(t)}},sn=()=>{lt(),location.reload()},ln=L({__name:"index",setup(n){Be(F=>({"6293e0e9":S.value,"4fda05da":E.value,"71ce3afa":O.value,"55d8d12a":A.value,"3a64c77e":z.value}));const e=le("--v3-sidebar-menu-bg-color"),t=le("--v3-sidebar-menu-text-color"),r=le("--v3-sidebar-menu-active-text-color"),{isMobile:a}=oe(),o=fe(),l=ne(),s=Se(),c=K(),{layoutMode:f,showLogo:p}=j(c),i=V(()=>{const{meta:{activeMenu:F},path:b}=o;return F||b}),y=V(()=>s.routes.filter(F=>{var b;return!((b=F.meta)!=null&&b.hidden)})),m=V(()=>!l.sidebar.opened),h=V(()=>f.value==="left"),w=V(()=>f.value==="top"),C=V(()=>h.value&&p.value),I=V(()=>h.value?e:void 0),W=V(()=>h.value?t:void 0),z=V(()=>h.value?r:void 0),O=V(()=>f.value!=="top"?"var(--v3-sidebar-menu-item-height)":"var(--v3-navigationbar-height)"),A=V(()=>f.value!=="top"?"var(--v3-sidebar-menu-hover-bg-color)":"transparent"),S=V(()=>f.value!=="top"?"2px":"0px"),E=V(()=>f.value==="top"?"none":"block");return(F,b)=>{const M=g("el-menu"),N=g("el-scrollbar");return u(),T("div",{class:H({"has-logo":C.value})},[C.value?(u(),k(xe,{key:0,collapse:m.value},null,8,["collapse"])):R("",!0),d(N,{"wrap-class":"scrollbar-wrapper"},{default:_(()=>[d(M,{"default-active":i.value,collapse:m.value&&!w.value,"background-color":I.value,"text-color":W.value,"active-text-color":z.value,"unique-opened":!0,"collapse-transition":!1,mode:w.value&&!v(a)?"horizontal":"vertical"},{default:_(()=>[(u(!0),T(U,null,Q(y.value,$=>(u(),k(Yt,{key:$.path,item:$,"base-path":$.path,"is-collapse":m.value,"is-top":w.value},null,8,["item","base-path","is-collapse","is-top"]))),128))]),_:1},8,["default-active","collapse","background-color","text-color","active-text-color","mode"])]),_:1})],2)}}}),Ce=P(ln,[["__scopeId","data-v-467e249c"]]),rn={class:"card-header"},cn={class:"card-title"},un={class:"card-time"},dn={key:0,class:"card-avatar"},fn=["src"],pn={class:"card-body"},vn=L({__name:"NotifyList",props:{list:{}},setup(n){const e=n;return(t,r)=>{const a=g("el-empty"),o=g("el-tag"),l=g("el-card");return e.list.length===0?(u(),k(a,{key:0})):(u(!0),T(U,{key:1},Q(e.list,(s,c)=>(u(),k(l,{key:c,shadow:"never",class:"card-container"},{header:_(()=>[x("div",rn,[x("div",null,[x("span",null,[x("span",cn,B(s.title),1),s.extra?(u(),k(o,{key:0,type:s.status,effect:"plain",size:"small"},{default:_(()=>[J(B(s.extra),1)]),_:2},1032,["type"])):R("",!0)]),x("div",un,B(s.datetime),1)]),s.avatar?(u(),T("div",dn,[x("img",{src:s.avatar,width:"34"},null,8,fn)])):R("",!0)])]),default:_(()=>[x("div",pn,B(s.description??"No Data"),1)]),_:2},1024))),128))}}}),mn=P(vn,[["__scopeId","data-v-137655f9"]]),_n=[{avatar:"https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png",title:"V3 Admin Vite 上线啦",datetime:"一年前",description:"一个免费开源的中后台管理系统基础解决方案，基于 Vue3、TypeScript、Element Plus、Pinia 和 Vite 等主流技术"},{avatar:"https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png",title:"V3 Admin 上线啦",datetime:"两年前",description:"一个中后台管理系统基础解决方案，基于 Vue3、TypeScript、Element Plus 和 Pinia"}],hn=[{avatar:"https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",title:"来自楚门的世界",description:"如果再也不能见到你，祝你早安、午安和晚安",datetime:"1998-06-05"},{avatar:"https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",title:"来自大话西游",description:"如果非要在这份爱上加上一个期限，我希望是一万年",datetime:"1995-02-04"},{avatar:"https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",title:"来自龙猫",description:"心存善意，定能途遇天使",datetime:"1988-04-16"}],gn=[{title:"任务名称",description:"这家伙很懒，什么都没留下",extra:"未开始",status:"info"},{title:"任务名称",description:"这家伙很懒，什么都没留下",extra:"进行中",status:"primary"},{title:"任务名称",description:"这家伙很懒，什么都没留下",extra:"已超时",status:"danger"}],bn={class:"notify"},yn={class:"notify-history"},Re=99,wn=350,Sn=L({__name:"index",setup(n){const e=V(()=>r.value.reduce((o,l)=>o+l.list.length,0)),t=D("通知"),r=D([{name:"通知",type:"primary",list:_n},{name:"消息",type:"danger",list:hn},{name:"待办",type:"warning",list:gn}]),a=()=>{ue.success(`跳转到${t.value}历史页面`)};return(o,l)=>{const s=g("el-icon"),c=g("el-tooltip"),f=g("el-badge"),p=g("el-scrollbar"),i=g("el-tab-pane"),y=g("el-tabs"),m=g("el-button"),h=g("el-popover");return u(),T("div",bn,[d(h,{placement:"bottom",width:wn,trigger:"click"},{reference:_(()=>[d(f,{value:e.value,max:Re,hidden:e.value===0},{default:_(()=>[d(c,{effect:"dark",content:"消息通知",placement:"bottom"},{default:_(()=>[d(s,{size:20},{default:_(()=>[d(v(ft))]),_:1})]),_:1})]),_:1},8,["value","hidden"])]),default:_(()=>[d(y,{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=w=>t.value=w),class:"demo-tabs",stretch:""},{default:_(()=>[(u(!0),T(U,null,Q(r.value,(w,C)=>(u(),k(i,{name:w.name,key:C},{label:_(()=>[J(B(w.name)+" ",1),d(f,{value:w.list.length,max:Re,type:w.type},null,8,["value","type"])]),default:_(()=>[d(p,{height:"400px"},{default:_(()=>[d(mn,{list:w.list},null,8,["list"])]),_:2},1024)]),_:2},1032,["name"]))),128))]),_:1},8,["modelValue"]),x("div",yn,[d(m,{link:"",onClick:a},{default:_(()=>[J("查看"+B(t.value)+"历史",1)]),_:1})])]),_:1})])}}}),kn=P(Sn,[["__scopeId","data-v-50089150"]]),Le=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],Z=(()=>{if(typeof document>"u")return!1;const n=Le[0],e={};for(const t of Le)if((t==null?void 0:t[1])in document){for(const[a,o]of t.entries())e[n[a]]=o;return e}return!1})(),Pe={change:Z.fullscreenchange,error:Z.fullscreenerror};let q={request(n=document.documentElement,e){return new Promise((t,r)=>{const a=()=>{q.off("change",a),t()};q.on("change",a);const o=n[Z.requestFullscreen](e);o instanceof Promise&&o.then(a).catch(r)})},exit(){return new Promise((n,e)=>{if(!q.isFullscreen){n();return}const t=()=>{q.off("change",t),n()};q.on("change",t);const r=document[Z.exitFullscreen]();r instanceof Promise&&r.then(t).catch(e)})},toggle(n,e){return q.isFullscreen?q.exit():q.request(n,e)},onchange(n){q.on("change",n)},onerror(n){q.on("error",n)},on(n,e){const t=Pe[n];t&&document.addEventListener(t,e,!1)},off(n,e){const t=Pe[n];t&&document.removeEventListener(t,e,!1)},raw:Z};Object.defineProperties(q,{isFullscreen:{get:()=>!!document[Z.fullscreenElement]},element:{enumerable:!0,get:()=>document[Z.fullscreenElement]??void 0},isEnabled:{enumerable:!0,get:()=>!!document[Z.fullscreenEnabled]}});Z||(q={isEnabled:!1});const ee=q,xn=L({__name:"index",props:{element:{default:"html"},openTips:{default:"全屏"},exitTips:{default:"退出全屏"},content:{type:Boolean,default:!1}},setup(n){const e=n,t=D(!1),r=V(()=>t.value?e.exitTips:e.openTips),a=V(()=>t.value?"fullscreen-exit":"fullscreen"),o=()=>{const i=document.querySelector(e.element)||void 0;ee.isEnabled?ee.toggle(i):ue.warning("您的浏览器无法工作")},l=()=>{t.value=ee.isFullscreen};ie(i=>{ee.on("change",l),i(()=>{ee.isEnabled&&ee.off("change",l)})});const s=D(!1),c=V(()=>s.value?"内容区复原":"内容区放大"),f=V(()=>s.value?"fullscreen-exit":"fullscreen"),p=()=>{document.body.className=s.value?"":"content-large",s.value=!s.value};return(i,y)=>{const m=g("SvgIcon"),h=g("el-tooltip"),w=g("el-dropdown-item"),C=g("el-dropdown-menu"),I=g("el-dropdown");return u(),T("div",null,[i.content?(u(),k(I,{key:1},{dropdown:_(()=>[d(C,null,{default:_(()=>[d(w,{onClick:p},{default:_(()=>[J(B(c.value),1)]),_:1}),d(w,{onClick:o,disabled:t.value},{default:_(()=>[J("内容区全屏")]),_:1},8,["disabled"])]),_:1})]),default:_(()=>[d(m,{name:f.value},null,8,["name"])]),_:1})):(u(),k(h,{key:0,effect:"dark",content:r.value,placement:"bottom"},{default:_(()=>[d(m,{name:a.value,onClick:o},null,8,["name"])]),_:1},8,["content"]))])}}}),Je=P(xn,[["__scopeId","data-v-9e7c36e4"]]),Cn=["onMouseenter"],Tn={class:"result-item-title"},En=L({__name:"SearchResult",props:tt({list:{},isPressUpOrDown:{type:Boolean}},{modelValue:{required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(n,{expose:e}){const t=We(n,"modelValue"),r=n,a=Oe(),o=D(0),l=p=>{const i=p.name===t.value;return{background:i?"var(--el-color-primary)":"",color:i?"#fff":""}},s=p=>{r.isPressUpOrDown||(t.value=p.name)},c=()=>{o.value=Number((window.innerHeight*.4).toFixed(1))},f=p=>{var h;const i=(h=a==null?void 0:a.proxy)==null?void 0:h.$refs[`resultItemRef${p}`];if(!i)return 0;const m=i[0].offsetTop+128;return m>o.value?m-o.value:0};return Fe(()=>{window.addEventListener("resize",c)}),be(()=>{c()}),Ne(()=>{window.removeEventListener("resize",c)}),e({getScrollTop:f}),(p,i)=>{const y=g("SvgIcon");return u(),T("div",null,[(u(!0),T(U,null,Q(p.list,(m,h)=>{var w,C,I;return u(),T("div",{key:h,ref_for:!0,ref:`resultItemRef${h}`,class:"result-item",style:He(l(m)),onMouseenter:W=>s(m)},[(w=m.meta)!=null&&w.svgIcon?(u(),k(y,{key:0,name:m.meta.svgIcon},null,8,["name"])):(C=m.meta)!=null&&C.elIcon?(u(),k(re(m.meta.elIcon),{key:1,class:"el-icon"})):R("",!0),x("span",Tn,B((I=m.meta)==null?void 0:I.title),1),t.value&&t.value===m.name?(u(),k(y,{key:2,name:"keyboard-enter"})):R("",!0)],44,Cn)}),128))])}}}),$n=P(En,[["__scopeId","data-v-aeacf5ae"]]),Te=n=>(ye("data-v-8dce46e8"),n=n(),we(),n),Vn={class:"search-footer"},Mn={class:"search-footer-item"},An=Te(()=>x("span",null,"确认",-1)),In={class:"search-footer-item"},Rn=Te(()=>x("span",null,"切换",-1)),Ln={class:"search-footer-item"},Pn=Te(()=>x("span",null,"关闭",-1)),Dn={class:"search-footer-total"},Fn=L({__name:"SearchFooter",props:{total:{}},setup(n){const e=n,{isMobile:t}=oe();return(r,a)=>{const o=g("SvgIcon");return u(),T("div",Vn,[v(t)?R("",!0):(u(),T(U,{key:0},[x("span",Mn,[d(o,{name:"keyboard-enter"}),An]),x("span",In,[d(o,{name:"keyboard-up"}),d(o,{name:"keyboard-down"}),Rn]),x("span",Ln,[d(o,{name:"keyboard-esc"}),Pn])],64)),x("span",Dn,"共 "+B(e.total)+" 项",1)])}}}),Nn=P(Fn,[["__scopeId","data-v-8dce46e8"]]),zn=x("p",null,"搜索结果",-1),Bn=L({__name:"SearchModal",props:{modelValue:{type:Boolean,required:!0},modelModifiers:{}},emits:["update:modelValue"],setup(n){const e=We(n,"modelValue"),t=pe(),{isMobile:r}=oe(),a=D(null),o=D(null),l=D(null),s=D(""),c=nt([]),f=D(void 0),p=D(!1),i=V(()=>r.value?"80vw":"40vw"),y=V(()=>pt(Se().routes)),m=vt(()=>{var E;const A=h(y.value);c.value=A.filter(F=>{var b,M;return s.value?(M=(b=F.meta)==null?void 0:b.title)==null?void 0:M.toLocaleLowerCase().includes(s.value.toLocaleLowerCase().trim()):!1});const S=(E=c.value)==null?void 0:E.length;f.value=S>0?c.value[0].name:void 0},500),h=(A,S=[])=>(A.forEach(E=>{S.push(E),E.children&&h(E.children,S)}),S),w=()=>{e.value=!1,setTimeout(()=>{s.value="",c.value=[]},200)},C=A=>{var E;if(!l.value)return;const S=l.value.getScrollTop(A);(E=o.value)==null||E.setScrollTop(S)},I=()=>{p.value=!0;const{length:A}=c.value;if(A===0)return;const S=c.value.findIndex(E=>E.name===f.value);if(S===0){const E=c.value[A-1].name;f.value===E&&A>1?(f.value=c.value[A-2].name,C(A-2)):(f.value=E,C(A-1))}else f.value=c.value[S-1].name,C(S-1)},W=()=>{p.value=!0;const{length:A}=c.value;if(A===0)return;const S=c.value.map(E=>E.name).lastIndexOf(f.value);if(S===A-1){const E=c.value[0].name;f.value===E&&A>1?(f.value=c.value[1].name,C(1)):(f.value=E,C(0))}else f.value=c.value[S+1].name,C(S+1)},z=()=>{var F;const{length:A}=c.value;if(A===0)return;const S=f.value,E=(F=c.value.find(b=>b.name===S))==null?void 0:F.path;if(E&&de(E)){window.open(E,"_blank","noopener, noreferrer");return}if(!S){ue.warning("无法通过搜索进入该菜单，请为对应的路由设置唯一的 Name");return}try{t.push({name:S})}catch{ue.error("该菜单有必填的动态参数，无法通过搜索进入");return}w()},O=()=>{p.value=!1};return(A,S)=>{const E=g("SvgIcon"),F=g("el-input"),b=g("el-empty"),M=g("el-dialog");return u(),k(M,{modelValue:e.value,"onUpdate:modelValue":S[2]||(S[2]=N=>e.value=N),onOpened:S[3]||(S[3]=N=>{var $;return($=a.value)==null?void 0:$.focus()}),onClosed:S[4]||(S[4]=N=>{var $;return($=a.value)==null?void 0:$.blur()}),onKeydown:[ae(I,["up"]),ae(W,["down"]),ae(z,["enter"])],onKeyup:ae(O,["up","down"]),"before-close":w,width:i.value,top:"5vh",class:"search-modal__private","append-to-body":""},{footer:_(()=>[d(Nn,{total:c.value.length},null,8,["total"])]),default:_(()=>[d(F,{ref_key:"inputRef",ref:a,modelValue:s.value,"onUpdate:modelValue":S[0]||(S[0]=N=>s.value=N),onInput:v(m),placeholder:"搜索菜单",size:"large",clearable:""},{prefix:_(()=>[d(E,{name:"search"})]),_:1},8,["modelValue","onInput"]),c.value.length===0?(u(),k(b,{key:0,description:"暂无搜索结果","image-size":100})):(u(),T(U,{key:1},[zn,d(v(Ue),{ref_key:"scrollbarRef",ref:o,"max-height":"40vh",always:""},{default:_(()=>[d($n,{ref_key:"searchResultRef",ref:l,modelValue:f.value,"onUpdate:modelValue":S[1]||(S[1]=N=>f.value=N),list:c.value,isPressUpOrDown:p.value,onClick:z},null,8,["modelValue","list","isPressUpOrDown"])]),_:1},512)],64))]),_:1},8,["modelValue","width"])}}}),Wn=L({__name:"index",setup(n){const e=D(!1),t=()=>{e.value=!0};return(r,a)=>{const o=g("SvgIcon"),l=g("el-tooltip");return u(),T("div",null,[d(l,{effect:"dark",content:"搜索菜单",placement:"bottom"},{default:_(()=>[d(o,{name:"search",onClick:t})]),_:1}),d(Bn,{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=s=>e.value=s)},null,8,["modelValue"])])}}}),On=P(Wn,[["__scopeId","data-v-dc5accb4"]]),Hn=n=>(ye("data-v-9f7c0cf3"),n=n(),we(),n),qn={class:"navigation-bar"},Un={class:"right-menu"},Xn={class:"right-menu-avatar"},Kn={target:"_blank",href:"https://github.com/un-pany/v3-admin-vite"},Gn={target:"_blank",href:"https://gitee.com/un-pany/v3-admin-vite"},Jn=Hn(()=>x("span",{style:{display:"block"}},"退出登录",-1)),Zn=L({__name:"index",setup(n){const{isMobile:e}=oe(),t=pe(),r=ne(),a=rt(),o=K(),{layoutMode:l,showNotify:s,showThemeSwitch:c,showScreenfull:f,showSearchMenu:p}=j(o),i=V(()=>l.value==="top"),y=()=>{r.toggleSidebar(!1)},m=()=>{a.logout(),t.push("/login")};return(h,w)=>{const C=g("el-avatar"),I=g("el-dropdown-item"),W=g("el-dropdown-menu"),z=g("el-dropdown");return u(),T("div",qn,[!i.value||v(e)?(u(),k(Pt,{key:0,"is-active":v(r).sidebar.opened,class:"hamburger",onToggleClick:y},null,8,["is-active"])):R("",!0),!i.value||v(e)?(u(),k(Ut,{key:1,class:"breadcrumb"})):R("",!0),i.value&&!v(e)?(u(),k(Ce,{key:2,class:"sidebar"})):R("",!0),x("div",Un,[v(p)?(u(),k(On,{key:0,class:"right-menu-item"})):R("",!0),v(f)?(u(),k(Je,{key:1,class:"right-menu-item"})):R("",!0),v(c)?(u(),k(wt,{key:2,class:"right-menu-item"})):R("",!0),v(s)?(u(),k(kn,{key:3,class:"right-menu-item"})):R("",!0),d(z,{class:"right-menu-item"},{dropdown:_(()=>[d(W,null,{default:_(()=>[x("a",Kn,[d(I,null,{default:_(()=>[J("GitHub")]),_:1})]),x("a",Gn,[d(I,null,{default:_(()=>[J("Gitee")]),_:1})]),d(I,{divided:"",onClick:m},{default:_(()=>[Jn]),_:1})]),_:1})]),default:_(()=>[x("div",Xn,[d(C,{icon:v(mt),size:30},null,8,["icon"]),x("span",null,B(v(a).username),1)])]),_:1})])])}}}),Ee=P(Zn,[["__scopeId","data-v-9f7c0cf3"]]),jn={class:"select-layout-mode"},Yn=L({__name:"SelectLayoutMode",setup(n){const e=K(),{layoutMode:t}=j(e),r=V(()=>t.value==="left"),a=V(()=>t.value==="top"),o=V(()=>t.value==="left-top");return(l,s)=>{const c=g("el-aside"),f=g("el-header"),p=g("el-main"),i=g("el-container"),y=g("el-tooltip");return u(),T("div",jn,[d(y,{content:"左侧模式"},{default:_(()=>[d(i,{class:H(["layout-mode left",{active:r.value}]),onClick:s[0]||(s[0]=m=>t.value="left")},{default:_(()=>[d(c),d(i,null,{default:_(()=>[d(f),d(p)]),_:1})]),_:1},8,["class"])]),_:1}),d(y,{content:"顶部模式"},{default:_(()=>[d(i,{class:H(["layout-mode top",{active:a.value}]),onClick:s[1]||(s[1]=m=>t.value="top")},{default:_(()=>[d(f),d(p)]),_:1},8,["class"])]),_:1}),d(y,{content:"混合模式"},{default:_(()=>[d(i,{class:H(["layout-mode left-top",{active:o.value}]),onClick:s[2]||(s[2]=m=>t.value="left-top")},{default:_(()=>[d(f),d(i,null,{default:_(()=>[d(c),d(p)]),_:1})]),_:1},8,["class"])]),_:1})])}}}),Qn=P(Yn,[["__scopeId","data-v-012d4392"]]),Ze=n=>(ye("data-v-317305d5"),n=n(),we(),n),eo={class:"setting-container"},to=Ze(()=>x("h4",null,"布局配置",-1)),no=Ze(()=>x("h4",null,"功能配置",-1)),oo={class:"setting-name"},ao=L({__name:"index",setup(n){const e=K(),{layoutMode:t,showTagsView:r,showLogo:a,fixedHeader:o,showFooter:l,showNotify:s,showThemeSwitch:c,showScreenfull:f,showSearchMenu:p,cacheTagsView:i,showWatermark:y,showGreyMode:m,showColorWeakness:h}=j(e),w={显示标签栏:r,"显示 Logo":a,"固定 Header":o,"显示页脚 Footer":l,显示消息通知:s,显示切换主题按钮:c,显示全屏按钮:f,显示搜索按钮:p,是否缓存标签栏:i,开启系统水印:y,显示灰色模式:m,显示色弱模式:h};return ie(()=>{t.value!=="left"&&(o.value=!0)}),(C,I)=>{const W=g("el-divider"),z=g("el-switch"),O=g("el-button");return u(),T("div",eo,[to,d(Qn),d(W),no,(u(),T(U,null,Q(w,(A,S,E)=>x("div",{class:"setting-item",key:E},[x("span",oo,B(S),1),d(z,{modelValue:A.value,"onUpdate:modelValue":F=>A.value=F,disabled:v(t)!=="left"&&S==="固定 Header"},null,8,["modelValue","onUpdate:modelValue","disabled"])])),64)),d(O,{type:"danger",icon:v(_t),onClick:v(sn)},{default:_(()=>[J("重 置")]),_:1},8,["icon","onClick"])])}}}),so=P(ao,[["__scopeId","data-v-317305d5"]]),lo={class:"scroll-container"},ro=200,co=L({__name:"ScrollPane",props:{tagRefs:{}},setup(n){const e=n,t=fe(),r=K(),{listenerRouteChange:a}=_e(),o=D(),l=D();let s=0;const c=({scrollLeft:m})=>{s=m},f=({deltaY:m})=>{/^-/.test(m.toString())?i("left"):i("right")},p=()=>{const m=l.value.clientWidth,h=o.value.wrapRef.clientWidth,w=m-h-s;return{scrollbarContentRefWidth:m,scrollbarRefWidth:h,lastDistance:w}},i=(m,h=ro)=>{let w=0;const{scrollbarContentRefWidth:C,scrollbarRefWidth:I,lastDistance:W}=p();I>C||(m==="left"?w=Math.max(0,s-h):w=Math.min(s+h,s+W),o.value.setScrollLeft(w))},y=()=>{const m=e.tagRefs;for(let h=0;h<m.length;h++)if(t.path===m[h].$props.to.path){const w=m[h].$el,C=w.offsetWidth,I=w.offsetLeft,{scrollbarRefWidth:W}=p();if(I<s){const O=s-I;i("left",O);return}const z=W+s-C;if(I>z){const O=I-z;i("right",O);return}}};return a(()=>{ot(y)}),(m,h)=>{const w=g("el-icon");return u(),T("div",lo,[d(w,{class:"arrow left",onClick:h[0]||(h[0]=C=>i("left"))},{default:_(()=>[d(v(ht))]),_:1}),d(v(Ue),{ref_key:"scrollbarRef",ref:o,onWheelPassive:f,onScroll:c},{default:_(()=>[x("div",{ref_key:"scrollbarContentRef",ref:l,class:"scrollbar-content"},[ce(m.$slots,"default",{},void 0,!0)],512)]),_:3},512),d(w,{class:"arrow right",onClick:h[1]||(h[1]=C=>i("right"))},{default:_(()=>[d(v(gt))]),_:1}),v(r).showScreenfull?(u(),k(Je,{key:0,element:".app-main",content:!0,class:"screenfull"})):R("",!0)])}}}),io=P(co,[["__scopeId","data-v-519b3baa"]]),uo={class:"tags-view-container"},fo=L({__name:"index",setup(n){const e=Oe(),t=pe(),r=fe(),a=qe(),o=Se(),{listenerRouteChange:l}=_e(),s=D([]),c=D(!1),f=D(0),p=D(0),i=D({});let y=[];const m=b=>b.path===r.path,h=b=>{var M;return(M=b.meta)==null?void 0:M.affix},w=(b,M="/")=>{const N=[];return b.forEach($=>{if(h($)){const X=Ge.resolve(M,$.path);N.push({fullPath:X,path:X,name:$.name,meta:{...$.meta}})}if($.children){const X=w($.children,$.path);N.push(...X)}}),N},C=()=>{y=w(o.routes);for(const b of y)b.name&&a.addVisitedView(b)},I=b=>{b.name&&(a.addVisitedView(b),a.addCachedView(b))},W=b=>{a.delCachedView(b),t.replace({path:"/redirect"+b.path,query:b.query})},z=b=>{a.delVisitedView(b),a.delCachedView(b),m(b)&&S(a.visitedViews,b)},O=()=>{const b=i.value.fullPath;b!==r.path&&b!==void 0&&t.push(b),a.delOthersVisitedViews(i.value),a.delOthersCachedViews(i.value)},A=b=>{a.delAllVisitedViews(),a.delAllCachedViews(),!y.some(M=>M.path===r.path)&&S(a.visitedViews,b)},S=(b,M)=>{const N=b.slice(-1)[0],$=N==null?void 0:N.fullPath;$!==void 0?t.push($):M.name==="Dashboard"?t.push({path:"/redirect"+M.path,query:M.query}):t.push("/")},E=(b,M)=>{const $=e.proxy.$el.getBoundingClientRect().left,he=e.proxy.$el.offsetWidth-105,Ve=M.clientX-$+15;p.value=Ve>he?he:Ve,f.value=M.clientY,c.value=!0,i.value=b},F=()=>{c.value=!1};return De(c,b=>{b?document.body.addEventListener("click",F):document.body.removeEventListener("click",F)}),be(()=>{C(),l(async b=>{I(b)},!0)}),(b,M)=>{const N=g("el-icon");return u(),T("div",uo,[d(io,{class:"tags-view-wrapper","tag-refs":s.value},{default:_(()=>[(u(!0),T(U,null,Q(v(a).visitedViews,$=>(u(),k(v(at),{ref_for:!0,ref_key:"tagRefs",ref:s,key:$.path,class:H([{active:m($)},"tags-view-item"]),to:{path:$.path,query:$.query},onMouseup:se(X=>!h($)&&z($),["middle"]),onContextmenu:se(X=>E($,X),["prevent"])},{default:_(()=>{var X;return[J(B((X=$.meta)==null?void 0:X.title)+" ",1),h($)?R("",!0):(u(),k(N,{key:0,size:12,onClick:se(he=>z($),["prevent","stop"])},{default:_(()=>[d(v(bt))]),_:2},1032,["onClick"]))]}),_:2},1032,["class","to","onMouseup","onContextmenu"]))),128))]),_:1},8,["tag-refs"]),ve(x("ul",{class:"contextmenu",style:He({left:p.value+"px",top:f.value+"px"})},[x("li",{onClick:M[0]||(M[0]=$=>W(i.value))},"刷新"),h(i.value)?R("",!0):(u(),T("li",{key:0,onClick:M[1]||(M[1]=$=>z(i.value))},"关闭")),x("li",{onClick:O},"关闭其它"),x("li",{onClick:M[2]||(M[2]=$=>A(i.value))},"关闭所有")],4),[[me,c.value]])])}}}),$e=P(fo,[["__scopeId","data-v-3bc82890"]]),po=L({__name:"index",props:{buttonTop:{default:350}},setup(n){Be(a=>({eee8c778:t}));const t=n.buttonTop+"px",r=D(!1);return(a,o)=>{const l=g("el-icon"),s=g("el-drawer");return u(),T(U,null,[x("div",{class:"handle-button",onClick:o[0]||(o[0]=c=>r.value=!0)},[d(l,{size:24},{default:_(()=>[d(v(yt))]),_:1})]),d(s,{modelValue:r.value,"onUpdate:modelValue":o[1]||(o[1]=c=>r.value=c),size:"300px","with-header":!1},{default:_(()=>[ce(a.$slots,"default",{},void 0,!0)]),_:3},8,["modelValue"])],64)}}}),vo=P(po,[["__scopeId","data-v-ec8bae57"]]),mo=L({__name:"LeftMode",setup(n){const{isMobile:e}=oe(),t=ne(),r=K(),{showTagsView:a,fixedHeader:o}=j(r),l=V(()=>({hideSidebar:!t.sidebar.opened,openSidebar:t.sidebar.opened,withoutAnimation:t.sidebar.withoutAnimation,mobile:e.value})),s=()=>{t.closeSidebar(!1)};return(c,f)=>(u(),T("div",{class:H([l.value,"app-wrapper"])},[l.value.mobile&&l.value.openSidebar?(u(),T("div",{key:0,class:"drawer-bg",onClick:s})):R("",!0),d(v(Ce),{class:"sidebar-container"}),x("div",{class:H([{hasTagsView:v(a)},"main-container"])},[x("div",{class:H([{"fixed-header":v(o)},"layout-header"])},[d(v(Ee)),ve(d(v($e),null,null,512),[[me,v(a)]])],2),d(v(ke),{class:"app-main"})],2)],2))}}),_o=P(mo,[["__scopeId","data-v-0f6725ea"]]),ho={class:"app-wrapper"},go={class:"fixed-header layout-header"},bo={class:"content"},yo=L({__name:"TopMode",setup(n){const e=K(),{showTagsView:t,showLogo:r}=j(e);return(a,o)=>(u(),T("div",ho,[x("div",go,[x("div",bo,[v(r)?(u(),k(v(xe),{key:0,collapse:!1,class:"logo"})):R("",!0),d(v(Ee),{class:"navigation-bar"})]),ve(d(v($e),null,null,512),[[me,v(t)]])]),x("div",{class:H([{hasTagsView:v(t)},"main-container"])},[d(v(ke),{class:"app-main"})],2)]))}}),wo=P(yo,[["__scopeId","data-v-2c80335d"]]),So={class:"fixed-header layout-header"},ko={class:"content"},xo=L({__name:"LeftTopMode",setup(n){const e=ne(),t=K(),{showTagsView:r,showLogo:a}=j(t),o=V(()=>({hideSidebar:!e.sidebar.opened}));return(l,s)=>(u(),T("div",{class:H([o.value,"app-wrapper"])},[x("div",So,[v(a)?(u(),k(v(xe),{key:0,collapse:!1,class:"logo"})):R("",!0),x("div",ko,[d(v(Ee)),ve(d(v($e),null,null,512),[[me,v(r)]])])]),x("div",{class:H([{hasTagsView:v(r)},"main-container"])},[d(v(Ce),{class:"sidebar-container"}),d(v(ke),{class:"app-main"})],2)],2))}}),Co=P(xo,[["__scopeId","data-v-24f2539e"]]),ge="--v3-tagsview-height",To=L({__name:"index",setup(n){Ct();const{setWatermark:e,clearWatermark:t}=ct(),{isMobile:r}=oe(),a=K(),{showSettings:o,layoutMode:l,showTagsView:s,showWatermark:c,showGreyMode:f,showColorWeakness:p}=j(a),i=V(()=>({showGreyMode:f.value,showColorWeakness:p.value})),y=le(ge);return ie(()=>{s.value?Ie(ge,y):Ie(ge,"0px")}),ie(()=>{c.value?e("V3 Admin Vite"):t()}),(m,h)=>(u(),T("div",{class:H(i.value)},[v(l)==="left"||v(r)?(u(),k(_o,{key:0})):v(l)==="top"?(u(),k(wo,{key:1})):v(l)==="left-top"?(u(),k(Co,{key:2})):R("",!0),v(o)?(u(),k(v(vo),{key:3},{default:_(()=>[d(v(so))]),_:1})):R("",!0)],2))}}),Ro=P(To,[["__scopeId","data-v-641dd2eb"]]);export{Ro as default};
