import{a,z as e,v as s,j as l,g as o,o as t,b as d,A as n,t as u,u as c,e as i,w as r,G as m,H as v,_ as p}from"./index.a2a8c0e2.js";const b={class:"switch-roles"},_=(a=>(m("data-v-572bc9d0"),a=a(),v(),a))((()=>n("span",null,"切换权限：",-1))),g=p(a({__name:"SwitchRoles",emits:["change"],setup(a,{emit:m}){const v=e(),p=s(v.roles[0]);return l(p,(async a=>{await v.changeRoles(a),m("change")})),(a,e)=>{const s=o("el-radio-button"),l=o("el-radio-group");return t(),d("div",null,[n("div",null,"你的权限："+u(c(v).roles),1),n("div",b,[_,i(l,{modelValue:p.value,"onUpdate:modelValue":e[0]||(e[0]=a=>p.value=a)},{default:r((()=>[i(s,{label:"editor"}),i(s,{label:"admin"})])),_:1},8,["modelValue"])])])}}}),[["__scopeId","data-v-572bc9d0"]]);export{g as S};
