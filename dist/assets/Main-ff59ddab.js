import{_ as b,o as i,c as l,f as e,S as k,r as m,b as F,e as w,k as p,R as f,N as V,F as M,J as L,O as y,n as C,K as x,h as g,l as q,m as A}from"./index-0a18019c.js";import{u as U}from"./faq-2b78c284.js";import"./moment-fbc5633a.js";const S={props:{iconName:{type:String,default:"box"},color:{type:String,default:"#fff"}}},N={xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none"},Z=["fill"];function j(n,o,a,t,u,r){return i(),l("svg",N,[e("path",{d:"M2.66536 5.33203H13.332V13.9987C13.332 14.1755 13.2618 14.3451 13.1368 14.4701C13.0117 14.5951 12.8422 14.6654 12.6654 14.6654H3.33203C3.15522 14.6654 2.98565 14.5951 2.86063 14.4701C2.7356 14.3451 2.66536 14.1755 2.66536 13.9987V5.33203ZM3.9987 6.66536V13.332H11.9987V6.66536H3.9987ZM5.9987 7.9987H7.33203V11.9987H5.9987V7.9987ZM8.66536 7.9987H9.9987V11.9987H8.66536V7.9987ZM4.66536 3.33203V1.9987C4.66536 1.82189 4.7356 1.65232 4.86063 1.52729C4.98565 1.40227 5.15522 1.33203 5.33203 1.33203H10.6654C10.8422 1.33203 11.0117 1.40227 11.1368 1.52729C11.2618 1.65232 11.332 1.82189 11.332 1.9987V3.33203H14.6654V4.66536H1.33203V3.33203H4.66536ZM5.9987 2.66536V3.33203H9.9987V2.66536H5.9987Z",fill:a.color},null,8,Z)])}const Q=b(S,[["render",j]]),B={props:{iconName:{type:String,default:"box"},color:{type:String,default:"#fff"}}},z={xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 12 12",fill:"none"},P=e("path",{d:"M6.6 2.57206L9.428 5.40072L2.828 12.0001H0V9.17139L6.6 2.57139V2.57206ZM7.54267 1.62939L8.95667 0.214722C9.08169 0.0897416 9.25122 0.0195312 9.428 0.0195312C9.60478 0.0195312 9.77432 0.0897416 9.89933 0.214722L11.7853 2.10072C11.9103 2.22574 11.9805 2.39528 11.9805 2.57206C11.9805 2.74883 11.9103 2.91837 11.7853 3.04339L10.3707 4.45739L7.54267 1.62939Z",fill:"#fff"},null,-1),R=[P];function E(n,o,a,t,u,r){return i(),l("svg",z,R)}const D=b(B,[["render",E]]),T={components:{iconArrow:k,iconDelete:Q,iconPincel:D},setup(){const n=m({question:"",answer:""}),o=m(!1),a=m(!1),t=U(),u=m(""),r=async()=>{try{await t.index()}catch{}},_=async()=>{if(!n.value.answer||!n.value.question){y("Required field",{type:"error"});return}a.value=!0;let d={question:n.value.question,answer:n.value.answer};try{(await t.create(d)).status===200&&(r(),n.value.answer="",n.value.question="",a.value=!1)}catch{a.value=!1}},v=async d=>{a.value=!0;try{(await t.delete(d._id)).status===200&&(r(),n.value.answer="",n.value.question="",a.value=!1,y("Removed",{type:"success"}))}catch{a.value=!1}},h=d=>{u.value=d,o.value=!0,n.value.question=d.question,n.value.answer=d.answer},s=async d=>{let c={question:n.value.question,answer:n.value.answer};a.value=!0;try{(await t.update({uuid:u.value._id,payload:c})).status===200&&(r(),n.value.answer="",n.value.question="",a.value=!1,o.value=!1,y("Update",{type:"success"}))}catch{a.value=!1,o.value=!1}};return F(()=>{r()}),{payloadData:n,store:t,sendQuestion:_,deleteQuestion:v,updateQuestion:s,updatective:h,iconArrow:k,isLoading:a,iconDelete:Q,iconPincel:D,faqUpdate:o,dataEdit:u}}},J={class:"md:px-4 relative sm:px-6 lg:px-8 overflow-hidden bg-[#F3F5F7] md:py-8 w-full max-w-9xl mx-auto"},K=e("h1",{class:"text-4xl hidden md:block font-semibold mb-9"},"FAQ",-1),O={class:"grid md:grid-cols-2 gap-12"},G={key:0,class:"w-full h-[30%] absolute left-0 flex justify-center items-center"},W=A('<div class="text-indigo-700"><div class="h-[40px] w-[40px] md:h-[80px] md:w-[80px]"><div class="animate-bounce"><svg xmlns="http://www.w3.org/2000/svg" class="animate-spin" fill="#c1f861" stroke="#fff" stroke-width="0" viewBox="0 0 16 16"><path d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 4c2.209 0 4 1.791 4 4s-1.791 4-4 4-4-1.791-4-4 1.791-4 4-4zM12.773 12.773c-1.275 1.275-2.97 1.977-4.773 1.977s-3.498-0.702-4.773-1.977-1.977-2.97-1.977-4.773c0-1.803 0.702-3.498 1.977-4.773l1.061 1.061c0 0 0 0 0 0-2.047 2.047-2.047 5.378 0 7.425 0.992 0.992 2.31 1.538 3.712 1.538s2.721-0.546 3.712-1.538c2.047-2.047 2.047-5.378 0-7.425l1.061-1.061c1.275 1.275 1.977 2.97 1.977 4.773s-0.702 3.498-1.977 4.773z"></path></svg></div><p class="text-base-gray font-medium pl-2">Loading...</p></div></div>',1),X=[W],Y={key:1,class:"space-y-6 hidden md:block"},I={class:"mt-1"},$=e("label",{htmlFor:"name",class:"block text-sm font-medium text-gray-700"}," Question ",-1),ee={class:"mt-1"},te={class:"mt-1"},se=e("label",{htmlFor:"name",class:"block text-sm font-medium text-gray-700"}," Answer ",-1),oe={class:"mt-1"},ne={key:2,class:"px-4 inline-block md:hidden z-40 bg-white shadow-lg py-3 fixed md:sticky top-12"},ae=e("p",{class:"text-md font-semibold"},"FAQ",-1),ie={class:"flex gap-3"},le=e("label",{htmlFor:"name",class:"block text-xs font-medium text-gray-700"}," Question ",-1),de=e("label",{htmlFor:"name",class:"block text-xs font-medium text-gray-700"}," Answer ",-1),re={key:3,class:"grid px-4 pt-10 mt-32 md:mt-0 md:grid-cols-2 items-left custom-screen-faq md:gap-4 overflow-y-auto overflow-x-hidden"},ce={class:"group bg-gray-900 flex justify-between py-1 px-2 md:px-4 md:py-3 items-center text-white transition ease duration-500 cursor-pointer pr-4 relative"},ue={class:"group-focus:text-primary text-xs md:text-lg font-medium transition ease duration-500"},me={class:"flex justify-center items-center"},pe={class:"w-4 md:h-8 md:w-8 items-center inline-flex justify-center transform transition ease duration-500 group-focus:text-white group-focus:-rotate-180 mb-auto ml-auto mr-2"},fe={class:"mr-4 w-3"},xe={class:"w-2"},_e={class:"group-focus:max-h-screen max-h-0 bg-gray-800 px-4 overflow-hidden ease duration-500"},ve={class:"p-2 text-white text-xs text-justify"},he={class:"text-[12px] font-semibold"},we={class:"font-normal text-[10px]"},ye={class:"text-[12px] font-semibold"},ge={class:"font-normal text-[10px]"},be={key:1,class:"col-span-2 flex justify-center items-center w-full"},ke=e("p",null," No FAQ created",-1),Ve=[ke];function Ce(n,o,a,t,u,r){const _=w("iconArrow"),v=w("iconDelete"),h=w("iconPincel");return i(),l("div",J,[K,e("div",O,[t.isLoading?(i(),l("div",G,X)):(i(),l("div",Y,[e("div",I,[$,e("div",ee,[p(e("input",{name:"question",type:"text","onUpdate:modelValue":o[0]||(o[0]=s=>t.payloadData.question=s),placeholder:"Question",class:"appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-[#858585] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"},null,512),[[f,t.payloadData.question]])])]),e("div",te,[se,e("div",oe,[p(e("input",{name:"question",type:"text","onUpdate:modelValue":o[1]||(o[1]=s=>t.payloadData.answer=s),placeholder:"Answer",class:"appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-[#858585] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"},null,512),[[f,t.payloadData.answer]])])]),t.faqUpdate?(i(),l("button",{key:1,class:"btn mt-10 text-base-black bg-primary",onClick:o[3]||(o[3]=(...s)=>t.updateQuestion&&t.updateQuestion(...s))},"Update")):(i(),l("button",{key:0,class:"btn mt-10 text-base-black bg-primary",onClick:o[2]||(o[2]=(...s)=>t.sendQuestion&&t.sendQuestion(...s))},"Send"))])),t.isLoading?V("",!0):(i(),l("div",ne,[ae,e("div",ie,[e("div",null,[le,e("div",null,[p(e("input",{name:"question",type:"text","onUpdate:modelValue":o[4]||(o[4]=s=>t.payloadData.question=s),placeholder:"Question",class:"appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-[#858585] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"},null,512),[[f,t.payloadData.question]])])]),e("div",null,[de,e("div",null,[p(e("input",{name:"question",type:"text","onUpdate:modelValue":o[5]||(o[5]=s=>t.payloadData.answer=s),placeholder:"Answer",class:"appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-[#858585] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"},null,512),[[f,t.payloadData.answer]])])])]),t.faqUpdate?(i(),l("button",{key:1,class:"btn w-full mt-3 text-base-black bg-primary",onClick:o[7]||(o[7]=(...s)=>t.updateQuestion&&t.updateQuestion(...s))},"Update")):(i(),l("button",{key:0,class:"btn w-full mt-3 text-base-black bg-primary",onClick:o[6]||(o[6]=(...s)=>t.sendQuestion&&t.sendQuestion(...s))},"Send"))])),t.isLoading?V("",!0):(i(),l("div",re,[t.store.data.length>0?(i(!0),l(M,{key:0},L(t.store.data,(s,d)=>(i(),l("div",{key:d},[e("div",{class:C([`animate-fade-up  animate-ease-in-out  animate-delay-${2-d}00`,"group outline-none h-fit accordion-section border-[1px] rounded-xl bg-[#191F26] border-[#4D5865]"]),tabindex:"1"},[e("div",ce,[e("div",ue,x(s.question),1),e("div",me,[e("div",pe,[g(_)]),e("div",fe,[g(v,{onClick:c=>t.deleteQuestion(s)},null,8,["onClick"])]),e("div",xe,[g(h,{onClick:c=>t.updatective(s)},null,8,["onClick"])])])]),e("div",_e,[e("p",ve,x(s.answer),1)])],2),e("div",{class:C(`animate-fade-up mt-2 p-4 pt-0 flex justify-between items-center animate-ease-in-out  animate-delay-${2-d}00`)},[e("p",he,[q("Create: "),e("span",we,x(s.createdAt),1)]),e("p",ye,[q("Update: "),e("span",ge,x(s.createdAt),1)])],2)]))),128)):(i(),l("div",be,Ve))]))])])}const He=b(T,[["render",Ce]]);export{He as default};