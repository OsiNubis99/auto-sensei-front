import{_ as we,r as f,A as ae,e as M,o as s,c as i,h as ie,i as N,F as p,J as V,Q as O,f as e,N as g,n as m,K as d,l as he,M as Fe,L as He,w as _e,C as Me,b as Se,k as S,U as A,v as Ee}from"./index-78654c47.js";import{S as ye,b as be,N as Ce}from"./navigation-e47a3f46.js";import{P as ke,S as Ve,A as De}from"./scrollbar-878332d3.js";import{u as Be}from"./auctions-99e6cf6a.js";import{M as Le}from"./modalBids-55a9c222.js";import{M as Ze}from"./ModalBidNow-44df6535.js";import{H as je,S as Te,F as Ae}from"./FilterBig-25f911ef.js";import{_ as Ne}from"./image-0fc6b0a0.js";import{B as Oe}from"./Basic-8ce9188d.js";import{a as Pe}from"./packPhotos-a2d18d9e.js";import"./moment-fbc5633a.js";import"./CurrencyInput-de88348c.js";const ze={components:{Swiper:ye,SwiperSlide:be},props:{auction:{type:Object},changeLayouts:{type:Boolean},auth:{type:Object}},setup(D){const o=f(D.auction),E=f(D.changeLayouts),t=f(ae(()=>"https://s3.us-east-2.amazonaws.com/files.autosensei.ca/")),b=Le(),B=f(D.auth);function Z(n,h){return!n||!h?0:new Date(new Date(n).getTime()+h*1e3*60).valueOf()-Date.now()}return{modules:[Ce,ke,Ve,De],auction:o,bucket:t,changeLayouts:E,statusModal:b,auth:B,timeToEnd:Z}}},Ue=["src"],Ge={key:0,class:"absolute w-full h-full top-0"},Ke=e("img",{class:"w-full rounded-s-lg h-full object-cover",src:Ne,alt:""},null,-1),Re=[Ke],Ie={class:""},Ye={class:"font-bold md:text-xl"},qe={class:"text-xs md:text-base"},Je={key:0,class:"flex gap-4"},We=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none"},[e("path",{d:"M1.33398 2.66227C1.33398 2.29651 1.63752 2 1.99518 2H14.0061C14.3713 2 14.6673 2.29663 14.6673 2.66227V13.3377C14.6673 13.7035 14.3638 14 14.0061 14H1.99518C1.63002 14 1.33398 13.7034 1.33398 13.3377V2.66227ZM4.00065 10V11.3333H12.0007V10H4.00065ZM4.00065 4.66667V8.66667H8.00065V4.66667H4.00065ZM9.33398 4.66667V6H12.0007V4.66667H9.33398ZM9.33398 7.33333V8.66667H12.0007V7.33333H9.33398ZM5.33398 6H6.66732V7.33333H5.33398V6Z",fill:"#858585"})],-1),Xe={class:"uppercase"},Qe={key:1,class:"flex gap-4"},$e=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none"},[e("path",{d:"M13.334 8.66667C13.334 10.1394 12.7371 11.4727 11.7719 12.4379L12.7147 13.3807C13.9211 12.1743 14.6673 10.5076 14.6673 8.66667C14.6673 4.98477 11.6825 2 8.00065 2C4.31875 2 1.33398 4.98477 1.33398 8.66667C1.33398 10.5076 2.08018 12.1743 3.2866 13.3807L4.22942 12.4379C3.26427 11.4727 2.66732 10.1394 2.66732 8.66667C2.66732 5.72115 5.05513 3.33333 8.00065 3.33333C10.9462 3.33333 13.334 5.72115 13.334 8.66667ZM10.196 5.52865L7.00065 8.33333L8.33398 9.66667L11.1388 6.47145L10.196 5.52865Z",fill:"#858585"})],-1),et={class:"capitalize"},tt={key:0,class:"flex gap-4"},lt=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none"},[e("path",{d:"M12.8185 12.489L13.997 11.3106L15.1755 12.489C15.8263 13.1399 15.8263 14.1952 15.1755 14.8461C14.5246 15.497 13.4693 15.497 12.8185 14.8461C12.1676 14.1952 12.1676 13.1399 12.8185 12.489ZM5.91907 0.720703L13.4615 8.26318C13.7219 8.52351 13.7219 8.94564 13.4615 9.20598L7.80467 14.8628C7.54433 15.1232 7.1222 15.1232 6.86187 14.8628L1.20503 9.20598C0.944679 8.94564 0.944679 8.52351 1.20503 8.26318L6.39048 3.07772L4.97627 1.66351L5.91907 0.720703ZM7.33327 4.02054L2.61924 8.73458H12.0473L7.33327 4.02054Z",fill:"#858585"})],-1),ot={class:"capitalize"},st={key:1,class:"flex gap-4"},it=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none"},[e("path",{d:"M12.6673 13.3327H3.33398V13.9993C3.33398 14.3675 3.0355 14.666 2.66732 14.666H2.00065C1.63246 14.666 1.33398 14.3675 1.33398 13.9993V7.99935L3.00954 3.53118C3.2047 3.01078 3.70219 2.66602 4.25798 2.66602H11.7433C12.2991 2.66602 12.7966 3.01078 12.9918 3.53118L14.6673 7.99935V13.9993C14.6673 14.3675 14.3689 14.666 14.0007 14.666H13.334C12.9658 14.666 12.6673 14.3675 12.6673 13.9993V13.3327ZM2.75798 7.99935H13.2433L11.7433 3.99935H4.25798L2.75798 7.99935ZM4.33398 11.3327C4.88627 11.3327 5.33398 10.8849 5.33398 10.3327C5.33398 9.78042 4.88627 9.33268 4.33398 9.33268C3.7817 9.33268 3.33398 9.78042 3.33398 10.3327C3.33398 10.8849 3.7817 11.3327 4.33398 11.3327ZM11.6673 11.3327C12.2196 11.3327 12.6673 10.8849 12.6673 10.3327C12.6673 9.78042 12.2196 9.33268 11.6673 9.33268C11.1151 9.33268 10.6673 9.78042 10.6673 10.3327C10.6673 10.8849 11.1151 11.3327 11.6673 11.3327Z",fill:"#858585"})],-1),at={class:"capitalize"},nt={key:0,class:"bg-[#F0F0F0] flex px-1 md:px-5 py-1 gap-1 md:gap-3 rounded-lg items-center"},dt=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 14 14",fill:"none"},[e("path",{d:"M6.99935 12.8327C3.7776 12.8327 1.16602 10.2211 1.16602 6.99935C1.16602 3.7776 3.7776 1.16602 6.99935 1.16602C10.2211 1.16602 12.8327 3.7776 12.8327 6.99935C12.8327 10.2211 10.2211 12.8327 6.99935 12.8327ZM6.41777 9.33268L10.5419 5.20793L9.7171 4.3831L6.41777 7.68302L4.76752 6.03277L3.94268 6.8576L6.41777 9.33268Z",fill:"#0B1107"})],-1),rt={class:"text-[10px] capitalize"},ct={key:1,class:"bg-[#F0F0F0] flex px-1 md:px-5 py-1 gap-1 md:gap-3 rounded-lg items-center"},ut=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 14 14",fill:"none"},[e("path",{d:"M6.99935 12.8327C3.7776 12.8327 1.16602 10.2211 1.16602 6.99935C1.16602 3.7776 3.7776 1.16602 6.99935 1.16602C10.2211 1.16602 12.8327 3.7776 12.8327 6.99935C12.8327 10.2211 10.2211 12.8327 6.99935 12.8327ZM6.41777 9.33268L10.5419 5.20793L9.7171 4.3831L6.41777 7.68302L4.76752 6.03277L3.94268 6.8576L6.41777 9.33268Z",fill:"#0B1107"})],-1),mt={class:"text-[10px] capitalize"},ft=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none"},[e("path",{d:"M5.37852 15.8333L1.66602 18.75V3.33333C1.66602 3.11232 1.75381 2.90036 1.91009 2.74408C2.06637 2.5878 2.27834 2.5 2.49935 2.5H17.4993C17.7204 2.5 17.9323 2.5878 18.0886 2.74408C18.2449 2.90036 18.3327 3.11232 18.3327 3.33333V15C18.3327 15.221 18.2449 15.433 18.0886 15.5893C17.9323 15.7455 17.7204 15.8333 17.4993 15.8333H5.37852ZM5.83268 8.33333V10H7.49935V8.33333H5.83268ZM9.16602 8.33333V10H10.8327V8.33333H9.16602ZM12.4993 8.33333V10H14.166V8.33333H12.4993Z",fill:"#0A0A0A"})],-1),ht=e("p",null,"Contact Buyer",-1),vt={class:"flex w-full justify-between items-center"},xt={class:"flex md:gap-3 items-start justify-center flex-col"},pt=e("p",{class:"text-sm md:text-base"},"Current bid",-1),gt={key:0,class:"font-medium text-lg md:text-2xl text-base-black"},_t={key:1,class:"font-medium text-2xl text-base-black"},wt={key:2,class:"font-medium text-2xl text-base-black"},yt=e("p",null,"Auction ends in ",-1),bt={class:"text-[#FF9A02] font-medium !m-0"},Ct={class:"flex items-center gap-1"},kt={key:0,class:"flex gap-1 items-center"},Vt=e("button",{class:"btn w-full bg-base-black flex gap-2 items-center text-primary"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"17",height:"17",viewBox:"0 0 17 17",fill:"none"},[e("path",{d:"M9.16699 7.16666H13.8337L7.83366 15.8333V9.83332H3.16699L9.16699 1.16666V7.16666Z",fill:"#C1F861"})]),he(" Auto Bid ")],-1),Dt=[Vt],Lt=e("button",{class:"btn w-full bg-primary flex gap-2 items-center text-base-black"}," Bid Now ",-1),Ft=[Lt],Ht={class:"flex md:hidden px-2 items-center"},Mt=e("button",{class:"btn !py-2 w-full bg-base-black flex gap-2 items-center text-primary"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"17",height:"17",viewBox:"0 0 17 17",fill:"none"},[e("path",{d:"M9.16699 7.16666H13.8337L7.83366 15.8333V9.83332H3.16699L9.16699 1.16666V7.16666Z",fill:"#C1F861"})]),e("p",{class:"text-xs"}," Auto Bid")],-1),St=[Mt],Et=e("button",{class:"btn !py-2 w-full bg-primary flex gap-2 items-center text-base-black"},[e("p",{class:"text-xs"},"Bid Now")],-1),Bt=[Et],Zt=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"15",height:"15",viewBox:"0 0 20 20",fill:"none"},[e("path",{d:"M5.37852 15.8333L1.66602 18.75V3.33333C1.66602 3.11232 1.75381 2.90036 1.91009 2.74408C2.06637 2.5878 2.27834 2.5 2.49935 2.5H17.4993C17.7204 2.5 17.9323 2.5878 18.0886 2.74408C18.2449 2.90036 18.3327 3.11232 18.3327 3.33333V15C18.3327 15.221 18.2449 15.433 18.0886 15.5893C17.9323 15.7455 17.7204 15.8333 17.4993 15.8333H5.37852ZM5.83268 8.33333V10H7.49935V8.33333H5.83268ZM9.16602 8.33333V10H10.8327V8.33333H9.16602ZM12.4993 8.33333V10H14.166V8.33333H12.4993Z",fill:"#0A0A0A"})],-1);function jt(D,o,E,t,b,B){var _,l,r,j,T,v,ne,w,z;const Z=M("swiper-slide"),n=M("swiper"),h=M("RouterLink"),P=M("vue-countdown");return s(),i("div",{class:m(["w-full flex flex-col md:flex-row sm:p-0 relative",t.changeLayouts?"flex-col":""])},[ie(n,{pagination:"",modules:t.modules,"slides-per-view":1,class:m(["swiper-autions",t.changeLayouts?"w-full":"w-full md:w-[40%]"])},{default:N(()=>{var x,C;return[(s(!0),i(p,null,V((x=t.auction)==null?void 0:x.photos,(k,H)=>(s(),O(Z,{key:H},{default:N(()=>[e("img",{class:"w-full rounded-s-lg h-full object-cover",src:t.bucket+k.url,alt:""},null,8,Ue)]),_:2},1024))),128)),(C=t.auction)!=null&&C.photos?g("",!0):(s(),i("div",Ge,Re))]}),_:1},8,["modules","class"]),e("div",{class:m(["w-full flex flex-col md:flex-row justify-between md:gap-3",t.changeLayouts?"flex-col":""])},[ie(h,{to:{name:"action-details-dealer",params:{id:(_=t.auction)==null?void 0:_._id}},class:"flex pb-2 p-5 flex-col gap-3"},{default:N(()=>{var x,C,k,H,de,re,U,ce,ue,a,c,y,L,F,G,K,R,I,Y,q,J,W,X,Q,$,ee,te,le,oe,se;return[e("div",Ie,[e("div",Ye,d((C=(x=t.auction)==null?void 0:x.vehicleDetails)==null?void 0:C.year)+" "+d((H=(k=t.auction)==null?void 0:k.vehicleDetails)==null?void 0:H.make)+" "+d((re=(de=t.auction)==null?void 0:de.vehicleDetails)==null?void 0:re.model),1),e("p",qe,d(t.auction.city)+", "+d(t.auction.province),1)]),e("div",{class:m(["hidden md:grid grid-cols-2 gap-1",t.changeLayouts?"flex-col":""])},[(ce=(U=t.auction)==null?void 0:U.vehicleDetails)!=null&&ce.vin?(s(),i("div",Je,[We,e("p",Xe,d((a=(ue=t.auction)==null?void 0:ue.vehicleDetails)==null?void 0:a.vin),1)])):g("",!0),(y=(c=t.auction)==null?void 0:c.vehicleDetails)!=null&&y.odometer?(s(),i("div",Qe,[$e,e("p",et,d((F=(L=t.auction)==null?void 0:L.vehicleDetails)==null?void 0:F.odometer)+" Kilometers ",1)])):g("",!0)],2),e("div",{class:m(["hidden md:grid grid-cols-2 gap-1",t.changeLayouts?"flex-col":""])},[(K=(G=t.auction)==null?void 0:G.vehicleDetails)!=null&&K.color?(s(),i("div",tt,[lt,e("p",ot,d((I=(R=t.auction)==null?void 0:R.vehicleDetails)==null?void 0:I.color),1)])):g("",!0),(q=(Y=t.auction)==null?void 0:Y.vehicleDetails)!=null&&q.driveTrain?(s(),i("div",st,[it,e("p",at,d((W=(J=t.auction)==null?void 0:J.vehicleDetails)==null?void 0:W.driveTrain),1)])):g("",!0)],2),e("div",{class:m(["flex items-center md:grid md:grid-cols-2 gap-1",t.changeLayouts?" p-5 whitespace-nowrap  gap-5 overflow-x-auto overflow-y-hidden ":""])},[(Q=(X=t.auction)==null?void 0:X.vehicleDetails)!=null&&Q.tireCondition?(s(),i("div",nt,[dt,e("p",rt,d((ee=($=t.auction)==null?void 0:$.vehicleDetails)==null?void 0:ee.tireCondition),1)])):g("",!0),(le=(te=t.auction)==null?void 0:te.vehicleDetails)!=null&&le.brakeCondition?(s(),i("div",ct,[ut,e("p",mt,d((se=(oe=t.auction)==null?void 0:oe.vehicleDetails)==null?void 0:se.brakeCondition),1)])):g("",!0)],2),e("div",{class:m(["gap-4 hidden md:flex",t.changeLayouts?"flex-col":""])},[ie(h,{to:{name:"inbox-dealer",query:{id:t.auction._id+"-"+t.auth.userData._id}},class:"w-fit flex gap-3 cursor-pointer rounded-lg items-center"},{default:N(()=>[ft,ht]),_:1},8,["to"])],2)]}),_:1},8,["to"]),e("div",{class:m([t.changeLayouts?"w-full":"md:w-[40%] flex flex-col","border-l-2 border-[#E0E0E0]"])},[e("div",{class:m(["flex p-4 pt-1 justify-between",t.changeLayouts?"flex-row":"flex-col h-full "])},[e("div",vt,[e("div",xt,[pt,(r=(l=t.auction)==null?void 0:l.bids[0])!=null&&r.amount?(s(),i("p",gt," $"+d((T=(j=t.auction)==null?void 0:j.bids[0])==null?void 0:T.amount),1)):(ne=(v=t.auction)==null?void 0:v.vehicleDetails)!=null&&ne.basePrice?(s(),i("p",_t," $"+d((z=(w=t.auction)==null?void 0:w.vehicleDetails)==null?void 0:z.basePrice),1)):(s(),i("p",wt,"0$"))])])],2),e("div",{class:m(t.changeLayouts?"flex justify-between items-start flex-col":"space-y-2 flex w-full mb-3 justify-start pl-4 items-center gap-2")},[yt,e("p",bt,[ie(P,{time:t.timeToEnd(t.auction.startDate,t.auction.duration)},{default:N(({days:x,hours:C,minutes:k,seconds:H})=>[e("div",Ct,[C>0?(s(),i("p",kt,d(C)+" Hours",1)):g("",!0),k>0?(s(),i("p",{key:1,class:m([C==0&&k>0?"!text-error":"","flex gap-1 items-center"])},d(k)+"m",3)):g("",!0),H>0?(s(),i("p",{key:2,class:m([C==0&&k>0?"!text-error":"","flex gap-1 items-center"])},d(H)+"s",3)):g("",!0)])]),_:1},8,["time"])])],2),e("div",{onClick:o[0]||(o[0]=x=>t.statusModal.openModal({active:!0,data:t.auction,from:"autoBid"})),class:"hidden md:flex gap-4 px-2 justify-between w-full"},Dt),e("div",{onClick:o[1]||(o[1]=x=>t.statusModal.openModal({active:!0,data:t.auction,from:"bidNow"})),class:"hidden md:flex gap-4 p-2 justify-between w-full"},Ft),e("div",Ht,[e("div",{onClick:o[2]||(o[2]=x=>t.statusModal.openModal({active:!0,data:t.auction,from:"autoBid"})),class:"flex gap-4 px-2 justify-between w-full"},St),e("div",{onClick:o[3]||(o[3]=x=>t.statusModal.openModal({active:!0,data:t.auction,from:"bidNow"})),class:"flex gap-4 p-2 justify-between w-full"},Bt),ie(h,{to:{name:"inbox-dealer",query:{id:t.auction._id+"-"+t.auth.userData._id}},class:"border rounded-lg flex justify-center items-center p-2 border-[#C2C2C2]"},{default:N(()=>[Zt]),_:1},8,["to"])])],2)],2)],2)}const Tt=we(ze,[["render",jt]]),At={components:{Swiper:ye,SwiperSlide:be,ModalBidNow:Ze,HeaderOptionsDealer:je,ScreenNoDataDealer:Te,CardLiveDealer:Tt,Basic:Oe,FilterBig:Ae},setup(){const D=f(!1),o=f(!1),E=f(!1),t=()=>{E.value=!E.value,_.value++},b=f({placeyourbid:0,cardNumber:void 0,nameOnCard:void 0,expiryDate:void 0,cvv:void 0,saveCard:void 0,termsConditions:void 0,notify:void 0,creditCard:void 0}),B=Le(),Z=f(ae(()=>"https://s3.us-east-2.amazonaws.com/files.autosensei.ca/")),n=f([]),h=Be(),P=f(ae(()=>l.name)),_=f(0),l=Fe(),r=He(),j=f(ae(()=>r.aution)),T=f("Auction Posted"),v=f([]),ne=f(!1),w=f({make:"Select make",model:"Select model",year:"Select make",bodyType:"Select body type",cilynder:"Select cylinder",transmission:"Select transmission",doors:"Select doors",driver:"Select drivetrain",color:"Select color"});_e(j,async(a,c)=>{var F,G,K,R,I,Y,q,J,W,X,Q,$,ee,te,le,oe,se,ve,xe,pe;const y=n.value.findIndex(u=>u._id===a._id);if(n.value[y]=a,j.value.status=="live"){const u=n.value.findIndex(fe=>fe._id===a._id);n.value[u]=a;let me=[];if(_.value++,(G=(F=n.value[u])==null?void 0:F.vehicleDetails)==null||G.additionalDocuments,(R=(K=n.value[u])==null?void 0:K.vehicleDetails)==null||R.exteriorPhotos,(Y=(I=n.value[u])==null?void 0:I.vehicleDetails)==null||Y.interiorPhotos,(J=(q=n.value[u])==null?void 0:q.vehicleDetails)==null?void 0:J.driverLicense){var L=me.concat((X=(W=n.value[u])==null?void 0:W.vehicleDetails)==null?void 0:X.additionalDocuments,($=(Q=n.value[u])==null?void 0:Q.vehicleDetails)==null?void 0:$.exteriorPhotos,(te=(ee=n.value[u])==null?void 0:ee.vehicleDetails)==null?void 0:te.interiorPhotos,(oe=(le=n.value[u])==null?void 0:le.vehicleDetails)==null?void 0:oe.vehicleDamage,(ve=(se=n.value[u])==null?void 0:se.vehicleDetails)==null?void 0:ve.driverLicense,(pe=(xe=n.value[u])==null?void 0:xe.vehicleDetails)==null?void 0:pe.originalDocument);let fe=L.map((ge,fo)=>({name:ge.split("/")[2],url:ge}));return n.value[u].photos=fe}else return n.value[u].photos=null}else{let u=null;u=n.value.filter(me=>me._id!==a._id),n.value=u}_.value++});const z=async()=>{o.value=!0;try{await h.indexCurrentBids();let a=await h.index();n.value=h==null?void 0:h.live,n.value.map((c,y)=>{const L=new Intl.NumberFormat;c.vehicleDetails.odometer=L==null?void 0:L.format(c.vehicleDetails.odometer);let F=null;F=Pe(c.vehicleDetails),F.length>0?c.photos=F:F=null}),U()}catch{}finally{o.value=!1}};function x(a,c){return!a||!c?0:new Date(new Date(a).getTime()+c*1e3*60).valueOf()-Date.now()}_e(B,async(a,c)=>{a.finally=="finally"&&(z(),b.value.placeyourbid=0,b.value.cardNumber=void 0,b.value.nameOnCard=void 0,b.value.expiryDate=void 0,b.value.cvv=void 0,b.value.saveCard=void 0,b.value.termsConditions=void 0,B.finally=null)});const C=a=>{T.value=a,D.value=!1},k=a=>[...new Set(a)],H=a=>k(v.value.map(c=>c.vehicleDetails[a])).sort(),de=(a,c,y)=>{console.log(y),console.log(v.value),v.value=v.value.filter(L=>{if(c==="start")return L.vehicleDetails[y]>=a.target.value;if(c==="end")return L.vehicleDetails[y]<=a.target.value}),console.log("filter",y,":",a.target.value),_.value++},re=(a,c)=>{console.log(c),v.value=v.value.filter(y=>(console.log(y),y.vehicleDetails[c]==a.target.value)),_.value++},U=()=>{v.value=n.value},ce=()=>{w.value.make="Select make",w.value.model="Select model",w.value.year="Select make",w.value.bodyType="Select body type",w.value.cilynder="Select cylinder",w.value.transmission="Select transmission",w.value.doors="Select doors",w.value.driver="Select drivetrain",w.value.color="Select color",U()},ue=ae(()=>{switch(T.value){case"Auction Date":return v.value.filter(a=>!0).sort((a,c)=>x(c.startDate,c.duration)-x(a.startDate,a.duration));case"Odometer":return v.value.sort((a,c)=>parseFloat(c.vehicleDetails.odometer)-parseFloat(a.vehicleDetails.odometer));case"Year":return v.value.sort((a,c)=>parseFloat(c.vehicleDetails.year)-parseFloat(a.vehicleDetails.year));default:return v.value}});return Me(()=>{T.value,_.value++}),Se(()=>{z()}),{loading:o,isOpen:D,changeLayouts:E,changeGridTemplate:t,modules:[Ce,ke,Ve,De],data:n,bucket:Z,formData:b,statusModal:B,path:P,storeAutions:h,timeToEnd:x,auth:r,setSorBy:C,sortedData:ue,counter:_,sortBy:T,filterValues:H,applyPairFilters:de,applyFilter:re,resetFilterValue:ce,removeDuplicate:k,filteredItems:v,showFilter:ne,formFilter:w}}},Nt={class:"relative max-w-[100rem] mx-auto z-50 md:top-[60px]"},Ot={key:1,class:"flex justify-between md:mt-5 gap-4 mt-2"},Pt={class:"bg-white p-5 shadow-steps"},zt={class:"flex w-full justify-between items-center"},Ut=e("p",{class:"lg:text-2xl font-semibold"},"Filter Auction",-1),Gt={class:"flex items-center gap-2 justify-end"},Kt=e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),Rt=[Kt],It={class:"mt-4 flex flex-col gap-4"},Yt=e("div",{class:"w-full flex flex-col gap-2"},[e("label",{class:"font-medium text-sm",for:""},"Reminder Status"),e("select",{class:"border border-[#E0E0E0] text-[#858585] md:p-3 text-gray-900 text-sm rounded-lg w-full"},[e("option",null,"all")])],-1),qt={class:"w-full flex flex-col gap-2"},Jt=e("label",{class:"font-medium text-sm",for:""},"Make",-1),Wt=e("option",{selected:"",hidden:""},"Select make",-1),Xt=e("option",{selected:"",hidden:""},"Select make",-1),Qt=["value"],$t={class:"w-full flex flex-col gap-2"},el=e("label",{class:"font-medium text-sm",for:""},"Model",-1),tl=e("option",{selected:"",hidden:""},"Select model",-1),ll=["value"],ol={class:"w-full flex flex-col gap-2"},sl=e("label",{class:"font-medium text-sm",for:""},"Trim",-1),il=e("option",{selected:"",hidden:""},"Select trim",-1),al=e("option",{selected:""},"Select trim",-1),nl=[il,al],dl={class:"w-full flex flex-col gap-2"},rl=e("label",{class:"font-medium text-sm",for:"make"},"Year",-1),cl={class:"flex justify-center gap-6 items-center"},ul=e("option",{selected:"",hidden:"",id:"make"},"Select make",-1),ml=["value"],fl=e("p",null," - ",-1),hl=e("option",{selected:"",hidden:""},"Select make",-1),vl=["value"],xl={class:"w-full flex flex-col gap-2"},pl=e("label",{class:"font-medium text-sm",for:""},"Body Type",-1),gl=e("option",{selected:"",hidden:""},"Select body type",-1),_l=["value"],wl={class:"w-full flex flex-col gap-2"},yl=e("label",{class:"font-medium text-sm",for:""},"Cylinder",-1),bl=e("option",{selected:"",hidden:""},"Select cylinder",-1),Cl=["value"],kl={class:"w-full flex flex-col gap-2"},Vl=e("label",{class:"font-medium text-sm",for:""},"Transmission",-1),Dl=e("option",{selected:"",hidden:""},"Select transmission",-1),Ll=["value"],Fl={class:"w-full flex flex-col gap-2"},Hl=e("label",{class:"font-medium text-sm",for:""},"Doors",-1),Ml=e("option",{selected:"",hidden:""},"Select doors",-1),Sl=["value"],El={class:"w-full flex flex-col gap-2"},Bl=e("label",{class:"font-medium text-sm",for:""},"Drivetrain",-1),Zl=e("option",{selected:"",hidden:""},"Select drivetrain",-1),jl=["value"],Tl={class:"w-full flex flex-col gap-2"},Al=e("label",{class:"font-medium text-sm",for:""},"Vehicle Condition",-1),Nl=e("option",{selected:""},"Select condition",-1),Ol=[Nl],Pl={class:"w-full flex flex-col gap-2"},zl=e("label",{class:"font-medium text-sm",for:""},"Exterior Color",-1),Ul={class:"grid grid-cols-3 place-items-start gap-4"},Gl=["value"],Kl={class:"w-full"},Rl=e("label",{class:"font-medium text-base",for:""},"Kilometers",-1),Il={class:"flex justify-between items-center gap-6"},Yl=e("p",null,"-",-1),ql={class:"w-full lg:w-[70%]"},Jl={class:"flex items-center px-3 justify-between mb-4"},Wl={key:0,class:"text-xs font-semibold md:text-base"},Xl={class:"flex items-center gap-2"},Ql=e("p",{class:"p-2 text-xs md:text-[16px] pb-1"},"Sort by:",-1),$l={class:"flex items-center gap-5"},eo={class:"navbar-right relative"},to={class:"p-2 text-xs md:text-[16px] pb-1"},lo=e("div",{class:"p-2 border-l-2 pr-0 border-[#efefef]"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 18 18",fill:"none"},[e("path",{d:"M15 3V12H17.25L14.25 15.75L11.25 12H13.5V3H15ZM9 13.5V15H2.25V13.5H9ZM10.5 8.25V9.75H2.25V8.25H10.5ZM10.5 3V4.5H2.25V3H10.5Z",fill:"#858585"})])],-1),oo={key:0,class:"absolute z-10 top-auto left-0 w-full py-2 mt-2 rounded-lg border-gray-900 bg-white shadow-xl"},so={class:"shadow-md md:flex rounded-md hidden bg-white"},io={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"},ao=["fill"],no={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"},ro=["fill"],co=e("div",{class:"flex items-center py-2 rounded-lg px-3 gap-2 bg-base-black"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"14",viewBox:"0 0 12 14",fill:"none"},[e("path",{d:"M7.33317 7.83333V11.8333L4.6665 13.1667V7.83333L0.666504 1.83333V0.5H11.3332V1.83333L7.33317 7.83333ZM2.26917 1.83333L5.99984 7.42933L9.7305 1.83333H2.26917Z",fill:"white"})]),e("p",{class:"text-white text-xs"},"Filter")],-1),uo=[co];function mo(D,o,E,t,b,B){const Z=M("Basic"),n=M("HeaderOptionsDealer"),h=M("ScreenNoDataDealer"),P=M("CardLiveDealer"),_=M("ModalBidNow");return t.loading?(s(),O(Z,{key:0})):(s(),i(p,{key:1},[(s(),O(n,{storeAutions:t.storeAutions,key:t.counter,data:t.data},null,8,["storeAutions","data"])),e("div",Nt,[t.data.length==0?(s(),O(h,{key:0})):(s(),i("div",Ot,[e("div",{class:m([t.showFilter?" top-0 z-50 visible  w-full h-screen overflow-y-auto overflow-x-hidden shadow-xl animation-fade-modal":" invisible md:visible ","fixed lg:relative md:w-[29%] md:block"])},[e("div",Pt,[e("div",zt,[Ut,e("div",Gt,[e("p",{onClick:o[0]||(o[0]=(...l)=>t.resetFilterValue&&t.resetFilterValue(...l)),class:"cursor-pointer text-xs lg:text-[15px] text-error font-semibold"}," Reset Filter"),(s(),i("svg",{onClick:o[1]||(o[1]=l=>t.showFilter=!1),xmlns:"http://www.w3.org/2000/svg",class:"w-6 h-8 md:w-8 lg:hidden block md:h-8 cursor-pointer",fill:"none",viewBox:"0 0 24 24",stroke:"#ff4545"},Rt))])]),e("div",It,[Yt,e("div",qt,[Jt,Wt,S(e("select",{onChange:o[2]||(o[2]=l=>t.applyFilter(l,"make")),"onUpdate:modelValue":o[3]||(o[3]=l=>t.formFilter.make=l),class:"border border-[#E0E0E0] text-[#858585] md:p-3 text-gray-900 text-sm rounded-lg w-full"},[Xt,(s(!0),i(p,null,V(t.filterValues("make"),(l,r)=>(s(),i("option",{key:r,value:l},d(l),9,Qt))),128))],544),[[A,t.formFilter.make]])]),e("div",$t,[el,S(e("select",{onChange:o[4]||(o[4]=l=>t.applyFilter(l,"model")),"onUpdate:modelValue":o[5]||(o[5]=l=>t.formFilter.model=l),class:"border-none text-[#858585] md:p-3 bg-[#F0F0F0] text-gray-900 text-sm rounded-lg w-full"},[tl,(s(!0),i(p,null,V(t.filterValues("model"),(l,r)=>(s(),i("option",{key:r,value:l},d(l),9,ll))),128))],544),[[A,t.formFilter.model]])]),e("div",ol,[sl,e("select",{onChange:o[6]||(o[6]=l=>t.applyFilter(l,"trim")),class:"border-none text-[#858585] md:p-3 bg-[#F0F0F0] text-gray-900 text-sm rounded-lg w-full"},nl,32)]),e("div",dl,[rl,e("div",cl,[e("select",{onChange:o[7]||(o[7]=l=>t.applyPairFilters(l,"start",D.label.year)),class:"border border-[#E0E0E0] text-[#858585] md:p-3 text-gray-900 text-sm rounded-lg w-full"},[ul,(s(!0),i(p,null,V(t.filterValues("year"),(l,r)=>(s(),i("option",{key:r,value:l},d(l),9,ml))),128))],32),fl,e("select",{onChange:o[8]||(o[8]=l=>t.applyPairFilters(l,"end",D.label.year)),class:"border border-[#E0E0E0] text-[#858585] md:p-3 text-gray-900 text-sm rounded-lg w-full"},[hl,(s(!0),i(p,null,V(t.filterValues("year"),(l,r)=>(s(),i("option",{key:r,value:l},d(l),9,vl))),128))],32)])]),e("div",xl,[pl,S(e("select",{onChange:o[9]||(o[9]=l=>t.applyFilter(l,"bodyType")),"onUpdate:modelValue":o[10]||(o[10]=l=>t.formFilter.bodyType=l),class:"border border-[#E0E0E0] text-[#858585] md:p-3 text-gray-900 text-sm rounded-lg w-full"},[gl,(s(!0),i(p,null,V(t.filterValues("bodyType"),(l,r)=>(s(),i("option",{key:r,value:l},d(l),9,_l))),128))],544),[[A,t.formFilter.bodyType]])]),e("div",wl,[yl,S(e("select",{onChange:o[11]||(o[11]=l=>t.applyFilter(l,"cylinder")),"onUpdate:modelValue":o[12]||(o[12]=l=>t.formFilter.cilynder=l),class:"border border-[#E0E0E0] text-[#858585] md:p-3 text-gray-900 text-sm rounded-lg w-full"},[bl,(s(!0),i(p,null,V(t.filterValues("cylinder"),(l,r)=>(s(),i("option",{key:r,value:l},d(l),9,Cl))),128))],544),[[A,t.formFilter.cilynder]])]),e("div",kl,[Vl,S(e("select",{onChange:o[13]||(o[13]=l=>t.applyFilter(l,"transmission")),"onUpdate:modelValue":o[14]||(o[14]=l=>t.formFilter.transmission=l),class:"border border-[#E0E0E0] text-[#858585] md:p-3 text-gray-900 text-sm rounded-lg w-full"},[Dl,(s(!0),i(p,null,V(t.filterValues("transmission"),(l,r)=>(s(),i(p,{key:r},[l?(s(),i("option",{key:0,value:l},d(l),9,Ll)):g("",!0)],64))),128))],544),[[A,t.formFilter.transmission]])]),e("div",Fl,[Hl,S(e("select",{onChange:o[15]||(o[15]=l=>t.applyFilter(l,"doors")),"onUpdate:modelValue":o[16]||(o[16]=l=>t.formFilter.doors=l),class:"border border-[#E0E0E0] text-[#858585] md:p-3 text-gray-900 text-sm rounded-lg w-full"},[he("\\ "),Ml,(s(!0),i(p,null,V(t.filterValues("doors"),(l,r)=>(s(),i("option",{key:r,value:l},d(l),9,Sl))),128))],544),[[A,t.formFilter.doors]])]),e("div",El,[Bl,S(e("select",{onChange:o[17]||(o[17]=l=>t.applyFilter(l,"driveTrain")),"onUpdate:modelValue":o[18]||(o[18]=l=>t.formFilter.driver=l),class:"border border-[#E0E0E0] text-[#858585] md:p-3 text-gray-900 text-sm rounded-lg w-full"},[Zl,(s(!0),i(p,null,V(t.filterValues("driveTrain"),(l,r)=>(s(),i("option",{key:r,value:l},d(l),9,jl))),128))],544),[[A,t.formFilter.driver]])]),e("div",Tl,[Al,e("select",{onChange:o[19]||(o[19]=l=>t.applyFilter(l,"vehicle-condition")),class:"border border-[#E0E0E0] text-[#858585] md:p-3 text-gray-900 text-sm rounded-lg w-full"},Ol,32)]),e("div",Pl,[zl,e("div",Ul,[(s(!0),i(p,null,V(t.filterValues("color"),(l,r)=>(s(),i("label",{key:r,class:"label-colors !p-2 !h-[40px] !capitalize whitespace-pre w-full"},[e("input",{onChange:o[20]||(o[20]=j=>t.applyFilter(j,"color")),value:l,type:"radio",class:m(["input-radio",[l=="silver"&&"on-silver",l=="white"&&"on-white",l=="grey"&&"on-grey",l=="greenDark"&&"on-greenDark",l=="red"&&"on-red",l=="yellow"&&"on-yellow",l=="blue"&&"on-blue",l=="white"&&"on-white",l=="white"&&"on-white"]]),name:"color-redio"},null,42,Gl),he(" "+d(l),1)]))),128))])]),e("div",Kl,[Rl,e("div",Il,[e("input",{onChange:o[21]||(o[21]=l=>t.applyPairFilters(l,"start",D.label.klmtr)),class:"p-2 w-full mt-3 uppercase border border-[#E0E0E0] text-[#858585] rounded-lg",placeholder:"0                                 Kms",type:"number"},null,32),Yl,e("input",{onChange:o[22]||(o[22]=l=>t.applyPairFilters(l,"end")),type:"number",class:"p-2 w-full mt-3 uppercase border border-[#E0E0E0] text-[#858585] rounded-lg",placeholder:"0                                 Kms"},null,32)])])])])],2),e("div",ql,[e("div",Jl,[t.data.length>0?(s(),i("p",Wl,d(t.data.length)+" Vehicles",1)):g("",!0),e("div",Xl,[Ql,e("div",$l,[e("div",eo,[e("button",{onClick:o[23]||(o[23]=l=>t.isOpen=!t.isOpen),class:"flex gap-2 rounded-md shadow-md px-2 bg-white items-center"},[e("p",to,d(t.sortBy),1),lo]),t.isOpen?(s(),i("div",oo,[e("div",{onClick:o[24]||(o[24]=l=>t.setSorBy("Auction Posted")),class:"text-[10px] md:text-sm text-gray-900 hover:bg-base-black hover:text-white block px-4 py-2 cursor-pointer"}," Auction Posted "),e("div",{onClick:o[25]||(o[25]=l=>t.setSorBy("Odometer")),class:"text-[10px] md:text-sm text-gray-900 hover:bg-base-black hover:text-white block px-4 py-2 cursor-pointer"}," Odometer "),e("div",{onClick:o[26]||(o[26]=l=>t.setSorBy("Year")),class:"text-[10px] md:text-sm text-gray-900 hover:bg-base-black hover:text-white block px-4 py-2 cursor-pointer"}," Year ")])):g("",!0)]),e("div",so,[e("div",{onClick:o[27]||(o[27]=(...l)=>t.changeGridTemplate&&t.changeGridTemplate(...l)),class:m([t.changeLayouts?"bg-white":"bg-[#EFF8E0]","p-2 cursor-pointer"])},[(s(),i("svg",io,[e("path",{d:"M19 11V5H5V11H19ZM19 13H5V19H19V13ZM4 3H20C20.2652 3 20.5196 3.10536 20.7071 3.29289C20.8946 3.48043 21 3.73478 21 4V20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8946 20.2652 21 20 21H4C3.73478 21 3.48043 20.8946 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20V4C3 3.73478 3.10536 3.48043 3.29289 3.29289C3.48043 3.10536 3.73478 3 4 3Z",fill:t.changeLayouts?"#09121F":"#7EC600"},null,8,ao)]))],2),e("div",{onClick:o[28]||(o[28]=(...l)=>t.changeGridTemplate&&t.changeGridTemplate(...l)),class:m([t.changeLayouts?"bg-[#EFF8E0]":"bg-white","p-2 flex item-center justify-center cursor-pointer"])},[(s(),i("svg",no,[e("path",{d:"M21 3C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H21ZM11 13H4V19H11V13ZM20 13H13V19H20V13ZM11 5H4V11H11V5ZM20 5H13V11H20V5Z",fill:t.changeLayouts?"#7EC600":"#09121F"},null,8,ro)]))],2)])])])]),e("div",{class:m(["p-2",t.changeLayouts?"grid grid-cols-3 place-content-center place-items-center gap-5":"animate-fade-up  animate-ease-in-out animate-delay-200"])},[(s(!0),i(p,null,V(t.data,(l,r)=>(s(),i("div",{key:r,class:m(["bg-white flex md:mb-7 gap-5 items-start shadow-steps mb-[20%] w-full",t.changeLayouts?"animate-fade-up  animate-ease-in-out animate-delay-200":""])},[(s(),O(P,{key:t.counter,auction:l,changeLayouts:t.changeLayouts,auth:t.auth},null,8,["auction","changeLayouts","auth"]))],2))),128))],2)])]))]),S(e("div",{onClick:o[29]||(o[29]=l=>t.showFilter=!0),class:"fixed md:hidden flex justify-center items-center bottom-2 w-full z-50"},uo,512),[[Ee,!t.showFilter&&t.data.length>0]]),t.statusModal.isActive?(s(),O(_,{key:0,form:t.formData},null,8,["form"])):g("",!0)],64))}const Fo=we(At,[["render",mo]]);export{Fo as default};