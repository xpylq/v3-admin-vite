import{g as e,d as t}from"./table.7cd260bc.js";import{h as a,b as r,a as l,r as o,al as n,aj as s,E as i,f as d,w as u,am as c,e as m,o as p,z as f}from"./index.84e69f38.js";const g={default:({row:e,column:t})=>{const r=e[t.field];return[a("span",{class:`el-tag el-tag--${"admin"===r?"":"warning"} el-tag--plain`},[r])]}},v={default:({row:e,column:t})=>{let r="danger",l="禁用";return e[t.field]&&(r="success",l="启用"),[a("span",{class:`el-tag el-tag--${r} el-tag--plain`},[l])]}},h={class:"app-container"},y=r({__name:"index",setup(r){const y=l(),b=o({loading:!0,autoResize:!0,pagerConfig:{align:"right"},formConfig:{items:[{field:"username",itemRender:{name:"$input",props:{placeholder:"用户名",clearable:!0}}},{field:"phone",itemRender:{name:"$input",props:{placeholder:"手机号",clearable:!0}}},{itemRender:{name:"$buttons",children:[{props:{type:"submit",content:"查询",status:"primary"}},{props:{type:"reset",content:"重置"}}]}}]},toolbarConfig:{refresh:!0,custom:!0,slots:{buttons:"toolbar-btns"}},customConfig:{checkMethod:({column:e})=>!["username"].includes(e.field)},columns:[{type:"checkbox",width:"50px"},{field:"username",title:"用户名"},{field:"roles",title:"角色",slots:g},{field:"phone",title:"手机号"},{field:"email",title:"邮箱"},{field:"status",title:"状态",slots:v},{field:"createTime",title:"创建时间"},{title:"操作",width:"150px",fixed:"right",showOverflow:!1,slots:{default:"row-operate"}}],proxyConfig:{seq:!0,form:!0,props:{total:"total"},ajax:{query:({page:t,form:a})=>(b.loading=!0,P.clearTable(),new Promise((r=>{let l=0,o=[];const n=e=>{if(e&&e.data){const t=e.data;Number.isInteger(t.total)&&(l=t.total),Array.isArray(t.list)&&(o=t.list)}b.loading=!1,r({total:l,result:o})},s={username:a.username||void 0,phone:a.phone||void 0,size:t.pageSize,currentPage:t.currentPage};e(s).then(n).catch(n)})))}}}),w=l(),x=o({title:"",showClose:!0,escClosable:!0,maskClosable:!0,beforeHideMethod:()=>{var e;return null==(e=k.value)||e.clearValidate(),Promise.resolve()}}),k=l(),C=o({span:24,titleWidth:"100px",loading:!1,titleColon:!1,data:{username:"",password:""},items:[{field:"username",title:"用户名",itemRender:{name:"$input",props:{placeholder:"请输入"}}},{field:"password",title:"密码",itemRender:{name:"$input",props:{placeholder:"请输入"}}},{align:"right",itemRender:{name:"$buttons",children:[{props:{content:"取消"},events:{click:()=>{var e;return null==(e=w.value)?void 0:e.close()}}},{props:{type:"submit",content:"确定",status:"primary"},events:{click:()=>P.onSubmitForm()}}]}}],rules:{username:[{required:!0,validator:({itemValue:e})=>e?e.trim()?void 0:new Error("空格无效"):new Error("请输入")}],password:[{required:!0,validator:({itemValue:e})=>e?e.trim()?void 0:new Error("空格无效"):new Error("请输入")}]}}),P=o({isUpdate:!0,commitQuery:()=>{var e;return null==(e=y.value)?void 0:e.commitProxy("query")},clearTable:()=>{var e;return null==(e=y.value)?void 0:e.reloadData([])},onShowModal:e=>{var t,a,r;e?(P.isUpdate=!0,x.title="修改用户",C.data.username=e.username):(P.isUpdate=!1,x.title="新增用户"),C.items&&(null==(a=null==(t=C.items[0])?void 0:t.itemRender)?void 0:a.props)&&(C.items[0].itemRender.props.disabled=P.isUpdate),null==(r=w.value)||r.open(),n((()=>{var e,t;!P.isUpdate&&(null==(e=k.value)||e.reset()),null==(t=k.value)||t.clearValidate()}))},onSubmitForm:()=>{var e;C.loading||null==(e=k.value)||e.validate((e=>{if(e)return;C.loading=!0;const t=e=>{var t;C.loading=!1,e||(null==(t=w.value)||t.close(),i.success("操作成功"),!P.isUpdate&&P.afterInsert(),P.commitQuery())};P.isUpdate,setTimeout((()=>t()),1e3)}))},afterInsert:()=>{var e,t;const a=null==(t=null==(e=y.value)?void 0:e.getProxyInfo())?void 0:t.pager;if(a){a.currentPage*a.pageSize===a.total&&++a.currentPage}},onDelete:e=>{const a=`确定 <strong style='color:red;'>删除</strong> 用户 <strong style='color:#409eff;'>${e.username}</strong> ？`;s.confirm(a,"提示",{type:"warning",showClose:!0,closeOnClickModal:!0,closeOnPressEscape:!0,cancelButtonText:"取消",confirmButtonText:"确定",dangerouslyUseHTMLString:!0}).then((()=>{t(e.id).then((()=>{i.success("删除成功"),P.afterDelete(),P.commitQuery()})).catch((()=>1))})).catch((()=>1))},afterDelete:()=>{var e,t;const a=y.value.getData(),r=null==(t=null==(e=y.value)?void 0:e.getProxyInfo())?void 0:t.pager;r&&r.currentPage>1&&1===a.length&&--r.currentPage},moreFunc:()=>{}});return(e,t)=>{const r=m("vxe-button"),l=m("el-button"),o=m("vxe-grid"),n=m("vxe-form"),s=m("vxe-modal");return p(),d("div",h,[a(o,c({ref_key:"xGridDom",ref:y},b),{"toolbar-btns":u((()=>[a(r,{status:"primary",icon:"vxe-icon-add",onClick:t[0]||(t[0]=e=>P.onShowModal())},{default:u((()=>[f("新增用户")])),_:1}),a(r,{status:"danger",icon:"vxe-icon-delete"},{default:u((()=>[f("批量删除")])),_:1})])),"row-operate":u((({row:e})=>[a(l,{link:"",type:"primary",onClick:t=>P.onShowModal(e)},{default:u((()=>[f("修改")])),_:2},1032,["onClick"]),a(l,{link:"",type:"danger",onClick:t=>P.onDelete(e)},{default:u((()=>[f("删除")])),_:2},1032,["onClick"])])),_:1},16),a(s,c({ref_key:"xModalDom",ref:w},x),{default:u((()=>[a(n,c({ref_key:"xFormDom",ref:k},C),null,16)])),_:1},16)])}}});export{y as default};