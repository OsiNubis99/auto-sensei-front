import{_,af as p,M as v,u as x,r as l,b as y,e as b,o as r,c as n,f as e,N as i,h as k,k as g,P as h,n as P,O as m,m as D}from"./index-6ce122c3.js";import{u as M}from"./user-39644845.js";const V={components:{LogoIcon:p},setup(){v();const c=x(),o=M(),d=l(null),s=l(!1),u=l(""),a=l({password:"",confirmPassword:""}),f=async()=>{if(a.value.password==""||a.value.confirmPassword==""){m("Required field",{type:"error"});return}else if(a.value.password!==a.value.confirmPassword){m("Passwords do not match",{type:"error"});return}s.value=!0;try{let t={token:d.value,payloadData:{password:a.value.password}},w=await o.userData(t);w.data.message==="Pasword should be valid"?(u.value=w.data.message,m("Verify that your password is 8 characters long containing only characters, numeric digits, lower case and capital letters",{type:"error"}),s.value=!1):(s.value=!1,d.value=null,localStorage.clear(),await c.push("/login/sellers"))}catch{s.value=!1}};return y(()=>{c.replace({query:""}),d.value=localStorage.getItem("password")}),{LogoIcon:p,changePassword:f,formData:a,loading:s,message:u}}},N={class:"w-full flex justify-center items-center h-screen p-6"},j={class:"bg-white md:w-2/6 shadow-lg mt-7 rounded-xl"},C={key:0,class:"w-full h-full flex justify-center items-center"},R=D('<div class="h-full flex justify-center item-center my-7 w-full text-indigo-700"><div class="h-[80px] w-[80px]"><div class="animate-bounce"><svg xmlns="http://www.w3.org/2000/svg" class="animate-spin" fill="#c1f861" stroke="#fff" stroke-width="0" viewBox="0 0 16 16"><path d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 4c2.209 0 4 1.791 4 4s-1.791 4-4 4-4-1.791-4-4 1.791-4 4-4zM12.773 12.773c-1.275 1.275-2.97 1.977-4.773 1.977s-3.498-0.702-4.773-1.977-1.977-2.97-1.977-4.773c0-1.803 0.702-3.498 1.977-4.773l1.061 1.061c0 0 0 0 0 0-2.047 2.047-2.047 5.378 0 7.425 0.992 0.992 2.31 1.538 3.712 1.538s2.721-0.546 3.712-1.538c2.047-2.047 2.047-5.378 0-7.425l1.061-1.061c1.275 1.275 1.977 2.97 1.977 4.773s-0.702 3.498-1.977 4.773z"></path></svg></div><p class="text-base-gray font-medium pl-2">Loading...</p></div></div>',1),z=[R],B={class:"p-4 sm:p-7"},I={key:0,class:"text-center"},L={class:"flex items-end justify-center mb-8 text-2xl font-bold"},S=e("h1",{class:"block text-lg font-bold text-gray-800"},"Reset Password",-1),E={class:"mt-5"},U={class:"grid gap-y-4"},q={key:0},O=e("label",{for:"new_password",class:"block mb-2 ml-1 text-xs font-semibold"},"New password",-1),T={class:"relative"},A=e("p",{class:"hidden mt-2 text-xs text-red-600",id:"new-password-error"},"Please include a password that complies with the rules to ensure security",-1),F={key:1},G=e("label",{for:"confirmn_new_password",class:"block mb-2 ml-1 text-xs font-semibold"},"Confirm new password",-1),H={class:"relative"},J=e("p",{class:"hidden mt-2 text-xs text-red-600",id:"confirmn_new-password-error"},"Please include a password that complies with the rules to ensure security",-1),K=["disabled"];function Q(c,o,d,s,u,a){const f=b("LogoIcon");return r(),n("div",N,[e("div",j,[s.loading?(r(),n("div",C,z)):i("",!0),e("div",B,[s.loading?i("",!0):(r(),n("div",I,[e("div",L,[k(f)]),S])),e("div",E,[e("div",U,[s.loading?i("",!0):(r(),n("div",q,[O,e("div",T,[g(e("input",{type:"password","onUpdate:modelValue":o[0]||(o[0]=t=>s.formData.password=t),class:"block w-full px-4 py-3 text-sm rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500",placeholder:"Enter a new password"},null,512),[[h,s.formData.password]])]),A])),s.loading?i("",!0):(r(),n("div",F,[G,e("div",H,[g(e("input",{type:"password","onUpdate:modelValue":o[1]||(o[1]=t=>s.formData.confirmPassword=t),class:"block w-full px-4 py-3 text-sm rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500",placeholder:"Enter a new password"},null,512),[[h,s.formData.confirmPassword]])]),J])),e("button",{disabled:!!s.loading,onClick:o[2]||(o[2]=(...t)=>s.changePassword&&s.changePassword(...t)),class:P([s.loading?"bg-base-gray text-white":"bg-primary ","inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold transition-all bg-indigo-500 border border-transparent rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"])},"Reset my password",10,K)])])])])])}const Y=_(V,[["render",Q]]);export{Y as default};