import{d as s,k as a,r as t,o as e,c as o,g as n,w as r,A as c}from"./index-7ab1f0d0.js";import{_ as p}from"./SwitchRoles-bf2892fc.js";const i={class:"app-container"},l=c(" 当前页面只有 admin 权限可见 "),d=s({setup(s){const c=a(),d=()=>{c.push({path:"/401"}).catch((s=>{console.warn(s)}))};return(s,a)=>{const c=t("el-tag");return e(),o("div",i,[n(c,{type:"success",size:"large",style:{"margin-bottom":"15px"}},{default:r((()=>[l])),_:1}),n(p,{onChange:d})])}}});export{d as default};