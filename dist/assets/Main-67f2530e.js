import{_ as dt,r as h,A as q,e as M,o as s,c as i,h as S,i as E,F as v,J as C,Q as z,f as t,N as r,n as m,K as n,l as N,L as vt,M as gt,w as nt,C as pt,b as wt,k as A,a2 as T,v as yt}from"./index-2076efe3.js";import{S as rt,b as ct,N as ut}from"./navigation-ce992b9b.js";import{P as ft,S as mt,A as xt}from"./scrollbar-65833bb4.js";import{u as bt}from"./auctions-83319271.js";import{M as ht}from"./modalBids-ca73af5d.js";import{M as _t}from"./modalAutoBid-3226014f.js";import{M as Ct}from"./ModalBidNow-bc99a1f3.js";import{M as kt}from"./ModalAutoBid-a9661de6.js";import{H as Vt,S as Lt,F as Ft}from"./FilterBig-3738b4c1.js";import{_ as Mt}from"./image-0fc6b0a0.js";import{B as Bt}from"./Basic-a13bd375.js";import{S as Ht}from"./SorBy-d0c34b86.js";import{a as Dt}from"./packPhotos-a2d18d9e.js";import"./moment-fbc5633a.js";import"./CurrencyInput-8e2f519a.js";const Et={components:{Swiper:rt,SwiperSlide:ct},props:{aution:{type:Object},changeLayouts:{type:Boolean},auth:{type:Object}},setup(k){const o=h(k.aution),j=h(k.changeLayouts),e=h(q(()=>"https://s3.us-east-2.amazonaws.com/files.autosensei.ca/")),U=ht(),y=_t(),Z=h(k.auth);function B(b,H){return!b||!H?0:new Date(new Date(b).getTime()+H*1e3*60).valueOf()-Date.now()}return{modules:[ut,ft,mt,xt],aution:o,bucket:e,changeLayouts:j,statusModal:U,auth:Z,timeToEnd:B,statusModalAuto:y}}},St=["src"],Zt={key:0,class:"absolute w-full h-full top-0"},At=t("img",{class:"w-full rounded-s-lg h-full object-cover",src:Mt,alt:""},null,-1),jt=[At],Tt={class:""},Nt={class:"font-bold md:text-xl"},Ot={class:"text-xs md:text-base"},zt={key:0,class:"flex gap-2 items-center w-full"},Ut=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none"},[t("path",{d:"M1.33398 2.66227C1.33398 2.29651 1.63752 2 1.99518 2H14.0061C14.3713 2 14.6673 2.29663 14.6673 2.66227V13.3377C14.6673 13.7035 14.3638 14 14.0061 14H1.99518C1.63002 14 1.33398 13.7034 1.33398 13.3377V2.66227ZM4.00065 10V11.3333H12.0007V10H4.00065ZM4.00065 4.66667V8.66667H8.00065V4.66667H4.00065ZM9.33398 4.66667V6H12.0007V4.66667H9.33398ZM9.33398 7.33333V8.66667H12.0007V7.33333H9.33398ZM5.33398 6H6.66732V7.33333H5.33398V6Z",fill:"#858585"})],-1),Pt={class:"uppercase"},Rt={key:1,class:"flex gap-2 items-center w-full"},Gt=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none"},[t("path",{d:"M13.334 8.66667C13.334 10.1394 12.7371 11.4727 11.7719 12.4379L12.7147 13.3807C13.9211 12.1743 14.6673 10.5076 14.6673 8.66667C14.6673 4.98477 11.6825 2 8.00065 2C4.31875 2 1.33398 4.98477 1.33398 8.66667C1.33398 10.5076 2.08018 12.1743 3.2866 13.3807L4.22942 12.4379C3.26427 11.4727 2.66732 10.1394 2.66732 8.66667C2.66732 5.72115 5.05513 3.33333 8.00065 3.33333C10.9462 3.33333 13.334 5.72115 13.334 8.66667ZM10.196 5.52865L7.00065 8.33333L8.33398 9.66667L11.1388 6.47145L10.196 5.52865Z",fill:"#858585"})],-1),Kt={class:"capitalize"},qt={key:0,class:"flex gap-2 items-center w-full"},It=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none"},[t("path",{d:"M12.8185 12.489L13.997 11.3106L15.1755 12.489C15.8263 13.1399 15.8263 14.1952 15.1755 14.8461C14.5246 15.497 13.4693 15.497 12.8185 14.8461C12.1676 14.1952 12.1676 13.1399 12.8185 12.489ZM5.91907 0.720703L13.4615 8.26318C13.7219 8.52351 13.7219 8.94564 13.4615 9.20598L7.80467 14.8628C7.54433 15.1232 7.1222 15.1232 6.86187 14.8628L1.20503 9.20598C0.944679 8.94564 0.944679 8.52351 1.20503 8.26318L6.39048 3.07772L4.97627 1.66351L5.91907 0.720703ZM7.33327 4.02054L2.61924 8.73458H12.0473L7.33327 4.02054Z",fill:"#858585"})],-1),Wt={class:"capitalize"},Yt={key:1,class:"flex gap-2 items-center w-full"},Jt=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none"},[t("path",{d:"M12.6673 13.3327H3.33398V13.9993C3.33398 14.3675 3.0355 14.666 2.66732 14.666H2.00065C1.63246 14.666 1.33398 14.3675 1.33398 13.9993V7.99935L3.00954 3.53118C3.2047 3.01078 3.70219 2.66602 4.25798 2.66602H11.7433C12.2991 2.66602 12.7966 3.01078 12.9918 3.53118L14.6673 7.99935V13.9993C14.6673 14.3675 14.3689 14.666 14.0007 14.666H13.334C12.9658 14.666 12.6673 14.3675 12.6673 13.9993V13.3327ZM2.75798 7.99935H13.2433L11.7433 3.99935H4.25798L2.75798 7.99935ZM4.33398 11.3327C4.88627 11.3327 5.33398 10.8849 5.33398 10.3327C5.33398 9.78042 4.88627 9.33268 4.33398 9.33268C3.7817 9.33268 3.33398 9.78042 3.33398 10.3327C3.33398 10.8849 3.7817 11.3327 4.33398 11.3327ZM11.6673 11.3327C12.2196 11.3327 12.6673 10.8849 12.6673 10.3327C12.6673 9.78042 12.2196 9.33268 11.6673 9.33268C11.1151 9.33268 10.6673 9.78042 10.6673 10.3327C10.6673 10.8849 11.1151 11.3327 11.6673 11.3327Z",fill:"#858585"})],-1),Xt={class:"capitalize"},Qt={key:0,class:"bg-[#F0F0F0] flex px-1 w-fit md:px-2 py-1 gap-1 md:gap-3 rounded-lg items-center"},$t=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 14 14",fill:"none"},[t("path",{d:"M6.99935 12.8327C3.7776 12.8327 1.16602 10.2211 1.16602 6.99935C1.16602 3.7776 3.7776 1.16602 6.99935 1.16602C10.2211 1.16602 12.8327 3.7776 12.8327 6.99935C12.8327 10.2211 10.2211 12.8327 6.99935 12.8327ZM6.41777 9.33268L10.5419 5.20793L9.7171 4.3831L6.41777 7.68302L4.76752 6.03277L3.94268 6.8576L6.41777 9.33268Z",fill:"#0B1107"})],-1),el={class:"text-[10px] lg:text-xs lg:text-md font-semibold capitalize"},tl={key:1,class:"bg-[#F0F0F0] flex px-1 w-fit md:px-2 py-1 gap-1 md:gap-3 rounded-lg items-center"},ll=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 14 14",fill:"none"},[t("path",{d:"M6.99935 12.8327C3.7776 12.8327 1.16602 10.2211 1.16602 6.99935C1.16602 3.7776 3.7776 1.16602 6.99935 1.16602C10.2211 1.16602 12.8327 3.7776 12.8327 6.99935C12.8327 10.2211 10.2211 12.8327 6.99935 12.8327ZM6.41777 9.33268L10.5419 5.20793L9.7171 4.3831L6.41777 7.68302L4.76752 6.03277L3.94268 6.8576L6.41777 9.33268Z",fill:"#0B1107"})],-1),ol={class:"text-[10px] lg:text-xs lg:text-md font-semibold capitalize"},sl=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none"},[t("path",{d:"M5.37852 15.8333L1.66602 18.75V3.33333C1.66602 3.11232 1.75381 2.90036 1.91009 2.74408C2.06637 2.5878 2.27834 2.5 2.49935 2.5H17.4993C17.7204 2.5 17.9323 2.5878 18.0886 2.74408C18.2449 2.90036 18.3327 3.11232 18.3327 3.33333V15C18.3327 15.221 18.2449 15.433 18.0886 15.5893C17.9323 15.7455 17.7204 15.8333 17.4993 15.8333H5.37852ZM5.83268 8.33333V10H7.49935V8.33333H5.83268ZM9.16602 8.33333V10H10.8327V8.33333H9.16602ZM12.4993 8.33333V10H14.166V8.33333H12.4993Z",fill:"#0A0A0A"})],-1),il=t("p",null,"Contact Seller",-1),al={class:"flex w-full justify-between items-center"},nl={class:"flex gap-3 items-start justify-center flex-col"},dl={key:0},rl={key:1},cl={key:2,class:"font-medium text-2xl text-base-black"},ul={key:3,class:"font-medium text-2xl text-base-black"},fl={class:"flex gap-3 items-start justify-center flex-col"},ml=t("p",null,"Status",-1),xl={key:0,class:"py-2 px-4 border rounded-full text-[#05A54B] border-[#05A54B] flex justify-center items-center text-left"},hl={key:1,class:"py-2 px-4 border rounded-full text-[#FF333E] border-[#FF333E] flex justify-center items-center text-left"},_l={key:2,class:"py-2 px-4 rounded-full text-white bg-[#05A54B] flex justify-center items-center text-left"},vl={key:0,class:"flex gap-2"},gl=t("p",null,"Auction ends in ",-1),pl={class:"text-[#FF9A02] font-medium !m-0"},wl={class:"flex items-center gap-1"},yl={key:0,class:"flex gap-1 items-center"},bl={key:0,class:"flex gap-4 px-2 justify-between w-full"},Cl=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"17",viewBox:"0 0 16 17",fill:"none"},[t("path",{d:"M2.522 2.38402L8 1.16669L13.478 2.38402C13.626 2.41693 13.7584 2.49933 13.8533 2.61762C13.9482 2.73592 14 2.88303 14 3.03469V9.69269C14 10.3512 13.8373 10.9995 13.5266 11.58C13.2158 12.1606 12.7666 12.6554 12.2187 13.0207L8 15.8334L3.78133 13.0207C3.23352 12.6555 2.78431 12.1608 2.47357 11.5803C2.16282 10.9999 2.00016 10.3517 2 9.69335V3.03469C2.00003 2.88303 2.05176 2.73592 2.14666 2.61762C2.24156 2.49933 2.37396 2.41693 2.522 2.38402ZM8.66667 7.16669V3.83335L5.33333 8.50002H7.33333V11.8334L10.6667 7.16669H8.66667Z",fill:"#0B1107"})],-1),kl=t("button",{class:"btn w-full bg-base-black flex gap-2 items-center text-primary"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"17",height:"17",viewBox:"0 0 17 17",fill:"none"},[t("path",{d:"M9.16699 7.16666H13.8337L7.83366 15.8333V9.83332H3.16699L9.16699 1.16666V7.16666Z",fill:"#C1F861"})]),N(" Auto Bid ")],-1),Vl=[kl],Ll=t("button",{class:"btn w-full bg-primary flex gap-2 items-center text-base-black"}," Bid Again ",-1),Fl=[Ll],Ml={key:1,class:"p-4"},Bl=t("p",{class:"text-[#858585] text-left mb-2"},[N("Waiting for Seller's Approval. "),t("br"),N(" Contact if needed")],-1),Hl={class:"md:hidden"},Dl={class:"flex w-full justify-between items-center"},El={class:"flex items-start justify-center flex-col"},Sl={key:0,class:"text-sm"},Zl={key:1,class:"text-sm"},Al={key:2,class:"font-medium text-lg text-base-black"},jl={key:3,class:"font-medium text-lg text-base-black"},Tl={class:"flex gap-3 items-start justify-center flex-col"},Nl=t("p",{class:"text-xs"},"Status",-1),Ol={key:0,class:"py-1 text-xs px-2 border rounded-full text-[#05A54B] border-[#05A54B] flex justify-center items-center text-left"},zl={key:1,class:"py-1 text-xs px-2 border rounded-full text-[#FF333E] border-[#FF333E] flex justify-center items-center text-left"},Ul={key:2,class:"py-1 text-xs px-2 rounded-full text-white bg-[#05A54B] flex justify-center items-center text-left"},Pl={key:0,class:"flex w-full justify-items-end gap-2"},Rl=t("p",{class:"text-xs"},"Auction ends in ",-1),Gl={class:"text-[#FF9A02] font-medium !m-0"},Kl={class:"flex items-center gap-1"},ql={key:0,class:"flex gap-1 text-xs items-center"},Il={key:0,class:"flex items-center px-2"},Wl={key:0,class:"flex gap-4 justify-between w-full"},Yl=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 16 17",fill:"none"},[t("path",{d:"M2.522 2.38402L8 1.16669L13.478 2.38402C13.626 2.41693 13.7584 2.49933 13.8533 2.61762C13.9482 2.73592 14 2.88303 14 3.03469V9.69269C14 10.3512 13.8373 10.9995 13.5266 11.58C13.2158 12.1606 12.7666 12.6554 12.2187 13.0207L8 15.8334L3.78133 13.0207C3.23352 12.6555 2.78431 12.1608 2.47357 11.5803C2.16282 10.9999 2.00016 10.3517 2 9.69335V3.03469C2.00003 2.88303 2.05176 2.73592 2.14666 2.61762C2.24156 2.49933 2.37396 2.41693 2.522 2.38402ZM8.66667 7.16669V3.83335L5.33333 8.50002H7.33333V11.8334L10.6667 7.16669H8.66667Z",fill:"#0B1107"})],-1),Jl=t("p",{class:"text-xs font-medium"}," Auto Bid Active",-1),Xl=[Yl,Jl],Ql=t("button",{class:"btn !p-2 w-full bg-base-black flex items-center text-primary"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 17 17",fill:"none"},[t("path",{d:"M9.16699 7.16666H13.8337L7.83366 15.8333V9.83332H3.16699L9.16699 1.16666V7.16666Z",fill:"#C1F861"})]),t("p",{class:"text-xs font-medium"},"Auto Bid")],-1),$l=[Ql],eo=t("button",{class:"btn !p-2 w-full bg-primary flex gap-2 items-center text-base-black"},[t("p",{class:"text-xs font-medium"},"Bid Again")],-1),to=[eo],lo=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"15",height:"15",viewBox:"0 0 20 20",fill:"none"},[t("path",{d:"M5.37852 15.8333L1.66602 18.75V3.33333C1.66602 3.11232 1.75381 2.90036 1.91009 2.74408C2.06637 2.5878 2.27834 2.5 2.49935 2.5H17.4993C17.7204 2.5 17.9323 2.5878 18.0886 2.74408C18.2449 2.90036 18.3327 3.11232 18.3327 3.33333V15C18.3327 15.221 18.2449 15.433 18.0886 15.5893C17.9323 15.7455 17.7204 15.8333 17.4993 15.8333H5.37852ZM5.83268 8.33333V10H7.49935V8.33333H5.83268ZM9.16602 8.33333V10H10.8327V8.33333H9.16602ZM12.4993 8.33333V10H14.166V8.33333H12.4993Z",fill:"#0A0A0A"})],-1),oo={key:1,class:"p-4"},so=t("p",{class:"text-[#858585] text-xs text-left mb-2"},"Waiting for Seller's Approval. Contact if needed",-1),io=t("p",{class:"text-sm font-medium"}," Contact Seller",-1);function ao(k,o,j,e,U,y){var V,L,l,c,D,x,I,p,W,P,O,R,Y,J,X,G,Q,$,ee,te,a,f,d,u,K,le,oe,se,ie,ae,ne,de,re,ce,ue,fe,me,xe,he,_e,ve,ge,pe,we,ye,be,Ce,ke,Ve,Le,Fe,Me,Be;const Z=M("swiper-slide"),B=M("swiper"),b=M("RouterLink"),H=M("vue-countdown");return s(),i("div",{class:m(["w-full flex sm:p-0 relative",e.changeLayouts?"flex-col":"flex-col md:flex-row"])},[S(B,{pagination:"",modules:e.modules,"slides-per-view":1,class:m(["swiper-autions",e.changeLayouts?"w-full":"w-full md:w-[40%]"])},{default:E(()=>{var w,_;return[(s(!0),i(v,null,C((w=e.aution)==null?void 0:w.photos,(g,F)=>(s(),z(Z,{key:F},{default:E(()=>[t("img",{class:"w-full rounded-s-lg h-full object-cover",src:e.bucket+g.url,alt:""},null,8,St)]),_:2},1024))),128)),(_=e.aution)!=null&&_.photos?r("",!0):(s(),i("div",Zt,jt))]}),_:1},8,["modules","class"]),t("div",{class:m(["w-full flex justify-between md:gap-3",e.changeLayouts?"flex-col":"flex-col md:flex-row "])},[S(b,{to:{name:"action-details-dealer",params:{id:(V=e.aution)==null?void 0:V._id}},class:"flex md:p-5 p-2 flex-col gap-3"},{default:E(()=>{var w,_,g,F,He,De,Ee,Se,Ze,Ae,je,Te,Ne,Oe,ze,Ue,Pe,Re,Ge,Ke,qe,Ie,We,Ye,Je,Xe,Qe,$e,et,tt,lt,ot,st,it,at;return[t("div",Tt,[t("div",Nt,n((_=(w=e.aution)==null?void 0:w.vehicleDetails)==null?void 0:_.year)+" "+n((F=(g=e.aution)==null?void 0:g.vehicleDetails)==null?void 0:F.make)+" "+n((De=(He=e.aution)==null?void 0:He.vehicleDetails)==null?void 0:De.model),1),t("p",Ot,n((Ee=e.aution)==null?void 0:Ee.city)+", "+n((Se=e.aution)==null?void 0:Se.province),1)]),t("div",{class:m(["hidden md:grid 2xl:grid-cols-2 gap-1",e.changeLayouts?"flex-col":""])},[(Ae=(Ze=e.aution)==null?void 0:Ze.vehicleDetails)!=null&&Ae.vin?(s(),i("div",zt,[Ut,t("p",Pt,n((Te=(je=e.aution)==null?void 0:je.vehicleDetails)==null?void 0:Te.vin),1)])):r("",!0),(Oe=(Ne=e.aution)==null?void 0:Ne.vehicleDetails)!=null&&Oe.odometer?(s(),i("div",Rt,[Gt,t("p",Kt,n((Ue=(ze=e.aution)==null?void 0:ze.vehicleDetails)==null?void 0:Ue.odometer)+" Kilometers ",1)])):r("",!0)],2),t("div",{class:m(["hidden md:grid 2xl:grid-cols-2 gap-1",e.changeLayouts?"flex-col":""])},[(Re=(Pe=e.aution)==null?void 0:Pe.vehicleDetails)!=null&&Re.color?(s(),i("div",qt,[It,t("p",Wt,n((Ke=(Ge=e.aution)==null?void 0:Ge.vehicleDetails)==null?void 0:Ke.color),1)])):r("",!0),(Ie=(qe=e.aution)==null?void 0:qe.vehicleDetails)!=null&&Ie.driveTrain?(s(),i("div",Yt,[Jt,t("p",Xt,n((Ye=(We=e.aution)==null?void 0:We.vehicleDetails)==null?void 0:Ye.driveTrain),1)])):r("",!0)],2),t("div",{class:m(["flex items-center gap-4",e.changeLayouts?" p-5 whitespace-nowrap  gap-5 overflow-x-auto overflow-y-hidden ":""])},[(Xe=(Je=e.aution)==null?void 0:Je.vehicleDetails)!=null&&Xe.tireCondition?(s(),i("div",Qt,[$t,t("p",el,n(($e=(Qe=e.aution)==null?void 0:Qe.vehicleDetails)==null?void 0:$e.tireCondition),1)])):r("",!0),(tt=(et=e.aution)==null?void 0:et.vehicleDetails)!=null&&tt.brakeCondition?(s(),i("div",tl,[ll,t("p",ol,n((ot=(lt=e.aution)==null?void 0:lt.vehicleDetails)==null?void 0:ot.brakeCondition),1)])):r("",!0)],2),((st=e.aution)==null?void 0:st.status)==="live"?(s(),i("div",{key:0,class:m(["flex gap-4",e.changeLayouts?"flex-col":""])},[S(b,{to:{name:"inbox-dealer",query:{id:((it=e.aution)==null?void 0:it._id)+"-"+((at=e.auth)==null?void 0:at.userData._id)}},class:"w-fit md:flex gap-3 hidden cursor-pointer rounded-lg items-center"},{default:E(()=>[sl,il]),_:1},8,["to"])],2)):r("",!0)]}),_:1},8,["to"]),t("div",{class:m([e.changeLayouts?"w-full hidden md:block":"w-[40%] hidden md:flex flex-col","border-l-2 border-[#E0E0E0]"])},[t("div",{class:m(["flex p-4 pt-1 justify-between",e.changeLayouts?"flex-row":"flex-col h-full "])},[t("div",al,[t("div",nl,[((L=e.aution)==null?void 0:L.status)==="live"?(s(),i("p",dl,"Current bid")):(s(),i("p",rl,"Final Bid")),(l=e.aution)!=null&&l.bids[0]?(s(),i("p",cl," $"+n((D=(c=e.aution)==null?void 0:c.bids[0])==null?void 0:D.amount),1)):(s(),i("p",ul," $"+n((x=e.aution)==null?void 0:x.amountBid),1))]),t("div",fl,[ml,((I=e.aution)==null?void 0:I.bids[0].participant._id)==((p=e.auth)==null?void 0:p.userData._id)&&((W=e.aution)==null?void 0:W.status)==="live"?(s(),i("p",xl," Leading ")):((P=e.aution)==null?void 0:P.bids[0].participant._id)!==((O=e.auth)==null?void 0:O.userData._id)?(s(),i("p",hl," Outbid ")):r("",!0),((R=e.aution)==null?void 0:R.bids[0].participant._id)==((Y=e.auth)==null?void 0:Y.userData._id)&&((J=e.aution)==null?void 0:J.status)=="bids completed"?(s(),i("p",_l," Won ")):r("",!0)])]),((X=e.aution)==null?void 0:X.status)==="live"?(s(),i("div",vl,[gl,t("p",pl,[S(H,{time:e.timeToEnd((G=e.aution)==null?void 0:G.startDate,(Q=e.aution)==null?void 0:Q.duration)},{default:E(({days:w,hours:_,minutes:g,seconds:F})=>[t("div",wl,[_>0?(s(),i("p",yl,n(_)+"h",1)):r("",!0),g>0?(s(),i("p",{key:1,class:m([_==0&&g>0?"!text-error":"","flex gap-1 items-center"])},n(g)+"m",3)):r("",!0),F>0?(s(),i("p",{key:2,class:m([_==0&&g>0?"!text-error":"","flex gap-1 items-center"])},n(F)+"s",3)):r("",!0)])]),_:1},8,["time"])])])):r("",!0)],2),(($=e.aution)==null?void 0:$.status)==="live"?(s(),i(v,{key:0},[((ee=e.aution)==null?void 0:ee.bids[0].participant._id)==((te=e.auth)==null?void 0:te.userData._id)&&((a=e.aution)!=null&&a.bids[0].biddingLimit)?(s(),i("div",bl,[t("button",{onClick:o[0]||(o[0]=w=>e.statusModalAuto.openModal({active:!0,data:e.aution})),class:"btn w-full flex gap-2 items-center border border-[#E0E0E0]"},[Cl,N(" Auto Bid Active ")])])):(s(),i("div",{key:1,onClick:o[1]||(o[1]=w=>e.statusModal.openModal({active:!0,data:e.aution,from:"autoBid"})),class:"flex gap-4 px-2 justify-between w-full"},Vl)),t("div",{onClick:o[2]||(o[2]=w=>e.statusModal.openModal({active:!0,data:e.aution,from:"bidNow"})),class:"flex gap-4 p-2 justify-between w-full"},Fl)],64)):r("",!0),((f=e.aution)==null?void 0:f.status)==="bids completed"&&((d=e.aution)==null?void 0:d.bids[0].participant._id)==((u=e.auth)==null?void 0:u.userData._id)?(s(),i("div",Ml,[Bl,S(b,{to:{name:"inbox-dealer",query:{id:((K=e.aution)==null?void 0:K._id)+"-"+((le=e.auth)==null?void 0:le.userData._id)}},class:"btn w-full bg-primary flex gap-2 items-center text-base-black"},{default:E(()=>[N(" Contact Seller ")]),_:1},8,["to"])])):r("",!0)],2),t("div",Hl,[t("div",{class:m(["flex p-2 md:p-4 pt-1 pb-0 justify-between",e.changeLayouts?"flex-row":"flex-col h-full "])},[t("div",Dl,[t("div",El,[((oe=e.aution)==null?void 0:oe.status)==="live"?(s(),i("p",Sl,"Current bid")):(s(),i("p",Zl,"Final Bid")),(se=e.aution)!=null&&se.bids[0]?(s(),i("p",Al," $"+n((ae=(ie=e.aution)==null?void 0:ie.bids[0])==null?void 0:ae.amount),1)):(s(),i("p",jl," $"+n((ne=e.aution)==null?void 0:ne.amountBid),1))]),t("div",Tl,[Nl,((de=e.aution)==null?void 0:de.bids[0].participant._id)==((re=e.auth)==null?void 0:re.userData._id)&&((ce=e.aution)==null?void 0:ce.status)==="live"?(s(),i("p",Ol," Leading ")):((ue=e.aution)==null?void 0:ue.bids[0].participant._id)!==((fe=e.auth)==null?void 0:fe.userData._id)?(s(),i("p",zl," Outbid ")):r("",!0),((me=e.aution)==null?void 0:me.bids[0].participant._id)==((xe=e.auth)==null?void 0:xe.userData._id)&&((he=e.aution)==null?void 0:he.status)=="bids completed"?(s(),i("p",Ul," Won ")):r("",!0)])]),((_e=e.aution)==null?void 0:_e.status)==="live"?(s(),i("div",Pl,[Rl,t("p",Gl,[S(H,{time:e.timeToEnd((ve=e.aution)==null?void 0:ve.startDate,(ge=e.aution)==null?void 0:ge.duration)},{default:E(({days:w,hours:_,minutes:g,seconds:F})=>[t("div",Kl,[_>0?(s(),i("p",ql,n(_)+"Hours",1)):r("",!0),g>0?(s(),i("p",{key:1,class:m([_==0&&g>0?"!text-error":"","flex gap-1 text-xs items-center"])},n(g)+"m",3)):r("",!0),F>0?(s(),i("p",{key:2,class:m([_==0&&g>0?"!text-error":"","flex gap-1 text-xs items-center"])},n(F)+"s",3)):r("",!0)])]),_:1},8,["time"])])])):r("",!0)],2),((pe=e.aution)==null?void 0:pe.status)==="live"?(s(),i("div",Il,[((we=e.aution)==null?void 0:we.bids[0].participant._id)==((ye=e.auth)==null?void 0:ye.userData._id)&&((be=e.aution)!=null&&be.bids[0].biddingLimit)?(s(),i("div",Wl,[t("button",{onClick:o[3]||(o[3]=w=>e.statusModalAuto.openModal({active:!0,data:e.aution})),class:"btn !p-2 w-full gap-1 flex items-center border border-[#E0E0E0]"},Xl)])):(s(),i("div",{key:1,onClick:o[4]||(o[4]=w=>e.statusModal.openModal({active:!0,data:e.aution,from:"autoBid"})),class:"flex gap-4 justify-between w-full"},$l)),t("div",{onClick:o[5]||(o[5]=w=>e.statusModal.openModal({active:!0,data:e.aution,from:"bidNow"})),class:"flex gap-4 p-2 justify-between w-full"},to),S(b,{to:{name:"inbox-dealer",query:{id:((Ce=e.aution)==null?void 0:Ce._id)+"-"+((ke=e.auth)==null?void 0:ke.userData._id)}},class:"border rounded-lg flex justify-center items-center p-2 border-[#C2C2C2]"},{default:E(()=>[lo]),_:1},8,["to"])])):r("",!0),((Ve=e.aution)==null?void 0:Ve.status)==="bids completed"&&((Le=e.aution)==null?void 0:Le.bids[0].participant._id)==((Fe=e.auth)==null?void 0:Fe.userData._id)?(s(),i("div",oo,[so,S(b,{to:{name:"inbox-dealer",query:{id:((Me=e.aution)==null?void 0:Me._id)+"-"+((Be=e.auth)==null?void 0:Be.userData._id)}},class:"btn !py-2 w-full bg-primary flex gap-2 items-center text-base-black"},{default:E(()=>[io]),_:1},8,["to"])])):r("",!0)])],2)],2)}const no=dt(Et,[["render",ao]]),ro={components:{Swiper:rt,SwiperSlide:ct,ModalBidNow:Ct,ModalAutoBidVue:kt,HeaderOptionsDealer:Vt,ScreenNoDataDealer:Lt,CardsCurrentBits:no,Basic:Bt,FilterBig:Ft,SorBy:Ht},setup(){const k=h(!1),o=h(!1),j=h(!1),e=h(0),U=()=>{j.value=!j.value,e.value++},y=h({placeyourbid:0,cardNumber:void 0,nameOnCard:void 0,expiryDate:void 0,cvv:void 0,saveCard:void 0,termsConditions:void 0,notify:void 0,creditCard:void 0}),Z=vt(),B=ht(),b=_t(),H=h(q(()=>"https://s3.us-east-2.amazonaws.com/files.autosensei.ca/")),V=h([]),L=bt(),l=h(q(()=>c.name)),c=gt(),D=h("Current Bid"),x=h([]),I=h(!1),p=h({make:"Select make",model:"Select model",year:"Select make",bodyType:"Select body type",cilynder:"Select cylinder",transmission:"Select transmission",doors:"Select doors",driver:"Select drivetrain",color:"Select color"}),W=h(q(()=>Z.aution)),P=async()=>{o.value=!0;try{await L.index();let a=await L.indexCurrentBids();V.value=L==null?void 0:L.currentBids,console.log("data.value",V.value),V.value.map((f,d)=>{let u=null;u=Dt(f.vehicleDetails),u.length>0?f.photos=u:u=null}),G()}catch{}finally{o.value=!1}};nt(B,async(a,f)=>{a.finally=="finally"&&(y.value.placeyourbid=0,y.value.cardNumber=void 0,y.value.nameOnCard=void 0,y.value.expiryDate=void 0,y.value.cvv=void 0,y.value.saveCard=void 0,y.value.termsConditions=void 0,B.finally=null)}),nt(W,async(a,f)=>{if(a.status=="live"){console.log("CURRENT BITS ENTRO EN LIVE",a);let d=x.value.map(u=>u._id!==a._id?u:a);x.value=[],x.value=d}else{let d=null;d=V.value.filter(u=>u._id!==a._id),x.value=d}e.value++});function O(a,f){return!a||!f?0:new Date(new Date(a).getTime()+f*1e3*60).valueOf()-Date.now()}const R=a=>[...new Set(a)],Y=a=>R(x.value.map(f=>f.vehicleDetails[a])).sort(),J=(a,f,d)=>{console.log(d),console.log(x.value),x.value=x.value.filter(u=>{if(f==="start")return u.vehicleDetails[d]>=a.target.value;if(f==="end")return u.vehicleDetails[d]<=a.target.value}),console.log("filter",d,":",a.target.value),e.value++},X=(a,f)=>{console.log(f),x.value=x.value.filter(d=>(console.log(d),d.vehicleDetails[f]==a.target.value)),e.value++},G=()=>{x.value=V.value},Q=()=>{p.value.make="Select make",p.value.model="Select model",p.value.year="Select make",p.value.bodyType="Select body type",p.value.cilynder="Select cylinder",p.value.transmission="Select transmission",p.value.doors="Select doors",p.value.driver="Select drivetrain",p.value.color="Select color",G()},$=a=>{D.value=a,k.value=!1},ee=["bids completed","live"],te=q(()=>{switch(D.value){case"Current Bid":console.log("current-bid");let a={};x.value.forEach(d=>{a[d.status]||(a[d.status]=[]),a[d.status].push(d)});const f=[];for(let d of ee)a[d]&&f.push(a[d].sort((u,K)=>O(u.startDate,u.duration)-O(K.startDate,K.duration)));return f.reverse().flat();case"Odometer":return console.log("odometer"),x.value.sort((d,u)=>parseFloat(u.vehicleDetails.odometer)-parseFloat(d.vehicleDetails.odometer));case"year":return console.log("Year"),x.value.sort((d,u)=>parseFloat(u.vehicleDetails.year)-parseFloat(d.vehicleDetails.year));default:return x.value}});return pt(()=>{D.value,e.value++}),wt(()=>{P()}),{loading:o,isOpen:k,changeLayouts:j,changeGridTemplate:U,modules:[ut,ft,mt,xt],data:V,bucket:H,formData:y,statusModal:B,path:l,storeAutions:L,authStore:Z,statusModalAuto:b,index:P,timeToEnd:O,setSorBy:$,sortedData:te,counter:e,sortBy:D,filterValues:Y,applyPairFilters:J,applyFilter:X,resetFilterValue:Q,removeDuplicate:R,filteredItems:x,showFilter:I,formFilter:p}}},co={class:"relative max-w-[120rem] mx-auto z-50 md:top-[60px]"},uo={key:1,class:"flex justify-between md:mt-5 md:px-5 gap-4 mt-2"},fo={class:"bg-white p-5 shadow-steps"},mo={class:"flex w-full justify-between items-center"},xo=t("p",{class:"lg:text-2xl font-semibold"},"Filter Auction",-1),ho={class:"flex items-center gap-2 justify-end"},_o=t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),vo=[_o],go={class:"mt-4 flex flex-col gap-4"},po=t("div",{class:"w-full flex flex-col gap-2"},[t("label",{class:"font-medium text-sm",for:""},"Reminder Status"),t("select",{class:"border border-[#E0E0E0] text-[#858585] md:p-3 text-gray-900 text-sm rounded-lg w-full"},[t("option",null,"all")])],-1),wo={class:"w-full flex flex-col gap-2"},yo=t("label",{class:"font-medium text-sm",for:""},"Make",-1),bo=t("option",{selected:"",hidden:""},"Select make",-1),Co=t("option",{selected:"",hidden:""},"Select make",-1),ko=["value"],Vo={class:"w-full flex flex-col gap-2"},Lo=t("label",{class:"font-medium text-sm",for:""},"Model",-1),Fo=t("option",{selected:"",hidden:""},"Select model",-1),Mo=["value"],Bo={class:"w-full flex flex-col gap-2"},Ho=t("label",{class:"font-medium text-sm",for:""},"Trim",-1),Do=t("option",{selected:"",hidden:""},"Select trim",-1),Eo=t("option",{selected:""},"Select trim",-1),So=[Do,Eo],Zo={class:"w-full flex flex-col gap-2"},Ao=t("label",{class:"font-medium text-sm",for:"make"},"Year",-1),jo={class:"flex justify-center gap-6 items-center"},To=t("option",{selected:"",hidden:"",id:"make"},"Select make",-1),No=["value"],Oo=t("p",null," - ",-1),zo=t("option",{selected:"",hidden:""},"Select make",-1),Uo=["value"],Po={class:"w-full flex flex-col gap-2"},Ro=t("label",{class:"font-medium text-sm",for:""},"Body Type",-1),Go=t("option",{selected:"",hidden:""},"Select body type",-1),Ko=["value"],qo={class:"w-full flex flex-col gap-2"},Io=t("label",{class:"font-medium text-sm",for:""},"Cylinder",-1),Wo=t("option",{selected:"",hidden:""},"Select cylinder",-1),Yo=["value"],Jo={class:"w-full flex flex-col gap-2"},Xo=t("label",{class:"font-medium text-sm",for:""},"Transmission",-1),Qo=t("option",{selected:"",hidden:""},"Select transmission",-1),$o=["value"],es={class:"w-full flex flex-col gap-2"},ts=t("label",{class:"font-medium text-sm",for:""},"Doors",-1),ls=t("option",{selected:"",hidden:""},"Select doors",-1),os=["value"],ss={class:"w-full flex flex-col gap-2"},is=t("label",{class:"font-medium text-sm",for:""},"Drivetrain",-1),as=t("option",{selected:"",hidden:""},"Select drivetrain",-1),ns=["value"],ds={class:"w-full flex flex-col gap-2"},rs=t("label",{class:"font-medium text-sm",for:""},"Vehicle Condition",-1),cs=t("option",{selected:""},"Select condition",-1),us=[cs],fs={class:"w-full flex flex-col gap-2"},ms=t("label",{class:"font-medium text-sm",for:""},"Exterior Color",-1),xs={class:"grid grid-cols-3 place-items-start gap-4"},hs=["value"],_s={class:"w-full"},vs=t("label",{class:"font-medium text-base",for:""},"Kilometers",-1),gs={class:"flex justify-between items-center gap-6"},ps=t("p",null,"-",-1),ws={class:"w-full lg:w-[76%]"},ys={class:"flex items-center px-3 justify-between mb-4"},bs={key:0,class:"text-xs font-semibold md:text-base"},Cs={key:1,class:"text-xs font-semibold md:text-base"},ks={class:"flex items-center gap-5"},Vs={class:"navbar-right relative"},Ls={class:"p-2 text-xs md:text-[16px] pb-1"},Fs=t("div",{class:"p-2 border-l-2 pr-0 border-[#efefef]"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 18 18",fill:"none"},[t("path",{d:"M15 3V12H17.25L14.25 15.75L11.25 12H13.5V3H15ZM9 13.5V15H2.25V13.5H9ZM10.5 8.25V9.75H2.25V8.25H10.5ZM10.5 3V4.5H2.25V3H10.5Z",fill:"#858585"})])],-1),Ms={key:0,class:"absolute z-10 top-auto left-0 w-full py-2 mt-2 rounded-lg border-gray-900 bg-white shadow-xl"},Bs={class:"shadow-md md:flex rounded-md hidden bg-white"},Hs={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"},Ds=["fill"],Es={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"},Ss=["fill"],Zs=t("div",{class:"flex items-center py-2 rounded-lg px-3 gap-2 bg-base-black"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"14",viewBox:"0 0 12 14",fill:"none"},[t("path",{d:"M7.33317 7.83333V11.8333L4.6665 13.1667V7.83333L0.666504 1.83333V0.5H11.3332V1.83333L7.33317 7.83333ZM2.26917 1.83333L5.99984 7.42933L9.7305 1.83333H2.26917Z",fill:"white"})]),t("p",{class:"text-white text-xs"},"Filter")],-1),As=[Zs];function js(k,o,j,e,U,y){const Z=M("Basic"),B=M("HeaderOptionsDealer"),b=M("ScreenNoDataDealer"),H=M("CardsCurrentBits"),V=M("ModalBidNow"),L=M("ModalAutoBidVue");return e.loading?(s(),z(Z,{key:0})):(s(),i(v,{key:1},[S(B,{storeAutions:e.storeAutions,data:e.data},null,8,["storeAutions","data"]),t("div",co,[e.data.length==0?(s(),z(b,{key:0})):(s(),i("div",uo,[t("div",{class:m([e.showFilter?" top-0 z-50 visible  w-full h-screen overflow-y-auto overflow-x-hidden shadow-xl animation-fade-modal":" invisible lg:visible ","fixed lg:relative lg:w-[29%] md:block"])},[t("div",fo,[t("div",mo,[xo,t("div",ho,[t("p",{onClick:o[0]||(o[0]=(...l)=>e.resetFilterValue&&e.resetFilterValue(...l)),class:"cursor-pointer text-xs lg:text-[15px] text-error font-semibold"}," Reset Filter"),(s(),i("svg",{onClick:o[1]||(o[1]=l=>e.showFilter=!1),xmlns:"http://www.w3.org/2000/svg",class:"w-6 h-8 md:w-8 lg:hidden block md:h-8 cursor-pointer",fill:"none",viewBox:"0 0 24 24",stroke:"#ff4545"},vo))])]),t("div",go,[po,t("div",wo,[yo,bo,A(t("select",{onChange:o[2]||(o[2]=l=>e.applyFilter(l,"make")),"onUpdate:modelValue":o[3]||(o[3]=l=>e.formFilter.make=l),class:"border border-[#E0E0E0] text-[#858585] md:p-3 text-gray-900 text-sm rounded-lg w-full"},[Co,(s(!0),i(v,null,C(e.filterValues("make"),(l,c)=>(s(),i("option",{key:c,value:l},n(l),9,ko))),128))],544),[[T,e.formFilter.make]])]),t("div",Vo,[Lo,A(t("select",{onChange:o[4]||(o[4]=l=>e.applyFilter(l,"model")),"onUpdate:modelValue":o[5]||(o[5]=l=>e.formFilter.model=l),class:"border-none text-[#858585] md:p-3 bg-[#F0F0F0] text-gray-900 text-sm rounded-lg w-full"},[Fo,(s(!0),i(v,null,C(e.filterValues("model"),(l,c)=>(s(),i("option",{key:c,value:l},n(l),9,Mo))),128))],544),[[T,e.formFilter.model]])]),t("div",Bo,[Ho,t("select",{onChange:o[6]||(o[6]=l=>e.applyFilter(l,"trim")),class:"border-none text-[#858585] md:p-3 bg-[#F0F0F0] text-gray-900 text-sm rounded-lg w-full"},So,32)]),t("div",Zo,[Ao,t("div",jo,[t("select",{onChange:o[7]||(o[7]=l=>e.applyPairFilters(l,"start",k.label.year)),class:"border border-[#E0E0E0] text-[#858585] md:p-3 text-gray-900 text-sm rounded-lg w-full"},[To,(s(!0),i(v,null,C(e.filterValues("year"),(l,c)=>(s(),i("option",{key:c,value:l},n(l),9,No))),128))],32),Oo,t("select",{onChange:o[8]||(o[8]=l=>e.applyPairFilters(l,"end",k.label.year)),class:"border border-[#E0E0E0] text-[#858585] md:p-3 text-gray-900 text-sm rounded-lg w-full"},[zo,(s(!0),i(v,null,C(e.filterValues("year"),(l,c)=>(s(),i("option",{key:c,value:l},n(l),9,Uo))),128))],32)])]),t("div",Po,[Ro,A(t("select",{onChange:o[9]||(o[9]=l=>e.applyFilter(l,"bodyType")),"onUpdate:modelValue":o[10]||(o[10]=l=>e.formFilter.bodyType=l),class:"border border-[#E0E0E0] text-[#858585] md:p-3 text-gray-900 text-sm rounded-lg w-full"},[Go,(s(!0),i(v,null,C(e.filterValues("bodyType"),(l,c)=>(s(),i("option",{key:c,value:l},n(l),9,Ko))),128))],544),[[T,e.formFilter.bodyType]])]),t("div",qo,[Io,A(t("select",{onChange:o[11]||(o[11]=l=>e.applyFilter(l,"cylinder")),"onUpdate:modelValue":o[12]||(o[12]=l=>e.formFilter.cilynder=l),class:"border border-[#E0E0E0] text-[#858585] md:p-3 text-gray-900 text-sm rounded-lg w-full"},[Wo,(s(!0),i(v,null,C(e.filterValues("cylinder"),(l,c)=>(s(),i("option",{key:c,value:l},n(l),9,Yo))),128))],544),[[T,e.formFilter.cilynder]])]),t("div",Jo,[Xo,A(t("select",{onChange:o[13]||(o[13]=l=>e.applyFilter(l,"transmission")),"onUpdate:modelValue":o[14]||(o[14]=l=>e.formFilter.transmission=l),class:"border border-[#E0E0E0] text-[#858585] md:p-3 text-gray-900 text-sm rounded-lg w-full"},[Qo,(s(!0),i(v,null,C(e.filterValues("transmission"),(l,c)=>(s(),i(v,{key:c},[l?(s(),i("option",{key:0,value:l},n(l),9,$o)):r("",!0)],64))),128))],544),[[T,e.formFilter.transmission]])]),t("div",es,[ts,A(t("select",{onChange:o[15]||(o[15]=l=>e.applyFilter(l,"doors")),"onUpdate:modelValue":o[16]||(o[16]=l=>e.formFilter.doors=l),class:"border border-[#E0E0E0] text-[#858585] md:p-3 text-gray-900 text-sm rounded-lg w-full"},[N("\\ "),ls,(s(!0),i(v,null,C(e.filterValues("doors"),(l,c)=>(s(),i("option",{key:c,value:l},n(l),9,os))),128))],544),[[T,e.formFilter.doors]])]),t("div",ss,[is,A(t("select",{onChange:o[17]||(o[17]=l=>e.applyFilter(l,"driveTrain")),"onUpdate:modelValue":o[18]||(o[18]=l=>e.formFilter.driver=l),class:"border border-[#E0E0E0] text-[#858585] md:p-3 text-gray-900 text-sm rounded-lg w-full"},[as,(s(!0),i(v,null,C(e.filterValues("driveTrain"),(l,c)=>(s(),i("option",{key:c,value:l},n(l),9,ns))),128))],544),[[T,e.formFilter.driver]])]),t("div",ds,[rs,t("select",{onChange:o[19]||(o[19]=l=>e.applyFilter(l,"vehicle-condition")),class:"border border-[#E0E0E0] text-[#858585] md:p-3 text-gray-900 text-sm rounded-lg w-full"},us,32)]),t("div",fs,[ms,t("div",xs,[(s(!0),i(v,null,C(e.filterValues("color"),(l,c)=>(s(),i("label",{key:c,class:"label-colors !p-2 !h-[40px] !capitalize whitespace-pre w-full"},[t("input",{onChange:o[20]||(o[20]=D=>e.applyFilter(D,"color")),value:l,type:"radio",class:m(["input-radio",[l=="silver"&&"on-silver",l=="white"&&"on-white",l=="grey"&&"on-grey",l=="greenDark"&&"on-greenDark",l=="red"&&"on-red",l=="yellow"&&"on-yellow",l=="blue"&&"on-blue",l=="white"&&"on-white",l=="white"&&"on-white"]]),name:"color-redio"},null,42,hs),N(" "+n(l),1)]))),128))])]),t("div",_s,[vs,t("div",gs,[t("input",{onChange:o[21]||(o[21]=l=>e.applyPairFilters(l,"start",k.label.klmtr)),class:"p-2 w-full mt-3 uppercase border border-[#E0E0E0] text-[#858585] rounded-lg",placeholder:"0                                 Kms",type:"number"},null,32),ps,t("input",{onChange:o[22]||(o[22]=l=>e.applyPairFilters(l,"end")),type:"number",class:"p-2 w-full mt-3 uppercase border border-[#E0E0E0] text-[#858585] rounded-lg",placeholder:"0                                 Kms"},null,32)])])])])],2),t("div",ws,[t("div",ys,[e.sortedData.length>0?(s(),i("p",bs,n(e.sortedData.length)+" Vehicles ",1)):(s(),i("p",Cs,"0 Vehicles ")),t("div",ks,[t("div",Vs,[t("button",{onClick:o[23]||(o[23]=l=>e.isOpen=!e.isOpen),class:"flex gap-2 rounded-md shadow-md px-2 bg-white items-center"},[t("p",Ls,n(e.sortBy),1),Fs]),e.isOpen?(s(),i("div",Ms,[t("div",{onClick:o[24]||(o[24]=l=>e.setSorBy("Current Bid")),class:"text-[10px] md:text-sm text-gray-900 hover:bg-base-black hover:text-white block px-4 py-2 cursor-pointer"}," Current Bid "),t("div",{onClick:o[25]||(o[25]=l=>e.setSorBy("Odometer")),class:"text-[10px] md:text-sm text-gray-900 hover:bg-base-black hover:text-white block px-4 py-2 cursor-pointer"}," Odometer "),t("div",{onClick:o[26]||(o[26]=l=>e.setSorBy("Year")),class:"text-[10px] md:text-sm text-gray-900 hover:bg-base-black hover:text-white block px-4 py-2 cursor-pointer"}," Year")])):r("",!0)]),t("div",Bs,[t("div",{onClick:o[27]||(o[27]=(...l)=>e.changeGridTemplate&&e.changeGridTemplate(...l)),class:m([e.changeLayouts?"bg-white":"bg-[#EFF8E0]","p-2 cursor-pointer"])},[(s(),i("svg",Hs,[t("path",{d:"M19 11V5H5V11H19ZM19 13H5V19H19V13ZM4 3H20C20.2652 3 20.5196 3.10536 20.7071 3.29289C20.8946 3.48043 21 3.73478 21 4V20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8946 20.2652 21 20 21H4C3.73478 21 3.48043 20.8946 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20V4C3 3.73478 3.10536 3.48043 3.29289 3.29289C3.48043 3.10536 3.73478 3 4 3Z",fill:e.changeLayouts?"#09121F":"#7EC600"},null,8,Ds)]))],2),t("div",{onClick:o[28]||(o[28]=(...l)=>e.changeGridTemplate&&e.changeGridTemplate(...l)),class:m([e.changeLayouts?"bg-[#EFF8E0]":"bg-white","p-2 flex item-center justify-center cursor-pointer"])},[(s(),i("svg",Es,[t("path",{d:"M21 3C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H21ZM11 13H4V19H11V13ZM20 13H13V19H20V13ZM11 5H4V11H11V5ZM20 5H13V11H20V5Z",fill:e.changeLayouts?"#7EC600":"#09121F"},null,8,Ss)]))],2)])])]),t("div",{class:m(["p-2",e.changeLayouts?"grid grid-cols-3 place-content-center place-items-center gap-5":"animate-fade-up  animate-ease-in-out animate-delay-200"])},[(s(!0),i(v,null,C(e.sortedData,(l,c)=>(s(),i("div",{key:c,class:m(["bg-white flex md:mb-7 gap-5 items-start shadow-steps mb-[20%] w-full",e.changeLayouts?"animate-fade-up  animate-ease-in-out animate-delay-200":""])},[(s(),z(H,{key:e.counter,aution:l,changeLayouts:e.changeLayouts,auth:e.authStore},null,8,["aution","changeLayouts","auth"]))],2))),128))],2)])]))]),A(t("div",{onClick:o[29]||(o[29]=l=>e.showFilter=!0),class:"fixed lg:hidden flex justify-center items-center bottom-2 w-full z-50"},As,512),[[yt,!e.showFilter&&e.data.length>0]]),e.statusModal.isActive?(s(),z(V,{key:0,form:e.formData},null,8,["form"])):r("",!0),e.statusModalAuto.isActive?(s(),z(L,{key:1,form:e.formData,index:e.index},null,8,["form","index"])):r("",!0)],64))}const Qs=dt(ro,[["render",js]]);export{Qs as default};