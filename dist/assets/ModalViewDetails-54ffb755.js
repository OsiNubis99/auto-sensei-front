import{_ as es,r as h,A as os,b as as,e as ds,k as A,v as k,o as e,c as o,f as t,K as a,l as p,N as i,h as ls,i as Xt,F as M,J as is,n as ns,Q as cs,V as rs,O as $t,U as y,m as ss}from"./index-a0c5c43a.js";import"./modalBids-2ba530fb.js";import{M as ms}from"./modalViewDetails-40921555.js";import{h as ts}from"./moment-fbc5633a.js";import"./pspdfkit-f9915a14.js";import{u as us}from"./auctions-df4bcfce.js";import{B as hs}from"./Basic-8c672395.js";const xs={components:{Basic:hs},setup(C){const d=ms(),F=h(os(()=>"https://s3.us-east-2.amazonaws.com/files.autosensei.ca/")),s=h(!1),u=h(!1),_=h("");h(null),h(null);const x=us(),n=h({step1:!0,step2:!1,step3:!1}),f=()=>{const c=document.createElement("a");c.href=_.value,c.target="_blank",c.download="contect-file.pdf",document.body.appendChild(c),c.click(),document.body.removeChild(c)},b=async c=>{console.log("statusModal.dataAutiont",d.dataAutiont),c==1&&(n.value.step1=!1,n.value.step2=!0,u.value=!0,n.value.step2&&(d.dataAutiont.contract?(_.value="https://apidev.autosensei.ca/files/"+d.dataAutiont.contract,await x.acceptAutions(d.dataAutiont._id,d.dataAutiont.contract)&&(n.value.step1=!1,n.value.step2=!1,n.value.step3=!0,u.value=!1)):rs.get(`/auction/contract/${d.dataAutiont._id}`).then(async r=>{console.log("resPDF",r),_.value="https://apidev.autosensei.ca/files/"+r.data.contract,await x.acceptAutions(d.dataAutiont._id,d.dataAutiont.contract)&&(n.value.step1=!1,n.value.step2=!1,n.value.step3=!0,u.value=!1)})))},w=async()=>{var c,r;u.value=!0;try{await x.autionsDecline(autionModal.value._id)&&(autionModal.value=null,openDecline.value=!1,$t('Successfully declined the final bids. The vehicle has been moved to the "Parked"',{theme:"colored",type:"success",position:"top-center"}),index())}catch(m){$t(((r=(c=m==null?void 0:m.response)==null?void 0:c.data)==null?void 0:r.message)||"error al cargar",{type:"error",position:"top-center"}),u.value=!1}},v=()=>{s.value=!1,n.value.step2};return as(()=>{d.dataAutiont&&(console.log("statusModal.dataAutiont",d.dataAutiont),d.dataAutiont.dropOffDate=ts(d.dataAutiont.dropOffDate).format("DD MMMM YYYY"))}),{steps:n,statusModal:d,cancelAution:w,moment:ts,bucket:F,close:v,modal:s,loading:u,pdfDonwload:f,next:b}}},ps={class:"fixed inset-0 overflow-auto flex items-center z-50 justify-center bg-base-black bg-opacity-50"},_s={class:"w-full overflow-auto h-full md:h-[85%] md:w-[90%] bg-white rounded-lg shadow-xl animation-fade-modal"},fs={class:"p-2 md:p-4 rounded-t-lg bg-[#22282F] flex items-center justify-between"},bs=t("p",{class:"md:text-xl text-xs text-white"},"View Details",-1),ws=t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),vs=[ws],gs={class:"md:p-5 h-modal-review"},Ms={class:"md:border-b pb-2 flex justify-between items-center border-b-[#F0F0F0]"},ys={class:"hidden md:block"},As={class:"text-2xl font-semibold capitalize"},ks={class:"flex gap-1 items-center"},Cs=t("p",null,"|",-1),Fs={key:0,class:"hidden md:flex gap-2 items-center"},Ds=t("button",{class:"btn w-full bg-white border border-error text-error rounded-lg"},"Decline",-1),Vs={key:1,class:"md:hidden p-2 fixed bottom-0 w-full flex bg-white gap-2 items-center"},Ls=t("button",{class:"btn w-full bg-white border border-error text-error rounded-lg"},"Decline",-1),js={class:"border-r flex-col lg:flex-row flex pt-0 border-r-[#F0F0F0]"},Hs={class:"w-full lg:w-[70%] border border-[#E0E0E0] md:border-none p-2 md:p-4"},zs={class:"flex justify-between gap-2 md:hidden"},Zs={class:"w-[60%]"},Bs=["src"],Ys={key:1,class:"md:h-[400px] w-full h-[80px] shadow-xl md:w-full rounded-lg object-cover",src:y,alt:""},Es=ss('<div class="w-full flex flex-col gap-2"><p class="text-xs font-medium">2016 Chevrolet Traverse L</p><p class="text-xs">Ottawa, Ontario</p><p class="text-xs">Approval ends in <span class="text-[#FF9A02]"> 48 Hours </span></p></div>',1),Ns=["src"],Os={key:1,class:"md:h-[400px] w-[30%] h-[80px] shadow-xl hidden md:block md:w-full rounded-lg object-cover",src:y,alt:""},Ts={class:"flex flex-col gap-1"},Ps={class:"grid grid-cols-2 gap-2 pt-4"},Ss={key:0,class:"flex gap-2 items-center"},Is=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"12",viewBox:"0 0 14 12",fill:"none"},[t("path",{d:"M0.332031 0.662267C0.332031 0.296507 0.635571 0 0.993231 0H13.0042C13.3694 0 13.6654 0.296633 13.6654 0.662267V11.3377C13.6654 11.7035 13.3618 12 13.0042 12H0.993231C0.628065 12 0.332031 11.7034 0.332031 11.3377V0.662267ZM2.9987 8V9.33333H10.9987V8H2.9987ZM2.9987 2.66667V6.66667H6.9987V2.66667H2.9987ZM8.33203 2.66667V4H10.9987V2.66667H8.33203ZM8.33203 5.33333V6.66667H10.9987V5.33333H8.33203ZM4.33203 4H5.66536V5.33333H4.33203V4Z",fill:"#858585"})],-1),Rs={class:"text-[10px] md:text-base uppercase"},qs={class:"flex gap-2 items-center"},Ks=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none"},[t("path",{d:"M13.332 8.66667C13.332 10.1394 12.7351 11.4727 11.77 12.4379L12.7128 13.3807C13.9192 12.1743 14.6654 10.5076 14.6654 8.66667C14.6654 4.98477 11.6806 2 7.9987 2C4.3168 2 1.33203 4.98477 1.33203 8.66667C1.33203 10.5076 2.07822 12.1743 3.28465 13.3807L4.22746 12.4379C3.26232 11.4727 2.66536 10.1394 2.66536 8.66667C2.66536 5.72115 5.05318 3.33333 7.9987 3.33333C10.9442 3.33333 13.332 5.72115 13.332 8.66667ZM10.194 5.52865L6.9987 8.33333L8.33203 9.66667L11.1368 6.47145L10.194 5.52865Z",fill:"#858585"})],-1),Us={class:"text-[10px] md:text-base capitalize"},Js={class:"grid grid-cols-2 gap-2 pb-4"},Qs={class:"flex gap-2 items-center"},Ws=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none"},[t("path",{d:"M12.8204 12.4871L13.999 11.3086L15.1774 12.4871C15.8283 13.138 15.8283 14.1933 15.1774 14.8442C14.5266 15.495 13.4713 15.495 12.8204 14.8442C12.1696 14.1933 12.1696 13.138 12.8204 12.4871ZM5.92103 0.71875L13.4635 8.26122C13.7238 8.52156 13.7238 8.94369 13.4635 9.20402L7.80662 14.8609C7.54629 15.1212 7.12415 15.1212 6.86382 14.8609L1.20698 9.20402C0.946632 8.94369 0.946632 8.52156 1.20698 8.26122L6.39243 3.07577L4.97822 1.66156L5.92103 0.71875ZM7.33522 4.01858L2.62119 8.73262H12.0493L7.33522 4.01858Z",fill:"#858585"})],-1),Gs={class:"text-[10px] md:text-base capitalize"},Xs={class:"flex gap-2 items-center"},$s=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none"},[t("path",{d:"M12.6654 13.3327H3.33203V13.9993C3.33203 14.3675 3.03355 14.666 2.66536 14.666H1.9987C1.63051 14.666 1.33203 14.3675 1.33203 13.9993V7.99935L3.00759 3.53118C3.20274 3.01078 3.70024 2.66602 4.25603 2.66602H11.7414C12.2972 2.66602 12.7946 3.01078 12.9898 3.53118L14.6654 7.99935V13.9993C14.6654 14.3675 14.3669 14.666 13.9987 14.666H13.332C12.9638 14.666 12.6654 14.3675 12.6654 13.9993V13.3327ZM2.75603 7.99935H13.2414L11.7414 3.99935H4.25603L2.75603 7.99935ZM4.33203 11.3327C4.88432 11.3327 5.33203 10.8849 5.33203 10.3327C5.33203 9.78042 4.88432 9.33268 4.33203 9.33268C3.77974 9.33268 3.33203 9.78042 3.33203 10.3327C3.33203 10.8849 3.77974 11.3327 4.33203 11.3327ZM11.6654 11.3327C12.2176 11.3327 12.6654 10.8849 12.6654 10.3327C12.6654 9.78042 12.2176 9.33268 11.6654 9.33268C11.1131 9.33268 10.6654 9.78042 10.6654 10.3327C10.6654 10.8849 11.1131 11.3327 11.6654 11.3327Z",fill:"#858585"})],-1),te={class:"text-[10px] md:text-base capitalize"},se={class:"flex gap-2 items-center mb-4"},ee={class:"bg-[#F0F0F0] flex px-2 md:px-5 py-1 gap-1 md:gap-3 rounded-lg items-center"},oe=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 14 14",fill:"none"},[t("path",{d:"M6.99935 12.8327C3.7776 12.8327 1.16602 10.2211 1.16602 6.99935C1.16602 3.7776 3.7776 1.16602 6.99935 1.16602C10.2211 1.16602 12.8327 3.7776 12.8327 6.99935C12.8327 10.2211 10.2211 12.8327 6.99935 12.8327ZM6.41777 9.33268L10.5419 5.20793L9.7171 4.3831L6.41777 7.68302L4.76752 6.03277L3.94268 6.8576L6.41777 9.33268Z",fill:"#0B1107"})],-1),ae={class:"text-[10px] md:text-base capitalize"},de={class:"bg-[#F0F0F0] flex px-2 md:px-5 py-1 gap-1 md:gap-3 rounded-lg items-center"},le=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 14 14",fill:"none"},[t("path",{d:"M6.99935 12.8327C3.7776 12.8327 1.16602 10.2211 1.16602 6.99935C1.16602 3.7776 3.7776 1.16602 6.99935 1.16602C10.2211 1.16602 12.8327 3.7776 12.8327 6.99935C12.8327 10.2211 10.2211 12.8327 6.99935 12.8327ZM6.41777 9.33268L10.5419 5.20793L9.7171 4.3831L6.41777 7.68302L4.76752 6.03277L3.94268 6.8576L6.41777 9.33268Z",fill:"#0B1107"})],-1),ie={class:"text-[10px] md:text-base capitalize"},ne={class:"flex gap-4 w-full"},ce={class:"w-full flex flex-col md:gap-2 bg-[#F7F7F7] h-max p-2 md:p-4 rounded-lg"},re=t("p",{class:"text-xs md:text-sm"},"Auction Status",-1),me={class:"flex gap-2 items-center"},ue={key:0,class:"w-3 h-3 md:w-4 md:h-4 bg-[#05A54B] rounded-full"},he={key:1,class:"w-3 h-3 md:w-4 md:h-4 bg-[#05A54B] rounded-full"},xe={key:2,class:"w-3 h-3 md:w-4 md:h-4 bg-[#1F94F0] rounded-full"},pe={key:3,class:"text-sm md:text-lg font-medium capitalize"},_e={key:4,class:"text-sm md:text-lg font-medium capitalize"},fe={key:0,class:"w-full flex flex-col md:gap-2 bg-[#F7F7F7] h-max p-2 md:p-4 rounded-lg"},be=t("p",{class:"text-xs md:text-sm"},"Total Bid",-1),we={class:"flex gap-2 items-center"},ve={class:"text-sm md:text-lg font-medium capitalize"},ge={key:1,class:"w-full flex flex-col md:gap-2 bg-[#F7F7F7] p-2 md:p-4 rounded-lg"},Me=t("p",{class:"text-xs md:text-sm"},"Final Bids",-1),ye={class:"flex gap-2 items-center"},Ae={class:"text-sm md:text-lg font-medium capitalize"},ke={key:0,class:"w-full md:p-4 border-l border-[#F0F0F0] custom-seccion-scrren"},Ce={class:"flex p-2 items-center gap-4"},Fe=["src"],De={class:"text-sm font-semibold md:text-base"},Ve=t("p",{class:"text-[10px] text-[#858585] md:text-base"},"Oct 20, 2023 at 2:41 AM",-1),Le={class:"flex p-2 md:pb-4"},je=t("div",{class:"flex w-[60%] md:w-full flex-col md:gap-3"},[t("p",{class:"text-xs font-medium md:font-semibold md:text-base"},"User Profile"),t("p",{class:"text-[10px] w-4/5 md:w-full md:text-base"},"This will not be displayed on the seller's page")],-1),He={class:"md:w-full flex flex-col"},ze={class:"flex flex-col md:flex-row md:py-4 border-b border-[#F0F0F0] justify-between items-start md:items-center"},Ze=t("p",{class:"md:font-semibold text-xs md:text-base"},"Full Name",-1),Be={class:"text-[#858585] md:font-semibold text-xs md:text-base"},Ye={class:"flex flex-col md:flex-row py-4 justify-between items-start md:items-center"},Ee=t("p",{class:"md:font-semibold text-xs md:text-base"},"Email Address",-1),Ne={class:"text-[#858585] md:font-semibold text-xs md:text-base"},Oe={class:"flex p-2 border-t border-[#F0F0F0]"},Te=t("div",{class:"flex w-[60%] flex-col gap-1"},[t("p",{class:"text-xs font-medium md:font-semibold md:text-base"},"Dealer Company"),t("p",{class:"text-[10px] w-4/5 md:w-full md:text-base"},"This will be displayed on the seller's page")],-1),Pe={class:"md:w-full flex flex-col"},Se=t("div",{class:"flex flex-col md:flex-row py-2 md:py-4 border-b border-[#F0F0F0] justify-between items-start md:items-center"},[t("p",{class:"md:font-semibold text-xs md:text-base"},"Dealer Name"),t("p",{class:"text-[#858585] md:font-semibold text-xs md:text-base"},"Alex Tuner")],-1),Ie={class:"flex flex-col md:flex-row py-4 justify-between items-start md:items-center"},Re=t("p",{class:"md:font-semibold text-xs md:text-base"},"OMVIC Registration Number",-1),qe={class:"text-[#858585] md:font-semibold text-xs md:text-base"},Ke={class:"flex flex-col md:flex-row py-4 justify-between items-start md:items-center"},Ue=t("p",{class:"md:font-semibold text-xs md:text-base"},"Address",-1),Je={class:"text-[#858585] md:font-semibold text-xs md:text-base"},Qe={class:"flex flex-col md:flex-row py-4 justify-between items-start md:items-center"},We=t("p",{class:"md:font-semibold text-xs md:text-base"},"Phone Number",-1),Ge={class:"text-[#858585] md:font-semibold text-xs md:text-base"},Xe={key:0,class:"block md:hidden fixed bottom-2 p-2 w-full"},$e={key:1,class:"w-full p-2 md:p-4 border-l border-[#F0F0F0]"},to=t("p",{class:"text-md md:font-semibold md:text-xl"},"Dealer Bids",-1),so={class:"h-[50vh] md:p-4 overflow-x-hidden overflow-y-auto"},eo={class:"flex md:pr-4 md:py-3 pb-0 justify-between"},oo={class:"flex"},ao={class:"w-12 h-12 md:h-[60px] md:w-[60px]"},lo=["src"],io={key:1,class:"shadow-xl w-full rounded-lg object-cover",src:y,alt:""},no={class:"flex gap-1 p-2 flex-col items-start"},co={class:"flex gap-2 items-center"},ro={class:"text-xs md:text-base md:font-semibold capitalize w-[70px] md:w-auto truncate"},mo=t("svg",{class:"w-4 h-4 md:w-6 md:h-6",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"none"},[t("path",{d:"M8.66699 11.292V12.6667H12.0003V14H4.00033V12.6667H7.33366V11.292C6.04479 11.1295 4.85954 10.5022 4.00033 9.52783C3.14112 8.55349 2.66701 7.29907 2.66699 6V2H13.3337V6C13.3336 7.29907 12.8595 8.55349 12.0003 9.52783C11.1411 10.5022 9.95586 11.1295 8.66699 11.292ZM0.666992 3.33333H2.00033V6H0.666992V3.33333ZM14.0003 3.33333H15.3337V6H14.0003V3.33333Z",fill:"#05A54B"})],-1),uo=t("p",{class:"md:px-4 md:py-1 py-1 px-2 rounded-full text-[10px] md:text-base bg-[#05A54B] text-white"}," Winner",-1),ho={class:"text-[10px] md:text-lg whitespace-pre"},xo={class:"truncate w-[150px] md:w-fit font-semibold"},po={class:"text-[10px] md:text-lg whitespace-pre"},_o={class:"font-semibold text-sm mt-7 md:mt-0 md:text-[1.5rem]"},fo={key:1,class:"flex w-full h-full justify-center items-center"},bo=t("p",null,"There are no bids in this auction",-1),wo=[bo],vo={class:"fixed inset-0 flex items-end md:items-center z-50 md:justify-center bg-base-black bg-opacity-50"},go={class:"max-w-xl w-full overflow-hidden bg-white rounded-lg shadow-xl animation-fade-modal"},Mo={class:"p-2 md:p-4 rounded-t-lg bg-[#22282F] flex items-center justify-between"},yo={key:0,class:"text-sm md:text-xl text-white"},Ao={key:1,class:"text-sm md:text-xl text-white"},ko={key:2,class:"text-sm md:text-xl text-white"},Co=t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),Fo=[Co],Do={key:0,class:"w-full h-[30vh]"},Vo=ss('<div class="w-full h-full flex justify-center items-center"><div class="absolute top-1/2 left-1/2 -mt-4 -ml-2 h-8 w-4 text-indigo-700"><div class="absolute -left-[30px] z-10 h-[80px] w-[80px]"><div class="animate-bounce"><svg xmlns="http://www.w3.org/2000/svg" class="animate-spin" fill="#c1f861" stroke="#fff" stroke-width="0" viewBox="0 0 16 16"><path d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 4c2.209 0 4 1.791 4 4s-1.791 4-4 4-4-1.791-4-4 1.791-4 4-4zM12.773 12.773c-1.275 1.275-2.97 1.977-4.773 1.977s-3.498-0.702-4.773-1.977-1.977-2.97-1.977-4.773c0-1.803 0.702-3.498 1.977-4.773l1.061 1.061c0 0 0 0 0 0-2.047 2.047-2.047 5.378 0 7.425 0.992 0.992 2.31 1.538 3.712 1.538s2.721-0.546 3.712-1.538c2.047-2.047 2.047-5.378 0-7.425l1.061-1.061c1.275 1.275 1.977 2.97 1.977 4.773s-0.702 3.498-1.977 4.773z"></path></svg></div><p class="text-base-gray font-medium pl-2">Loading...</p></div></div></div>',1),Lo=[Vo],jo={key:0,class:"p-2 md:p-4 flex md:gap-3 flex-col"},Ho={class:"flex justify-start items-center gap-2"},zo={class:"flex gap-3 items-start"},Zo={class:"w-[80px] md:w-[120px] md:h-[90px]"},Bo=["src"],Yo={key:1,class:"shadow-xl w-full h-full rounded-lg object-cover",src:y,alt:""},Eo={class:"flex justify-between flex-col h-full"},No={class:"font-semibold capitalize md:text-base text-sm"},Oo=t("p",{class:"capitalize text-sm md:text-base"},"Final Bid",-1),To={class:"font-medium text-sm text-base-black md:text-2xl"},Po={class:"text-[#666666] mt-1 text-xs md:text-base"},So={class:"mt-2 border-[#E0E0E0] border-t-[1px]"},Io={class:"pt-4"},Ro={class:"text-xs md:text-base"},qo={class:"flex pt-4 gap-2 items-center justify-between"},Ko=t("div",{id:"pspdfkit",style:{width:"100%",height:"90vh"}},null,-1),Uo=[Ko],Jo={key:1,class:"p-4 flex justify-center items-center flex-col gap-3"},Qo=t("p",{class:"font-semibold capitalize md:text-xl"},"Final Bid Approved!",-1),Wo=t("p",{class:"capitalize text-xs md:text-base"},"Download the Actual Sheet Below and Hand It to the Buyer During the Vehicle Drop-Off Process.",-1),Go={class:"w-full"},Xo=["src"];function $o(C,d,F,s,u,_){var n,f,b,w,v,c,r,m,D,V,L,j,H,z,Z,B,Y,E,N,O,T,P,S,I,R,q,K,U,J,Q,W,G,X,$,tt,st,et,ot,at,dt,lt,it,nt,ct,rt,mt,ut,ht,xt,pt,_t,ft,bt,wt,vt,gt,Mt,yt,At,kt,Ct,Ft,Dt,Vt,Lt,jt,Ht,zt,Zt,Bt,Yt,Et,Nt,Ot,Tt,Pt,St,It,Rt,qt,Kt;const x=ds("RouterLink");return A((e(),o("div",ps,[t("div",_s,[t("div",fs,[bs,(e(),o("svg",{onClick:d[0]||(d[0]=l=>s.statusModal.closeModal(!1)),xmlns:"http://www.w3.org/2000/svg",class:"w-6 h-6 md:w-8 md:h-8 cursor-pointer",fill:"none",viewBox:"0 0 24 24",stroke:"#fff"},vs))]),t("div",gs,[t("div",Ms,[t("div",ys,[t("p",As,a((f=(n=s.statusModal.dataAutiont)==null?void 0:n.vehicleDetails)==null?void 0:f.year)+" "+a((w=(b=s.statusModal.dataAutiont)==null?void 0:b.vehicleDetails)==null?void 0:w.make)+" "+a((c=(v=s.statusModal.dataAutiont)==null?void 0:v.vehicleDetails)==null?void 0:c.model),1),t("div",ks,[t("p",null,a((r=s.statusModal.dataAutiont)==null?void 0:r.city)+", "+a((m=s.statusModal.dataAutiont)==null?void 0:m.province),1),Cs,t("p",null,[p("Drop off aggrement: "),t("strong",null,a((D=s.statusModal.dataAutiont)==null?void 0:D.dropOffDate),1)])])]),((V=s.statusModal.dataAutiont)==null?void 0:V.status)=="bids completed"?(e(),o("div",Fs,[t("button",{onClick:d[1]||(d[1]=l=>s.modal=!0),class:"btn w-full bg-primary rounded-lg"},"Accept"),Ds])):i("",!0),((L=s.statusModal.dataAutiont)==null?void 0:L.status)=="bids completed"?(e(),o("div",Vs,[t("button",{onClick:d[2]||(d[2]=l=>s.modal=!0),class:"btn w-full bg-primary rounded-lg"},"Accept"),Ls])):i("",!0)]),t("div",js,[t("div",Hs,[t("div",null,[t("div",zs,[t("div",Zs,[(j=s.statusModal.dataAutiont)!=null&&j.photos?(e(),o("img",{key:0,class:"md:h-[400px] w-full h-[80px] shadow-xl md:w-full rounded-lg object-cover",src:s.bucket+((z=(H=s.statusModal.dataAutiont)==null?void 0:H.photos[0])==null?void 0:z.url),alt:""},null,8,Bs)):(e(),o("img",Ys))]),Es]),(Z=s.statusModal.dataAutiont)!=null&&Z.photos?(e(),o("img",{key:0,class:"md:h-[400px] w-[30%] h-[80px] shadow-xl hidden md:block md:w-full rounded-lg object-cover",src:s.bucket+((Y=(B=s.statusModal.dataAutiont)==null?void 0:B.photos[0])==null?void 0:Y.url),alt:""},null,8,Ns)):(e(),o("img",Os)),t("div",Ts,[t("div",Ps,[(E=s.statusModal.dataAutiont)!=null&&E.vin?(e(),o("div",Ss,[Is,t("p",Rs,a((N=s.statusModal.dataAutiont)==null?void 0:N.vin),1)])):i("",!0),t("div",qs,[Ks,t("p",Us,a((O=s.statusModal.dataAutiont)==null?void 0:O.vehicleDetails.odometer)+" Kilometers",1)])]),t("div",Js,[t("div",Qs,[Ws,t("p",Gs,a((T=s.statusModal.dataAutiont)==null?void 0:T.vehicleDetails.color),1)]),t("div",Xs,[$s,t("p",te,a((P=s.statusModal.dataAutiont)==null?void 0:P.vehicleDetails.driveTrain),1)])])]),t("div",se,[t("div",ee,[oe,t("p",ae,a((S=s.statusModal.dataAutiont)==null?void 0:S.vehicleDetails.tireCondition),1)]),t("div",de,[le,t("p",ie,a((I=s.statusModal.dataAutiont)==null?void 0:I.vehicleDetails.brakeCondition),1)])])]),t("div",ne,[t("div",ce,[re,t("div",me,[((R=s.statusModal.dataAutiont)==null?void 0:R.status)=="completed"?(e(),o("div",ue)):i("",!0),((q=s.statusModal.dataAutiont)==null?void 0:q.status)=="bids completed"?(e(),o("div",he)):i("",!0),((K=s.statusModal.dataAutiont)==null?void 0:K.status)=="live"?(e(),o("div",xe)):i("",!0),((U=s.statusModal.dataAutiont)==null?void 0:U.status)=="bids completed"?(e(),o("p",pe,"Completed")):(e(),o("p",_e,a((J=s.statusModal.dataAutiont)==null?void 0:J.status),1))])]),((Q=s.statusModal.dataAutiont)==null?void 0:Q.status)=="bids completed"?(e(),o("div",fe,[be,t("div",we,[t("p",ve,a((W=s.statusModal.dataAutiont)==null?void 0:W.bids.length)+" Bids",1)])])):i("",!0),((G=s.statusModal.dataAutiont)==null?void 0:G.status)=="completed"?(e(),o("div",ge,[Me,t("div",ye,[t("p",Ae,"$"+a(($=(X=s.statusModal.dataAutiont)==null?void 0:X.bids[0])==null?void 0:$.amount),1)])])):i("",!0)])]),((tt=s.statusModal.dataAutiont)==null?void 0:tt.status)==="completed"?(e(),o("div",ke,[t("div",Ce,[t("img",{class:"w-10 h-10 md:w-16 md:h-16 shadow-lg rounded-lg object-cover",src:s.bucket+((at=(ot=(et=(st=s.statusModal.dataAutiont)==null?void 0:st.bids[0])==null?void 0:et.participant)==null?void 0:ot.dealer)==null?void 0:at.picture),alt:""},null,8,Fe),t("div",null,[t("p",De,a((nt=(it=(lt=(dt=s.statusModal.dataAutiont)==null?void 0:dt.bids[0])==null?void 0:lt.participant)==null?void 0:it.dealer)==null?void 0:nt.name),1),Ve])]),t("div",Le,[je,t("div",He,[t("div",ze,[Ze,t("p",Be,a((ut=(mt=(rt=(ct=s.statusModal.dataAutiont)==null?void 0:ct.bids[0])==null?void 0:rt.participant)==null?void 0:mt.dealer)==null?void 0:ut.name),1)]),t("div",Ye,[Ee,t("p",Ne,a((pt=(xt=(ht=s.statusModal.dataAutiont)==null?void 0:ht.bids[0])==null?void 0:xt.participant)==null?void 0:pt.email),1)])])]),t("div",Oe,[Te,t("div",Pe,[Se,t("div",Ie,[Re,t("p",qe,a((wt=(bt=(ft=(_t=s.statusModal.dataAutiont)==null?void 0:_t.bids[0])==null?void 0:ft.participant)==null?void 0:bt.dealer)==null?void 0:wt.omvic),1)]),t("div",Ke,[Ue,t("p",Je,a((yt=(Mt=(gt=(vt=s.statusModal.dataAutiont)==null?void 0:vt.bids[0])==null?void 0:gt.participant)==null?void 0:Mt.dealer)==null?void 0:yt.address),1)]),t("div",Qe,[We,t("p",Ge,a((Ft=(Ct=(kt=(At=s.statusModal.dataAutiont)==null?void 0:At.bids[0])==null?void 0:kt.participant)==null?void 0:Ct.dealer)==null?void 0:Ft.phone),1)])])]),((Dt=s.statusModal.dataAutiont)==null?void 0:Dt.status)=="completed"?(e(),o("div",Xe,[ls(x,{to:{name:"inbox-seller",query:{id:((Vt=s.statusModal.dataAutiont)==null?void 0:Vt._id)+"-"+((Lt=s.statusModal.dataAutiont)==null?void 0:Lt.bids[0].participant._id)}},class:"btn w-full bg-primary text-base-black"},{default:Xt(()=>[p("Contact Buyer")]),_:1},8,["to"])])):i("",!0)])):(e(),o("div",$e,[to,t("div",so,[((jt=s.statusModal.dataAutiont)==null?void 0:jt.bids.length)>0?(e(!0),o(M,{key:0},is((Ht=s.statusModal.dataAutiont)==null?void 0:Ht.bids,(l,g)=>{var Ut,Jt,Qt,Wt,Gt;return e(),o("div",{key:g,class:ns(g==0&&((Ut=s.statusModal.dataAutiont)==null?void 0:Ut.status)=="bids completed"?"border-[2px] p-2 border-[#05A54B] rounded-lg":"border-[#F0F0F0]  border-b")},[t("div",eo,[t("div",oo,[t("div",ao,[l.participant.dealer.picture?(e(),o("img",{key:0,class:"w-full shadow-lg rounded-lg h-full object-cover",src:s.bucket+l.participant.dealer.picture,alt:""},null,8,lo)):(e(),o("img",io))]),t("div",no,[g==0&&((Jt=s.statusModal.dataAutiont)==null?void 0:Jt.status)=="bids completed"?(e(),o(M,{key:0},[t("div",co,[t("p",ro,a(l.participant.dealer.name),1),mo,uo]),t("p",ho,a(s.moment(l==null?void 0:l.updatedAt).format("MMMM DD YYYY, h: mm: ss a")),1)],64)):(e(),o(M,{key:1},[t("p",xo,a(l.participant.dealer.name),1),t("p",po,a(s.moment(l==null?void 0:l.updatedAt).format("MMMM DD YYYY, h: mm: ssa")),1)],64))])]),t("p",_o,"$"+a(l.amount),1)]),g==0&&((Qt=s.statusModal.dataAutiont)==null?void 0:Qt.status)=="bids completed"?(e(),cs(x,{key:0,to:{name:"inbox-seller",query:{id:((Wt=s.statusModal.dataAutiont)==null?void 0:Wt._id)+"-"+((Gt=s.statusModal.dataAutiont)==null?void 0:Gt.bids[0].participant._id)}},class:"w-full btn border hover:bg-primary transition-all ease-in duration-300 hover:text-white py-2 rounded-lg md:mt-4 border-[#F0F0F0]"},{default:Xt(()=>[p(" Contact Buyer")]),_:1},8,["to"])):i("",!0)],2)}),128)):(e(),o("div",fo,wo))])]))])]),A(t("div",vo,[t("div",go,[t("div",Mo,[s.steps.step1?(e(),o("p",yo,"Accept Auction")):i("",!0),s.steps.step2?(e(),o("p",Ao,"Contract Auction")):i("",!0),s.steps.step3?(e(),o("p",ko,"Download Contract")):i("",!0),(e(),o("svg",{onClick:d[3]||(d[3]=(...l)=>s.close&&s.close(...l)),xmlns:"http://www.w3.org/2000/svg",class:"w-6 h-8 md:w-8 md:h-8 cursor-pointer",fill:"none",viewBox:"0 0 24 24",stroke:"#fff"},Fo))]),s.loading?(e(),o("div",Do,Lo)):(e(),o(M,{key:1},[s.steps.step1?(e(),o("div",jo,[t("div",Ho,[t("div",zo,[t("div",Zo,[(zt=s.statusModal.dataAutiont)!=null&&zt.photos?(e(),o("img",{key:0,class:"w-full h-full shadow-xl rounded-lg object-cover",src:s.bucket+((Zt=s.statusModal.dataAutiont)==null?void 0:Zt.photos[0].url),alt:""},null,8,Bo)):(e(),o("img",Yo))]),t("div",Eo,[t("p",No,a((Yt=(Bt=s.statusModal.dataAutiont)==null?void 0:Bt.vehicleDetails)==null?void 0:Yt.year)+" "+a((Nt=(Et=s.statusModal.dataAutiont)==null?void 0:Et.vehicleDetails)==null?void 0:Nt.make)+" "+a((Tt=(Ot=s.statusModal.dataAutiont)==null?void 0:Ot.vehicleDetails)==null?void 0:Tt.model),1),Oo,t("p",To,[p("$"+a((St=(Pt=s.statusModal.dataAutiont)==null?void 0:Pt.bids[0])==null?void 0:St.amount)+"/",1),t("span",Po,a((Rt=(It=s.statusModal.dataAutiont)==null?void 0:It.bids)==null?void 0:Rt.length)+" Bids",1)])])])]),t("div",So,[t("div",Io,[t("p",Ro,[p("Are you sure you want to accept the final bid for the "),t("strong",null,a((Kt=(qt=s.statusModal.dataAutiont)==null?void 0:qt.vehicleDetails)==null?void 0:Kt.model),1),p("? ")]),t("div",qo,[t("button",{onClick:d[4]||(d[4]=(...l)=>s.close&&s.close(...l)),class:"btn w-full border border-[#E0E0E0]"},"No"),t("button",{onClick:d[5]||(d[5]=l=>s.next(1)),class:"btn w-full bg-primary rounded-md"},"Yes")])])])])):i("",!0),A(t("div",null,Uo,512),[[k,s.steps.step2]]),s.steps.step3?(e(),o("div",Jo,[Qo,Wo,t("div",Go,[t("iframe",{class:"w-full h-[60vh]",src:C.showPdf,frameborder:"0"},null,8,Xo)]),t("button",{onClick:d[6]||(d[6]=(...l)=>s.pdfDonwload&&s.pdfDonwload(...l)),class:"btn w-full bg-primary rounded-md"}," Download PDF ")])):i("",!0)],64))])],512),[[k,s.modal]])])],512)),[[k,s.statusModal.isActive]])}const ia=es(xs,[["render",$o]]);export{ia as M};