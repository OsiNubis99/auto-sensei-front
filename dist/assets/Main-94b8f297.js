import{_ as ve,r as h,A as ce,L as pe,e as x,o,c as s,N as n,h as X,i as de,F as re,J as xe,Q as z,f as t,n as u,K as c,l as ue,O as me,M as Le,u as De,C as He,w as Be,b as Se}from"./index-78654c47.js";import{S as _e,b as ge,N as we}from"./navigation-e47a3f46.js";import{P as be,S as ye,A as Ce}from"./scrollbar-878332d3.js";import{u as Ze}from"./auctions-99e6cf6a.js";import{M as Ee}from"./ModalAcceptAution-a9daadf3.js";import{M as ke}from"./modalAcceptAution-9697eb1b.js";import{M as Me}from"./modalReview-a7b6924d.js";import{M as Ae}from"./modalViewDetails-cfdc2faf.js";import{M as Fe}from"./ModalReview-35c03cba.js";import{M as je}from"./ModalViewDetails-273b73f5.js";import{B as Re}from"./Basic-8ce9188d.js";import{H as ze,C as Oe,a as Ne}from"./HeaderOptionesSeller-412179f1.js";import{_ as Ve}from"./image-0fc6b0a0.js";import{S as Pe}from"./ScreenCreateAution-492cc970.js";import{S as Te}from"./ScrrenNoSorbySeller-28e8c0f6.js";import{S as Ge}from"./SorBy-9383e8ca.js";import{a as Ie}from"./packPhotos-a2d18d9e.js";import"./moment-fbc5633a.js";import"./pspdfkit-21115d53.js";import"./modalBids-55a9c222.js";import"./vehiculoAll-bd4d4fd2.js";const Ue={components:{Swiper:_e,SwiperSlide:ge},props:{auction:{type:Object},changeLayouts:{type:Boolean},decline:{type:Function},cancelAution:{type:Function},acceptAution:{type:Function}},setup(w){const a=h(w.auction),_=h(w.changeLayouts),e=h(ce(()=>"https://s3.us-east-2.amazonaws.com/files.autosensei.ca/")),C=Me(),Y=Ae(),k=ke(),L=pe();return{modules:[we,be,ye,Ce],auction:a,bucket:e,changeLayouts:_,statusReview:C,declineAution:(g,f)=>{console.log("auction",g),console.log("option",f),w.decline(g,f)},cancelAution:()=>{w.cancelAution()},acceptAution:()=>{w.acceptAution()},statusModal:k,statusModalView:Y,openModal:()=>{console.log("auth.userData.anddress",L.userData.address),L.userData.address?k.openModal({isActive:!0,data:a}):me("You need to add your address in order to create an auction. Please update your profile",{autoClose:4e3,type:"error"})}}}},qe={key:0,class:"md:font-semibold ml-5 font-medium text-xs md:text-base fixed z-50 left-0 bg-[#05A54B] text-white rounded-lg mt-2 px-4 py-1"},Ke={key:1,class:"md:font-semibold ml-5 font-medium text-xs md:text-base fixed z-50 left-0 bg-[#FBDB17] rounded-lg mt-2 px-4 py-1"},Ye={key:2,class:"md:font-semibold ml-5 font-medium text-xs md:text-base fixed z-50 left-0 bg-[#0B1107] text-white rounded-lg mt-2 px-4 py-1"},Je={key:3,class:"md:font-semibold ml-5 font-medium text-xs md:text-base fixed z-50 left-0 bg-[#0B1107] text-white rounded-lg mt-2 px-4 py-1"},We=["src"],Xe={key:0,class:"absolute w-full h-full top-0"},Qe=t("img",{class:"w-full rounded-s-lg h-full object-cover",src:Ve,alt:""},null,-1),$e=[Qe],et={class:"font-bold md:text-xl"},tt={class:"text-xs md:text-base"},ot={key:0,class:"flex gap-4"},st=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none"},[t("path",{d:"M1.33398 2.66227C1.33398 2.29651 1.63752 2 1.99518 2H14.0061C14.3713 2 14.6673 2.29663 14.6673 2.66227V13.3377C14.6673 13.7035 14.3638 14 14.0061 14H1.99518C1.63002 14 1.33398 13.7034 1.33398 13.3377V2.66227ZM4.00065 10V11.3333H12.0007V10H4.00065ZM4.00065 4.66667V8.66667H8.00065V4.66667H4.00065ZM9.33398 4.66667V6H12.0007V4.66667H9.33398ZM9.33398 7.33333V8.66667H12.0007V7.33333H9.33398ZM5.33398 6H6.66732V7.33333H5.33398V6Z",fill:"#858585"})],-1),at={class:"uppercase"},lt={key:1,class:"flex gap-4"},it=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none"},[t("path",{d:"M13.334 8.66667C13.334 10.1394 12.7371 11.4727 11.7719 12.4379L12.7147 13.3807C13.9211 12.1743 14.6673 10.5076 14.6673 8.66667C14.6673 4.98477 11.6825 2 8.00065 2C4.31875 2 1.33398 4.98477 1.33398 8.66667C1.33398 10.5076 2.08018 12.1743 3.2866 13.3807L4.22942 12.4379C3.26427 11.4727 2.66732 10.1394 2.66732 8.66667C2.66732 5.72115 5.05513 3.33333 8.00065 3.33333C10.9462 3.33333 13.334 5.72115 13.334 8.66667ZM10.196 5.52865L7.00065 8.33333L8.33398 9.66667L11.1388 6.47145L10.196 5.52865Z",fill:"#858585"})],-1),nt={class:"capitalize"},ct={key:0,class:"flex gap-4"},dt=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none"},[t("path",{d:"M12.8185 12.489L13.997 11.3106L15.1755 12.489C15.8263 13.1399 15.8263 14.1952 15.1755 14.8461C14.5246 15.497 13.4693 15.497 12.8185 14.8461C12.1676 14.1952 12.1676 13.1399 12.8185 12.489ZM5.91907 0.720703L13.4615 8.26318C13.7219 8.52351 13.7219 8.94564 13.4615 9.20598L7.80467 14.8628C7.54433 15.1232 7.1222 15.1232 6.86187 14.8628L1.20503 9.20598C0.944679 8.94564 0.944679 8.52351 1.20503 8.26318L6.39048 3.07772L4.97627 1.66351L5.91907 0.720703ZM7.33327 4.02054L2.61924 8.73458H12.0473L7.33327 4.02054Z",fill:"#858585"})],-1),rt={class:"capitalize"},ut={key:1,class:"flex gap-4"},mt=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none"},[t("path",{d:"M12.6673 13.3327H3.33398V13.9993C3.33398 14.3675 3.0355 14.666 2.66732 14.666H2.00065C1.63246 14.666 1.33398 14.3675 1.33398 13.9993V7.99935L3.00954 3.53118C3.2047 3.01078 3.70219 2.66602 4.25798 2.66602H11.7433C12.2991 2.66602 12.7966 3.01078 12.9918 3.53118L14.6673 7.99935V13.9993C14.6673 14.3675 14.3689 14.666 14.0007 14.666H13.334C12.9658 14.666 12.6673 14.3675 12.6673 13.9993V13.3327ZM2.75798 7.99935H13.2433L11.7433 3.99935H4.25798L2.75798 7.99935ZM4.33398 11.3327C4.88627 11.3327 5.33398 10.8849 5.33398 10.3327C5.33398 9.78042 4.88627 9.33268 4.33398 9.33268C3.7817 9.33268 3.33398 9.78042 3.33398 10.3327C3.33398 10.8849 3.7817 11.3327 4.33398 11.3327ZM11.6673 11.3327C12.2196 11.3327 12.6673 10.8849 12.6673 10.3327C12.6673 9.78042 12.2196 9.33268 11.6673 9.33268C11.1151 9.33268 10.6673 9.78042 10.6673 10.3327C10.6673 10.8849 11.1151 11.3327 11.6673 11.3327Z",fill:"#858585"})],-1),ht={class:"capitalize"},ft={key:0,class:"bg-[#F0F0F0] flex px-1 md:px-5 py-1 gap-1 md:gap-3 rounded-lg items-center"},vt=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 14 14",fill:"none"},[t("path",{d:"M6.99935 12.8327C3.7776 12.8327 1.16602 10.2211 1.16602 6.99935C1.16602 3.7776 3.7776 1.16602 6.99935 1.16602C10.2211 1.16602 12.8327 3.7776 12.8327 6.99935C12.8327 10.2211 10.2211 12.8327 6.99935 12.8327ZM6.41777 9.33268L10.5419 5.20793L9.7171 4.3831L6.41777 7.68302L4.76752 6.03277L3.94268 6.8576L6.41777 9.33268Z",fill:"#0B1107"})],-1),pt={class:"text-[10px] capitalize"},xt={key:1,class:"bg-[#F0F0F0] flex px-1 md:px-5 py-1 gap-1 md:gap-3 rounded-lg items-center"},_t=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 14 14",fill:"none"},[t("path",{d:"M6.99935 12.8327C3.7776 12.8327 1.16602 10.2211 1.16602 6.99935C1.16602 3.7776 3.7776 1.16602 6.99935 1.16602C10.2211 1.16602 12.8327 3.7776 12.8327 6.99935C12.8327 10.2211 10.2211 12.8327 6.99935 12.8327ZM6.41777 9.33268L10.5419 5.20793L9.7171 4.3831L6.41777 7.68302L4.76752 6.03277L3.94268 6.8576L6.41777 9.33268Z",fill:"#0B1107"})],-1),gt={class:"text-[10px] capitalize"},wt=t("div",{class:"bg-[#F0F0F0] flex gap-3 py-1 px-2 rounded-lg items-center"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none"},[t("path",{d:"M5.37852 15.8333L1.66602 18.75V3.33333C1.66602 3.11232 1.75381 2.90036 1.91009 2.74408C2.06637 2.5878 2.27834 2.5 2.49935 2.5H17.4993C17.7204 2.5 17.9323 2.5878 18.0886 2.74408C18.2449 2.90036 18.3327 3.11232 18.3327 3.33333V15C18.3327 15.221 18.2449 15.433 18.0886 15.5893C17.9323 15.7455 17.7204 15.8333 17.4993 15.8333H5.37852ZM5.83268 8.33333V10H7.49935V8.33333H5.83268ZM9.16602 8.33333V10H10.8327V8.33333H9.16602ZM12.4993 8.33333V10H14.166V8.33333H12.4993Z",fill:"#0A0A0A"})]),t("p",null,"Contact Buyer")],-1),bt=t("p",null,"Dropped off date",-1),yt={class:"font-medium text-base-black"},Ct=t("p",{class:"text-sm md:text-base"},"Final Bids",-1),kt={class:"flex gap-1"},Mt={class:"font-medium text-lg md:text-2xl text-base-black"},At={key:0},Vt={key:1},Lt={class:"text-[#666666] mt-1"},Dt=t("p",null,"Approval period ends in",-1),Ht=t("p",{class:"text-[#FF9A02] font-medium !m-0"},"48 Hours ",-1),Bt=[Dt,Ht],St={key:0,class:"flex gap-4 px-2 pb-2 md:p-5 justify-between w-full"},Zt={key:1,class:"flex gap-4 px-2 pb-2 md:p-5 justify-between w-full"},Et={key:2,class:"flex gap-4 px-2 pb-2 md:p-5 justify-between w-full"},Ft={key:3,class:"flex gap-4 px-2 pb-2 md:p-5 justify-between w-full"},jt=t("button",{disabled:"",class:"btn w-full bg-white border border-[#E0E0E0] text-[#A3A3A3]"},"Reviewed",-1),Rt=[jt];function zt(w,a,_,e,C,Y){var l,O,M,g,f,J,A,N,P,T,V,G,I,U,q,i,m,v,b,p,H,B,S,Z,E,F,j,R,r,K,Q,$,ee,te,oe,se,ae,le,ie,d,W;const k=x("swiper-slide"),L=x("swiper"),D=x("RouterLink");return o(),s("div",{class:u(["w-full flex sm:p-0 relative",e.changeLayouts?"flex-col":"flex-col md:flex-row"])},[e.auction.status=="completed"?(o(),s("p",qe," Complete ")):n("",!0),e.auction.status=="bids completed"?(o(),s("p",Ke," Bids Complete ")):n("",!0),e.auction.status=="reviewed"?(o(),s("p",Ye," Reviewed ")):n("",!0),e.auction.status=="drop off"?(o(),s("p",Je," Dropped Off ")):n("",!0),X(L,{pagination:"",modules:e.modules,"slides-per-view":1,class:u(["swiper-autions",e.changeLayouts?"w-full":"w-full md:w-[40%]"])},{default:de(()=>{var y,ne;return[(o(!0),s(re,null,xe((y=e.auction)==null?void 0:y.photos,(he,fe)=>(o(),z(k,{key:fe},{default:de(()=>[t("img",{class:"w-full rounded-s-lg h-full object-cover",src:e.bucket+he.url,alt:""},null,8,We)]),_:2},1024))),128)),(ne=e.auction)!=null&&ne.photos?n("",!0):(o(),s("div",Xe,$e))]}),_:1},8,["modules","class"]),t("div",{class:u(["w-full flex justify-between gap-3B",e.changeLayouts?"flex-col":"flex-col md:flex-row"])},[t("div",{class:u([e.auction.status=="bids completed"||e.auction.status=="completed"?"cursor-pointer":"","flex p-5 flex-col gap-3"]),onClick:a[0]||(a[0]=y=>(e.auction.status=="bids completed"||e.auction.status=="completed")&&e.statusModalView.openModal({isActive:!0,data:e.auction}))},[t("div",null,[t("div",et,c((O=(l=e.auction)==null?void 0:l.vehicleDetails)==null?void 0:O.year)+" "+c((g=(M=e.auction)==null?void 0:M.vehicleDetails)==null?void 0:g.make)+" "+c((J=(f=e.auction)==null?void 0:f.vehicleDetails)==null?void 0:J.model),1),t("p",tt,c((A=e.auction)==null?void 0:A.city)+", "+c((N=e.auction)==null?void 0:N.province),1)]),t("div",{class:u(["hidden md:grid grid-cols-2 gap-1",e.changeLayouts?"flex-col":""])},[(T=(P=e.auction)==null?void 0:P.vehicleDetails)!=null&&T.vin?(o(),s("div",ot,[st,t("p",at,c((G=(V=e.auction)==null?void 0:V.vehicleDetails)==null?void 0:G.vin),1)])):n("",!0),(U=(I=e.auction)==null?void 0:I.vehicleDetails)!=null&&U.odometer?(o(),s("div",lt,[it,t("p",nt,c((i=(q=e.auction)==null?void 0:q.vehicleDetails)==null?void 0:i.odometer)+" Kilometers ",1)])):n("",!0)],2),t("div",{class:u(["hidden md:grid grid-cols-2 gap-1",e.changeLayouts?"flex-col":""])},[(v=(m=e.auction)==null?void 0:m.vehicleDetails)!=null&&v.color?(o(),s("div",ct,[dt,t("p",rt,c((p=(b=e.auction)==null?void 0:b.vehicleDetails)==null?void 0:p.color),1)])):n("",!0),(B=(H=e.auction)==null?void 0:H.vehicleDetails)!=null&&B.driveTrain?(o(),s("div",ut,[mt,t("p",ht,c((Z=(S=e.auction)==null?void 0:S.vehicleDetails)==null?void 0:Z.driveTrain),1)])):n("",!0)],2),t("div",{class:u(["flex items-center md:grid md:grid-cols-2 gap-1",e.changeLayouts?" p-5 whitespace-nowrap  gap-5 overflow-x-auto overflow-y-hidden ":""])},[(F=(E=e.auction)==null?void 0:E.vehicleDetails)!=null&&F.tireCondition?(o(),s("div",ft,[vt,t("p",pt,c((R=(j=e.auction)==null?void 0:j.vehicleDetails)==null?void 0:R.tireCondition),1)])):n("",!0),(K=(r=e.auction)==null?void 0:r.vehicleDetails)!=null&&K.brakeCondition?(o(),s("div",xt,[_t,t("p",gt,c(($=(Q=e.auction)==null?void 0:Q.vehicleDetails)==null?void 0:$.brakeCondition),1)])):n("",!0)],2),e.auction.status=="bids completed"?(o(),z(D,{key:0,to:{name:"inbox-seller",query:{id:e.auction._id+"-"+((oe=(te=(ee=e.auction)==null?void 0:ee.bids[0])==null?void 0:te.participant)==null?void 0:oe._id)}},class:u(["flex gap-4",e.changeLayouts?"flex-col":""])},{default:de(()=>[wt]),_:1},8,["to","class"])):n("",!0)],2),t("div",{class:u([e.changeLayouts?"w-full":"md:w-[40%] flex flex-col justify-between h-full","border-l-2 border-[#E0E0E0]"])},[t("div",{class:u(["flex p-5 pl-4 ga justify-between",e.changeLayouts?"flex-row":"flex-col "])},[e.auction.status=="reviewed"||e.auction.status=="drop off"?(o(),s("div",{key:0,class:u(["space-y-1",e.changeLayouts?"flex flex-col justify-between items-start":""])},[bt,t("p",yt,c(e.auction.dropOffDateForma),1)],2)):n("",!0),e.auction.status=="reviewed"||e.auction.status=="completed"||e.auction.status=="bids completed"||e.auction.status=="drop off"?(o(),s("div",{key:1,class:u(["space-y-1",e.changeLayouts?"flex flex-col justify-between items-start":""])},[Ct,t("div",kt,[t("p",Mt,[(se=e.auction.bids[0])!=null&&se.amount?(o(),s("span",At," $"+c((ae=e.auction.bids[0])==null?void 0:ae.amount),1)):(o(),s("span",Vt," $"+c((ie=(le=e.auction)==null?void 0:le.vehicleDetails)==null?void 0:ie.basePrice),1))]),t("p",Lt," /"+c(e.auction.bids.length)+" Bids",1)])],2)):n("",!0),e.auction.status=="bids completed"?(o(),s("div",{key:2,class:u(e.changeLayouts?"flex justify-between items-start flex-col":"space-y-2 flex items-center gap-2")},Bt,2)):n("",!0)],2),e.auction.status=="completed"?(o(),s("div",St,[X(D,{to:{name:"inbox-seller",query:{id:e.auction._id+"-"+((W=(d=e.auction)==null?void 0:d.bids[0])==null?void 0:W.participant._id)}},class:"btn w-full bg-primary text-base-black"},{default:de(()=>[ue("Contact Buyer")]),_:1},8,["to"])])):n("",!0),e.auction.status=="bids completed"?(o(),s("div",Zt,[t("button",{onClick:a[1]||(a[1]=y=>e.openModal()),class:"btn w-full bg-primary text-base-black"},"Accept"),t("button",{onClick:a[2]||(a[2]=y=>e.declineAution(e.auction)),class:"btn w-full bg-white border border-[#E0E0E0] text-error"},"Decline")])):n("",!0),e.auction.status=="drop off"?(o(),s("div",Et,[t("button",{onClick:a[3]||(a[3]=y=>e.statusReview.openModal({isActive:!0,data:e.auction})),class:"btn w-full bg-white border border-[#E0E0E0]"},"Input Review")])):n("",!0),e.auction.status=="reviewed"?(o(),s("div",Ft,Rt)):n("",!0)],2)],2)],2)}const Ot=ve(Ue,[["render",zt]]),Nt={components:{Swiper:_e,SwiperSlide:ge,ModalAcceptAutionVue:Ee,ModalReviewVue:Fe,ModalViewDetailsVue:je,HeaderOptionesSeller:ze,CreateAution:Oe,CardCompleteSeller:Ot,CardAutionMobile:Ne,Basic:Re,ScreenCreateAution:Pe,ScrrenNoSorbySeller:Te,SorBy:Ge},setup(){const w=Le();De();const a=h(!1),_=h(!1),e=h(!1),C=Ze(),Y=pe(),k=h(ce(()=>Y.aution)),L=h(ce(()=>w.name)),D=ke(),l=h([]),O=Me(),M=h(!1),g=h(null),f=h(0),J=Ae(),A=h("All Status"),N=()=>{e.value=!e.value,f.value++},P=h(ce(()=>"https://s3.us-east-2.amazonaws.com/files.autosensei.ca/")),T=async()=>{var i,m;_.value=!0;try{await C.autionsDecline(g.value._id)&&(g.value=null,M.value=!1,me('Successfully declined the final bids. The vehicle has been moved to the "Parked"',{theme:"colored",type:"success",position:"top-center"}),V())}catch(v){me(((m=(i=v==null?void 0:v.response)==null?void 0:i.data)==null?void 0:m.message)||"error al cargar",{type:"error",position:"top-center"}),_.value=!1}},V=async()=>{_.value=!0;try{await C.index()&&(l.value=C.completed,l.value.map((m,v)=>{const b=new Intl.NumberFormat;m.vehicleDetails.odometer=b==null?void 0:b.format(m.vehicleDetails.odometer);let p=null;p=Ie(m.vehicleDetails),p.length>0?m.photos=p:p=null}))}catch{}finally{_.value=!1}},G=i=>{M.value=!0,g.value=i},I=i=>{_.value=!0,console.log("REVISAR SI LLEGAaaaaaaaaaaaaa",i);try{if(C.acceptAutions(D.dataAutiont._id,i))return"200"}catch{_.value=!0}finally{_.value=!1}},U=i=>{A.value=i,a.value=!1},q=ce(()=>{switch(A.value){case"All Status":return l.value;case"Needs Approval":return l.value.filter(i=>i.status=="bids completed");case"Accepted":return l.value.filter(i=>i.status=="completed");case"Dropped Off":return l.value.filter(i=>i.status=="drop off");case"Reviewed":return l.value.filter(i=>i.status=="reviewed");default:return l.value}});return He(()=>{A.value,f.value++}),Be(k,async(i,m)=>{var p,H,B,S,Z,E,F,j,R,r,K,Q,$,ee,te,oe,se,ae,le,ie;const v=l.value.findIndex(d=>d._id===i._id);if(l.value[v]=i,k.value.status=="completed"){const d=l.value.findIndex(y=>y._id===i._id);l.value[d]=i;let W=[];if((H=(p=l.value[d])==null?void 0:p.vehicleDetails)==null||H.additionalDocuments,(S=(B=l.value[d])==null?void 0:B.vehicleDetails)==null||S.exteriorPhotos,(E=(Z=l.value[d])==null?void 0:Z.vehicleDetails)==null||E.interiorPhotos,(j=(F=l.value[d])==null?void 0:F.vehicleDetails)==null?void 0:j.driverLicense){var b=W.concat((r=(R=l.value[d])==null?void 0:R.vehicleDetails)==null?void 0:r.additionalDocuments,(Q=(K=l.value[d])==null?void 0:K.vehicleDetails)==null?void 0:Q.exteriorPhotos,(ee=($=l.value[d])==null?void 0:$.vehicleDetails)==null?void 0:ee.interiorPhotos,(oe=(te=l.value[d])==null?void 0:te.vehicleDetails)==null?void 0:oe.vehicleDamage,(ae=(se=l.value[d])==null?void 0:se.vehicleDetails)==null?void 0:ae.driverLicense,(ie=(le=l.value[d])==null?void 0:le.vehicleDetails)==null?void 0:ie.originalDocument);let y=b.map((ne,he)=>({name:ne.split("/")[2],url:ne}));return l.value[d].photos=y}else return l.value[d].photos=null}else{let d=null;d=l.value.filter(W=>W._id!==i._id),l.value=d}f.value++}),Se(()=>{V()}),{loading:_,isOpen:a,changeLayouts:e,changeGridTemplate:N,bucket:P,modules:[we,be,ye,Ce],data:l,storeUser:Y,storeAutions:C,path:L,statusModal:D,statusModalR:O,openDecline:M,declineAution:G,autionModal:g,acceptAution:I,statusModalView:J,cancelAution:T,index:V,sortedData:q,setSorBy:U,counter:f,sortBy:A}}},Pt={key:0,class:"relative max-w-[100rem] mx-auto z-50 md:top-[60px]"},Tt={class:"flex justify-between md:mt-5 gap-4 mt-2"},Gt={class:"hidden md:w-[29%] lg:block"},It={class:"w-full lg:w-[70%]"},Ut={class:"flex items-center px-3 justify-between mb-4"},qt={key:0,class:"text-xs font-semibold md:text-base"},Kt={class:"flex items-center gap-2"},Yt=t("p",{class:"mt-2 hidden md:block"},"Filter by:",-1),Jt={class:"flex items-center gap-5"},Wt={class:"navbar-right relative"},Xt={class:"p-2 text-xs md:text-[16px] pb-1"},Qt=t("div",{class:"p-2 border-l-2 pr-0 border-[#efefef]"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 18 18",fill:"none"},[t("path",{d:"M15 3V12H17.25L14.25 15.75L11.25 12H13.5V3H15ZM9 13.5V15H2.25V13.5H9ZM10.5 8.25V9.75H2.25V8.25H10.5ZM10.5 3V4.5H2.25V3H10.5Z",fill:"#858585"})])],-1),$t={key:0,class:"absolute z-10 top-auto left-0 w-full py-2 mt-2 rounded-lg border-gray-900 bg-white shadow-xl"},eo={class:"shadow-md md:flex rounded-md hidden bg-white"},to={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"},oo=["fill"],so={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"},ao=["fill"],lo={key:1},io={key:2,class:"fixed inset-0 flex items-end md:items-center z-50 justify-center bg-base-black bg-opacity-50"},no={class:"max-w-md overflow-auto bg-white rounded-lg shadow-xl animation-fade-modal"},co={class:"p-2 md:p-4 rounded-t-lg bg-blue-dark flex items-center justify-between"},ro=t("p",{class:"text-sm md:text-xl text-white"},"Cancel Auction",-1),uo=t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),mo=[uo],ho={class:"p-4 border border-b-[#E0E0E0] flex gap-3 flex-col"},fo={class:"flex gap-3 items-start"},vo={class:"w-[80px] md:w-[120px] md:h-[90px]"},po=["src"],xo={key:1,class:"w-full h-full rounded-lg object-cover",src:Ve,alt:""},_o={class:"font-semibold capitalize md:text-base text-sm"},go=t("p",{class:"capitalize text-sm md:text-base"},"Final Bid",-1),wo={class:"flex gap-1"},bo={key:0,class:"font-medium text-sm text-base-black md:text-2xl"},yo={key:1,class:"font-medium text-base-black text-xs md:text-2xl"},Co={key:2,class:"font-medium text-base-black text-xs md:text-2xl"},ko={class:"text-[#666666] mt-1 text-xs md:text-base"},Mo={class:"md:py-10 p-2 md:px-4 pb-2"},Ao={class:"text-xs md:text-base"},Vo={class:"font-medium"},Lo={class:"w-full flex gap-2 mt-4 items-center"};function Do(w,a,_,e,C,Y){var N,P,T,V,G,I,U,q,i,m,v,b,p,H,B,S,Z,E,F,j,R;const k=x("Basic"),L=x("HeaderOptionesSeller"),D=x("CreateAution"),l=x("CardAutionMobile"),O=x("CardCompleteSeller"),M=x("ScrrenNoSorbySeller"),g=x("ScreenCreateAution"),f=x("ModalAcceptAutionVue"),J=x("ModalReviewVue"),A=x("ModalViewDetailsVue");return e.loading?(o(),z(k,{key:0})):(o(),s(re,{key:1},[X(L,{storeAutions:e.storeAutions,data:e.data},null,8,["storeAutions","data"]),((N=e.data)==null?void 0:N.length)>0?(o(),s("div",Pt,[t("div",Tt,[t("div",Gt,[X(D,{class:"hidden lg:block",data:e.storeUser.userData,autions:e.storeAutions},null,8,["data","autions"])]),X(l,{class:"block lg:hidden",data:e.storeUser.userData,autions:e.storeAutions},null,8,["data","autions"]),t("div",It,[t("div",Ut,[e.data.length>0?(o(),s("p",qt,c(e.sortedData.length)+" Vehicles ",1)):n("",!0),t("div",Kt,[Yt,t("div",Jt,[t("div",Wt,[t("button",{onClick:a[0]||(a[0]=r=>e.isOpen=!e.isOpen),class:"flex gap-2 rounded-md shadow-md px-2 bg-white items-center"},[t("p",Xt,c(e.sortBy),1),Qt]),e.isOpen?(o(),s("div",$t,[t("div",{onClick:a[1]||(a[1]=r=>e.setSorBy("All Status")),class:"text-[10px] md:text-sm text-gray-900 hover:bg-base-black hover:text-white block px-4 py-2 cursor-pointer"}," All Status "),t("div",{onClick:a[2]||(a[2]=r=>e.setSorBy("Needs Approval")),class:"text-[10px] md:text-sm text-gray-900 hover:bg-base-black hover:text-white block px-4 py-2 cursor-pointer"}," Needs Approval "),t("div",{onClick:a[3]||(a[3]=r=>e.setSorBy("Accepted")),class:"text-[10px] md:text-sm text-gray-900 hover:bg-base-black hover:text-white block px-4 py-2 cursor-pointer"}," Accepted "),t("div",{onClick:a[4]||(a[4]=r=>e.setSorBy("Dropped Off")),class:"text-[10px] md:text-sm text-gray-900 hover:bg-base-black hover:text-white block px-4 py-2 cursor-pointer"}," Dropped Off "),t("div",{onClick:a[5]||(a[5]=r=>e.setSorBy("Reviewed")),class:"text-[10px] md:text-sm text-gray-900 hover:bg-base-black hover:text-white block px-4 py-2 cursor-pointer"}," Reviewed ")])):n("",!0)]),t("div",eo,[t("div",{onClick:a[6]||(a[6]=(...r)=>e.changeGridTemplate&&e.changeGridTemplate(...r)),class:u([e.changeLayouts?"bg-white":"bg-[#EFF8E0]","p-2 cursor-pointer"])},[(o(),s("svg",to,[t("path",{d:"M19 11V5H5V11H19ZM19 13H5V19H19V13ZM4 3H20C20.2652 3 20.5196 3.10536 20.7071 3.29289C20.8946 3.48043 21 3.73478 21 4V20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8946 20.2652 21 20 21H4C3.73478 21 3.48043 20.8946 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20V4C3 3.73478 3.10536 3.48043 3.29289 3.29289C3.48043 3.10536 3.73478 3 4 3Z",fill:e.changeLayouts?"#09121F":"#7EC600"},null,8,oo)]))],2),t("div",{onClick:a[7]||(a[7]=(...r)=>e.changeGridTemplate&&e.changeGridTemplate(...r)),class:u([e.changeLayouts?"bg-[#EFF8E0]":"bg-white","p-2 flex item-center justify-center cursor-pointer"])},[(o(),s("svg",so,[t("path",{d:"M21 3C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H21ZM11 13H4V19H11V13ZM20 13H13V19H20V13ZM11 5H4V11H11V5ZM20 5H13V11H20V5Z",fill:e.changeLayouts?"#7EC600":"#09121F"},null,8,ao)]))],2)])])])]),e.sortedData.length>0?(o(),s("div",{key:0,class:u(["p-2",e.changeLayouts?"grid grid-cols-3 place-content-center place-items-center gap-5":"animate-fade-up  animate-ease-in-out animate-delay-200"])},[(o(!0),s(re,null,xe(e.sortedData,(r,K)=>(o(),s("div",{key:K,class:u(["bg-white flex mb-2 md:mb-7 gap-5 items-start shadow-steps w-full",e.changeLayouts?"animate-fade-up  animate-ease-in-out animate-delay-200":""])},[(o(),z(O,{key:e.counter,auction:r,changeLayouts:e.changeLayouts,decline:e.declineAution},null,8,["auction","changeLayouts","decline"]))],2))),128))],2)):(o(),s("div",lo,[X(M)]))])])])):(o(),z(g,{key:1})),e.openDecline?(o(),s("div",io,[t("div",no,[t("div",co,[ro,(o(),s("svg",{onClick:a[8]||(a[8]=r=>e.openDecline=!1),xmlns:"http://www.w3.org/2000/svg",class:"w-6 h-8 md:w-8 md:h-8 cursor-pointer",fill:"none",viewBox:"0 0 24 24",stroke:"#fff"},mo))]),t("div",ho,[t("div",fo,[t("div",vo,[(P=e.autionModal)!=null&&P.photos?(o(),s("img",{key:0,class:"w-full h-full rounded-lg object-cover",src:e.bucket+((T=e.autionModal)==null?void 0:T.photos[0].url),alt:""},null,8,po)):(o(),s("img",xo))]),t("div",null,[t("p",_o,c((G=(V=e.autionModal)==null?void 0:V.vehicleDetails)==null?void 0:G.year)+" "+c((U=(I=e.autionModal)==null?void 0:I.vehicleDetails)==null?void 0:U.make)+" "+c((i=(q=e.autionModal)==null?void 0:q.vehicleDetails)==null?void 0:i.model),1),go,t("div",wo,[(v=(m=e.autionModal)==null?void 0:m.bids[0])!=null&&v.amount?(o(),s("p",bo," $"+c((b=e.autionModal)==null?void 0:b.bids[0].amount),1)):(H=(p=e.autionModal)==null?void 0:p.vehicleDetails)!=null&&H.basePrice?(o(),s("p",yo,"$"+c((S=(B=w.auction)==null?void 0:B.vehicleDetails)==null?void 0:S.basePrice),1)):(o(),s("p",Co,"$0 ")),t("p",ko," /"+c((E=(Z=e.autionModal)==null?void 0:Z.bids)==null?void 0:E.length)+" Bids ",1)])])])]),t("div",Mo,[t("p",Ao,[ue("Are you sure you want to cancel the auction for the "),t("span",Vo,c((j=(F=e.autionModal)==null?void 0:F.vehicleDetails)==null?void 0:j.model),1),ue("?")]),t("div",Lo,[t("button",{onClick:a[9]||(a[9]=r=>e.openDecline=!1),class:"btn w-full border-[#E0E0E0] border rounded-lg"},"No"),t("button",{onClick:a[10]||(a[10]=r=>e.cancelAution(e.autionModal._id)),class:"btn w-full bg-primary rounded-lg"},"Yes")])])])])):n("",!0),(R=e.statusModal)!=null&&R.isActive?(o(),z(f,{key:3,form:w.form,acceptAution:e.acceptAution,index:e.index},null,8,["form","acceptAution","index"])):n("",!0),e.statusModalR.isActive?(o(),z(J,{key:4,index:e.index},null,8,["index"])):n("",!0),e.statusModalView.isActive?(o(),z(A,{key:5})):n("",!0)],64))}const Qo=ve(Nt,[["render",Do]]);export{Qo as default};