import{_ as oe,r as C,A as de,L as ie,w as re,b as ne,e as ue,k as O,v as ce,o,c as d,f as a,N as m,n as v,F as j,K as x,R as ee,D as te,J as me,Q as fe,i as ae,l as K,h as pe,O as se,m as be}from"./index-0a18019c.js";import{u as Ce,C as he}from"./CurrencyInput-305a7f99.js";import{M as ve}from"./modalBids-bd218ea1.js";import{u as xe}from"./auctions-f471344c.js";import{_ as ye}from"./image-0fc6b0a0.js";const le=(c,l,k,e,B,t,i)=>{let u={};return l.step1&&(e=="autoBid"&&(console.log("entro autoBid"),c.placeyourbid?c.placeyourbid==0?u.placeyourbid="Required field":c.placeyourbid<=k&&(u.placeyourbid="Your bid is less than the minimum bid"):u.placeyourbid="Required field"),e=="bidNow"&&(console.log("entro bidNow"),c.placeyourbid?c.placeyourbid==0?u.placeyourbid="Required field":c.placeyourbid<=k&&(console.log("form.placeyourbid",c.placeyourbid),u.placeyourbid="Your bid is less than the minimum bid"):u.placeyourbid="Required field")),l.step2&&(console.log("showPayment",B),B?(c.cardNumber||(u.cardNumber="Required field"),c.nameOnCard||(u.nameOnCard="Required field"),c.expiryDate||(u.expiryDate="Required field"),c.cvv||(u.cvv="Required field"),c.saveCard||(u.saveCard="Required field"),c.termsConditions||(u.termsConditions="Required field")):(c.termsConditions||(u.termsConditions="Required field"),t||(u.creditCard="Required field"))),u},Zt=(c,l,k,e,B)=>{let t={};return c.placeyourbid?c.placeyourbid<=k&&(t.placeyourbid="Your bid is less than the minimum bid"):t.placeyourbid="Required field",t},_e="/assets/credit-card-new-73a7a571.svg",ge={props:{form:{type:Object},index:{type:Function}},setup(c){const{inputRef:l}=Ce({currency:"USD"}),k=C(!0),e=C(!1),B=C(""),t=C(c.form),i=ve(),u=C(0),g=C(null),D=C(null),_=C(!1),A=C(!1),R=xe(),V=C(de(()=>"https://s3.us-east-2.amazonaws.com/files.autosensei.ca/")),M=ie(),h=C(null),w=C(null),F=()=>{if(w.value){let s=t.value.placeyourbid;t.value.placeyourbid=parseInt(s)+parseInt(100),console.log("formData.value.placeyourbid",t.value.placeyourbid)}else console.log("paso 2",t.value.placeyourbid=w.value+=100),w.value=i.data.vehicleDetails.basePrice,t.value.placeyourbid=w.value+=100;console.log("PEPEE ",t.value.placeyourbid),g.value=le(t.value,n.value,i.data.vehicleDetails.basePrice,i.from,_.value,h.value,M.userData),D.value=Object.entries(g.value).length},n=C({step1:!0,step2:!1,step3:!1}),Z=s=>{switch(n.value.step1=!0,n.value.step2=!1,s){case 1:n.value.step1=!0,n.value.step2=!1,n.value.step3=!1,e.value=!1,t.value.cardNumber=void 0,t.value.creditCard=void 0,t.value.cvv=void 0,t.value.expiryDate=void 0,t.value.nameOnCard=void 0,t.value.notify=void 0,t.value.saveCard=void 0,t.value.termsConditions=!1,h.value=null;break;case 2:n.value.step1=!1,n.value.step2=!0,n.value.step3=!1;break}},q=async s=>{var p,f,b,P,S,E;switch(s){case 1:n.value.step1=!1,n.value.step2=!0,n.value.step3=!1,D.value=null;break;case 2:n.value.step1=!1,n.value.step2=!1,n.value.step3=!0;break;case 3:let L=null;if(i.from=="autoBid"){let y=(f=(p=i.data)==null?void 0:p.bids[0])==null?void 0:f.amount;y||(y=(P=(b=i==null?void 0:i.data)==null?void 0:b.vehicleDetails)==null?void 0:P.basePrice);let N=y+100;t.value.placeyourbid<N&&(N=t.value.placeyourbid),L={amount:N,biddingLimit:t.value.placeyourbid,idPaymentMethod:h.value._id}}else L={amount:t.value.placeyourbid,idPaymentMethod:h.value._id};A.value=!0;try{await R.autionsBit({uuid:i.data._id,payload:L})}catch(y){se(((E=(S=y==null?void 0:y.response)==null?void 0:S.data)==null?void 0:E.message)||"An error has occurred",{type:"error"}),A.value=!1}finally{A.value=!1,i.isActive=!1,n.value.step1=!0,n.value.step2=!1,n.value.step3=!1,e.value=!1,t.value.cardNumber=void 0,t.value.creditCard=void 0,t.value.cvv=void 0,t.value.expiryDate=void 0,t.value.nameOnCard=void 0,t.value.notify=void 0,t.value.saveCard=void 0,t.value.termsConditions=!1,h.value=null,t.value.placeyourbid=null,se("Successfully placed bid",{type:"success",position:"top-center",theme:"colored"})}break}},z=s=>{let p=s.target.value;p&&(t.value.cardNumber=p.replaceAll(" ","").split("").map((f,b)=>(s.target.value=s.target.value.replace(/[^0-9]+/g,""),b>0&&b%4==0?" "+f:f)).join(""))},H=s=>{s.target.value=s.target.value.replace(/[^0-9]+/g,"");let p=s.target.value;t.value.cardNumber=p.replaceAll(" ","").split("").map((f,b)=>b>0&&b%4==0?" "+f:f).join("")},Y=s=>{var f;const p=s.keyCode||s.charCode;((f=t.value.expiryDate)==null?void 0:f.length)==2&&(t.value.expiryDate=t.value.expiryDate+"/"),(p==8||p==46)&&t.value.expiryDate.length===4&&(t.value.expiryDate=t.value.expiryDate.slice(0,3))},U=s=>{let p=String.fromCharCode(s.keyCode);if(/^[a-zA-Z\s]*$/.test(p))return!0;s.preventDefault()},I=()=>{i.closeModal(!1),t.value.placeyourbid=0,t.value.cardNumber=void 0,t.value.nameOnCard=void 0,t.value.expiryDate=void 0,t.value.cvv=void 0,t.value.saveCard=void 0,t.value.termsConditions=void 0,t.value.notify=void 0,t.value.creditCard=void 0,w.value=null},T=s=>{console.log("card",s),t.value.termsConditions=void 0,h.value=s,e.value=!1},G=s=>{s=="add-card"?_.value=!0:_.value=!1,e.value=!1,t.value.cardNumber=void 0,t.value.creditCard=void 0,t.value.cvv=void 0,t.value.expiryDate=void 0,t.value.nameOnCard=void 0,t.value.notify=void 0,t.value.saveCard=void 0,t.value.termsConditions=!1,h.value=null};return re(t.value,async(s,p)=>{var f,b;g.value=le(t.value,n.value,i.data.vehicleDetails.basePrice,i.from,_.value,h.value,M.userData),D.value=Object.entries(g.value).length,s.placeyourbid>((b=(f=i==null?void 0:i.data)==null?void 0:f.vehicleDetails)==null?void 0:b.basePrice)&&(u.value+=1)}),ne(()=>{if(console.log("statusModal.data",i),!M.userData.paymentMethods.length>0&&(_.value=!0),i.data.bids[0]){i.data.vehicleDetails.basePrice=i.data.bids[0].amount;const s=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"});i.data.amountBid=s==null?void 0:s.format(i.data.amountBid)}}),{isOpen:k,openDropdown:e,formData:t,next:q,back:Z,value:B,addAmount:F,counterKey:u,sizeObjet:D,invalid:g,steps:n,formatCardNumber:z,statusModal:i,authStore:M,closet:I,bucket:V,filterinput:H,isLetter:U,formatExpiryDate:Y,itemCard:h,getCard:T,showPayment:_,showOptionNewPaymtent:G,inputRef:l}},components:{CurrencyInput:he}},we={class:"fixed z-[100] inset-0 flex items-end md:items-center justify-center bg-base-black bg-opacity-50"},ke={class:"w-full md:w-auto md:max-w-xl overflow-auto bg-white rounded-lg shadow-xl animation-fade-modal"},De={class:"md:p-4 p-2 rounded-t-lg bg-base-black flex items-center justify-between"},Me={key:0,class:"text-sm md:text-xl text-white"},Be={key:1,class:"text-sm md:text-xl text-white"},Ae=a("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),Le=[Ae],Ne={key:0,class:"md:p-4 p-2 flex gap-3 pb-2 flex-col"},je={class:"flex justify-start items-center gap-2"},Pe=a("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none"},[a("path",{d:"M8.78145 8.00048L5.48145 4.70048L6.42411 3.75781L10.6668 8.00048L6.42411 12.2431L5.48145 11.3005L8.78145 8.00048Z",fill:"#858585"})],-1),Se={class:"flex gap-3 items-start border-b border-[#E0E0E0] p-2 md:p-5"},Ee={class:"w-[80px] md:w-[120px] md:h-[90px]"},Oe=["src"],Re={key:1,class:"shadow-xl w-full h-full rounded-lg object-cover",src:ye,alt:""},Ve={class:"md:h-full flex justify-between flex-col"},Fe={class:"font-semibold text-sm :text-base"},Ze=a("p",{class:"capitalize text-sm md:text-base mt-4"},"Current Bid",-1),qe={key:0,class:"font-medium text-lg md:text-2xl text-base-black"},ze={key:1,class:"font-medium text-2xl text-base-black"},He={key:2,class:"font-medium text-2xl text-base-black"},Ye={key:0,class:"md:p-5 p-2"},Ue=a("div",{class:"flex gap-1 flex-col justify-start"},[a("p",{class:"font-semibold text-sm md:text-base"},"Maximum Bid Amount"),a("p",{class:"text-xs md:text-base"},"Please enter a price higher than the current bid")],-1),Ie=["placeHolder"],Te={class:"text-[#858585] text-xs md:text-base mt-2"},Ge={class:"form-group md:mt-4"},Ke=a("label",{class:"text-xs md:text-base",for:"html"},"Notify me when the current bid approaches my maximum bid amount",-1),Qe={key:1,class:"mt-2 p-5 flex items-center gap-4 border-[#E0E0E0] border-t-[1px]"},Je={class:"w-full relative flex flex-col gap-2"},We=a("label",{class:"text-base font-medium"},"Place your bid",-1),Xe={key:0,class:"text-[#FF333E] whitespace-pre absolute -bottom-8"},$e={class:"md:p-5 p-2 pt-0"},et=["disabled"],tt={class:"md:p-5 p-2 pt-0"},at={class:"text-xs md:text-base"},st={key:0},lt={key:1},ot={class:"custom-payment"},dt=a("label",{class:"font-semibold text-sm md:text-base text-[#0B1107]",for:""},"Credit Card",-1),it={class:"navbar-right w-full relative"},rt={key:0,class:"p-2 text-xs md:text-[16px] pb-1"},nt={key:1,class:"p-2 text-xs md:text-[16px] pb-1"},ut=["onClick"],ct={class:"text-base-black text-start text-xs md:text-base w-full"},mt={class:"text-base-black text-end text-xs md:text-base w-full"},ft={class:"form-group"},pt=a("label",{for:"css",class:"text-xs md:text-base"},[K("Please agree to our "),a("a",{href:"#",class:"font-semibold underline"},"Terms & Conditions"),K(" to proceed.")],-1),bt=a("div",{class:"flex justify-center items-center"},[a("img",{class:"w-20 h-20 md:w-40 md:h-40",src:_e,alt:""})],-1),Ct={class:"flex flex-col items-center gap-2"},ht=a("p",{class:"text-xs md:text-base"},"You do not have payment methods you must add one to bid, In the profile section you can add a payment method",-1),vt={class:"p-5 flex gap-4"},xt=a("svg",{xmlns:"http://www.w3.org/2000/svg",width:"17",height:"17",viewBox:"0 0 17 17",fill:"none"},[a("path",{d:"M5.7185 7.83312H13.8332V9.16645H5.7185L9.2945 12.7425L8.35184 13.6851L3.1665 8.49979L8.35184 3.31445L9.2945 4.25712L5.7185 7.83312Z",fill:"#0B1107"})],-1),yt=a("p",null,"Back",-1),_t=[xt,yt],gt=a("svg",{xmlns:"http://www.w3.org/2000/svg",width:"17",height:"17",viewBox:"0 0 17 17",fill:"none"},[a("path",{d:"M5.7185 7.83312H13.8332V9.16645H5.7185L9.2945 12.7425L8.35184 13.6851L3.1665 8.49979L8.35184 3.31445L9.2945 4.25712L5.7185 7.83312Z",fill:"#0B1107"})],-1),wt=a("p",null,"Select card",-1),kt=[gt,wt],Dt=["disabled"],Mt={key:0},Bt={key:1},At=be('<div class="flex gap-3 items-center justify-center flex-col p-5"><svg xmlns="http://www.w3.org/2000/svg" width="89" height="108" viewBox="0 0 89 108" fill="none"><g clip-path="url(#clip0_8_16708)"><path d="M88.2951 37.1809C88.2875 54.7651 77.6828 73.1181 62.8119 83.7228C58.1766 91.6896 53.5488 99.6489 48.9209 107.616C45.3936 103.757 41.8586 99.8901 38.3312 96.0386C37.276 94.8854 36.2284 93.7397 35.1732 92.5865C32.9422 92.4283 30.8091 92.0288 28.7967 91.4108C27.5305 91.0339 26.3019 90.5666 25.1337 90.0013C24.0785 89.4963 23.0609 88.931 22.0886 88.2979C21.9454 88.1999 21.7947 88.1095 21.6515 88.019C19.82 86.7603 18.1542 85.268 16.692 83.5495C12.2225 78.3262 9.59957 71.0604 9.58449 62.3173C9.56188 39.6455 27.1536 15.6246 48.9059 8.66779C56.0511 6.38403 62.7667 6.22575 68.5402 7.86131C70.2587 8.34369 71.9018 8.98435 73.4393 9.79082C82.5065 14.4186 88.3102 24.1717 88.3026 37.1884L88.2951 37.1809Z" fill="#508817"></path><path d="M88.2951 37.1809C88.2875 54.7651 77.6828 73.1256 62.8119 83.7229C58.1766 91.6897 53.5488 99.6564 48.9285 107.623H48.9209C46.8708 105.37 44.8207 103.131 42.7631 100.885C42.2656 100.342 41.7757 99.8072 41.2783 99.2645C40.7281 98.6615 40.1703 98.0586 39.6201 97.4556C39.1905 96.9883 38.7609 96.5134 38.3312 96.0461C37.276 94.8929 36.2284 93.7398 35.1732 92.5941C34.0351 92.5187 32.9195 92.368 31.8417 92.1645C31.7814 92.157 31.7211 92.1494 31.6608 92.1343C30.9448 91.9987 30.2363 91.8329 29.5504 91.6369C29.2942 91.5691 29.0455 91.4937 28.7967 91.4183C27.5305 91.0415 26.3095 90.5742 25.1337 90.0089C24.0785 89.5039 23.0609 88.9386 22.0886 88.2979C21.9454 88.2075 21.7947 88.1095 21.6515 88.0191C21.4254 87.8608 21.1993 87.7025 20.9731 87.5367C20.9656 87.5291 20.9505 87.5216 20.943 87.5141C19.6768 86.5795 18.4934 85.5167 17.4005 84.3485C17.2799 84.2128 17.1593 84.0771 17.0312 83.9339C16.9182 83.8058 16.8051 83.6776 16.692 83.5495C12.2225 78.3263 9.59203 71.0604 9.58449 62.3098C9.56188 39.6455 27.1536 15.6246 48.9059 8.66027C56.0511 6.38405 62.7592 6.22576 68.5402 7.85379C68.7964 7.92916 69.0527 8.00454 69.3014 8.07991C70.2587 8.38139 71.1782 8.7281 72.0751 9.12757C72.5424 9.33108 72.9946 9.54965 73.4393 9.78331C73.4695 9.79838 73.5072 9.81345 73.5373 9.83607C74.4116 10.2883 75.2558 10.7857 76.0623 11.336C76.7029 11.7656 77.3285 12.2329 77.924 12.7228C77.9315 12.7303 77.9466 12.7303 77.9541 12.7454H77.9616C84.3833 17.9988 88.3026 26.4932 88.2875 37.1809H88.2951Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path><path d="M48.9208 107.615C45.9963 105.49 43.0644 103.364 40.14 101.231H40.1324C38.0823 98.9777 36.0322 96.7391 33.9746 94.493C33.2661 93.7167 32.55 92.9404 31.8416 92.1641C32.9194 92.3676 34.0349 92.5183 35.173 92.5937C36.2282 93.7393 37.2758 94.8925 38.3311 96.0457C38.7607 96.513 39.1903 96.9878 39.6199 97.4552C40.1701 98.0581 40.7279 98.6611 41.2781 99.2641C41.7755 99.8067 42.2655 100.342 42.7629 100.885C44.8205 103.131 46.8707 105.369 48.9208 107.615Z" fill="#BDF461"></path><path d="M48.9208 107.615C45.9963 105.49 43.0644 103.364 40.14 101.231H40.1324C38.0823 98.9777 36.0322 96.7391 33.9746 94.493C33.2661 93.7167 32.55 92.9404 31.8416 92.1641C32.9194 92.3676 34.0349 92.5183 35.173 92.5937C36.2282 93.7393 37.2758 94.8925 38.3311 96.0457C38.7607 96.513 39.1903 96.9878 39.6199 97.4552C40.1701 98.0581 40.7279 98.6611 41.2781 99.2641C41.7755 99.8067 42.2655 100.342 42.7629 100.885C44.8205 103.131 46.8707 105.369 48.9208 107.615Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path><path d="M51.0388 23.6822C55.7571 22.0316 59.2543 22.1145 61.5607 23.9083C63.8444 25.6795 64.9826 28.5512 64.9826 32.5233C64.9826 34.6412 64.7715 36.5029 64.3494 38.1083C63.9274 39.7213 63.2339 41.3719 62.2692 43.0602C61.3044 44.7636 60.0231 46.7761 58.4403 49.1277C56.6163 51.7883 55.335 53.8158 54.5963 55.2177C53.8577 56.6196 53.4884 57.8708 53.4884 58.9787V60.0038L44.3383 63.7648V62.167C44.3383 59.8229 44.8734 57.4713 45.9361 55.1272C46.9989 52.7907 48.6797 50.1376 50.9785 47.1831C52.3277 45.4495 53.315 44.0175 53.9331 42.8794C54.5587 41.7488 54.9581 40.7162 55.139 39.7816C55.3199 38.847 55.4179 37.8295 55.4179 36.729C55.4179 35.0482 54.83 33.993 53.6542 33.5634C52.4709 33.1263 51.0388 33.2167 49.358 33.8272C47.6772 34.4377 46.2 35.1914 44.6774 36.1788C43.1474 37.1662 41.542 38.4776 39.8537 40.1208L36.3489 32.7268C38.7834 30.5109 41.1048 28.7095 43.3132 27.3151C45.5065 25.9358 48.0842 24.7223 51.0388 23.6973V23.6822ZM49.3656 81.0475C47.6772 81.7937 46.2376 81.9143 45.0468 81.4018C43.8559 80.8893 43.2605 79.4497 43.2605 77.1056C43.2605 74.7616 43.8559 72.6738 45.0468 71.1814C46.2301 69.6966 47.6697 68.5962 49.3656 67.8877C51.0614 67.1792 52.3955 67.0963 53.5562 67.5786C54.7094 68.061 55.2822 69.5082 55.2822 71.9125C55.2822 74.2189 54.7094 76.1333 53.5562 77.6634C52.3955 79.2009 51.0087 80.3315 49.3731 81.0551L49.3656 81.0475Z" fill="white"></path><path d="M51.0388 23.6822C55.7571 22.0316 59.2543 22.1145 61.5607 23.9083C63.8445 25.6795 64.9826 28.5512 64.9826 32.5233C64.9826 34.6412 64.7715 36.5029 64.3494 38.1083C63.9274 39.7213 63.2339 41.3719 62.2692 43.0602C61.3044 44.7636 60.0231 46.7761 58.4403 49.1277C56.6163 51.7883 55.335 53.8158 54.5963 55.2177C53.8577 56.6196 53.4884 57.8708 53.4884 58.9787V60.0038L44.3383 63.7648V62.167C44.3383 59.8229 44.8734 57.4713 45.9361 55.1272C46.9989 52.7907 48.6797 50.1376 50.9785 47.1831C52.3277 45.4495 53.315 44.0175 53.9331 42.8794C54.5587 41.7488 54.9581 40.7162 55.139 39.7816C55.3199 38.847 55.4179 37.8295 55.4179 36.729C55.4179 35.0482 54.83 33.993 53.6542 33.5634C52.4709 33.1263 51.0388 33.2167 49.358 33.8272C47.6772 34.4377 46.2 35.1914 44.6774 36.1788C43.1474 37.1662 41.542 38.4776 39.8537 40.1208L36.3489 32.7268C38.7834 30.5109 41.1048 28.7095 43.3132 27.3151C45.5065 25.9358 48.0842 24.7223 51.0388 23.6973V23.6822ZM49.3656 81.0475C47.6772 81.7937 46.2376 81.9143 45.0468 81.4018C43.8559 80.8893 43.2605 79.4497 43.2605 77.1056C43.2605 74.7616 43.8559 72.6738 45.0468 71.1814C46.2301 69.6966 47.6697 68.5962 49.3656 67.8877C51.0614 67.1792 52.3955 67.0963 53.5562 67.5786C54.7094 68.061 55.2822 69.5082 55.2822 71.9125C55.2822 74.2189 54.7094 76.1333 53.5562 77.6634C52.3955 79.2009 51.0087 80.3315 49.3731 81.0551L49.3656 81.0475Z" stroke="black" stroke-miterlimit="10"></path><path d="M0.796164 55.9182C0.773553 33.2539 18.3653 9.233 40.1175 2.26867C47.2628 -0.0075565 53.9709 -0.165837 59.7519 1.46219C60.0081 1.53756 60.2644 1.61293 60.5131 1.68831C61.9603 2.14053 63.3396 2.70582 64.651 3.3917C64.6812 3.40678 64.7188 3.42185 64.749 3.44446C65.6685 3.91931 66.5504 4.45444 67.4021 5.03481C67.4925 5.0951 67.5905 5.16294 67.681 5.23077C67.9146 5.39659 68.1483 5.56241 68.3744 5.73576C70.937 7.59744 73.4996 9.46666 76.0623 11.3359C75.2558 10.7857 74.4116 10.2882 73.5373 9.83598C73.5072 9.81337 73.4695 9.79829 73.4393 9.78322C72.9947 9.54957 72.5424 9.33099 72.0751 9.12749C71.1782 8.72801 70.2587 8.38131 69.3014 8.07982C69.0527 8.00445 68.7965 7.92908 68.5402 7.8537C62.7592 6.22568 56.0511 6.38396 48.9059 8.66018C27.1536 15.6245 9.56188 39.6455 9.5845 62.3097C9.59203 71.0603 12.2225 78.3262 16.692 83.5494C16.8051 83.6776 16.9182 83.8057 17.0312 83.9338C17.1593 84.077 17.2799 84.2127 17.4005 84.3484C18.4934 85.5166 19.6768 86.5794 20.943 87.514C18.2522 85.5543 15.5539 83.5871 12.8632 81.6275C12.637 81.4692 12.4109 81.3109 12.1848 81.1451C12.1773 81.1375 12.1622 81.13 12.1547 81.1225C10.8884 80.1879 9.70509 79.1251 8.6122 77.9569C8.37855 77.6931 8.13736 77.4293 7.90371 77.1579C3.43417 71.9347 0.803702 64.6688 0.796164 55.9182Z" fill="#BDF461"></path><path d="M0.796164 55.9182C0.773553 33.2539 18.3653 9.23301 40.1175 2.26867C47.2628 -0.0075565 53.9709 -0.165837 59.7519 1.46219C60.0081 1.53756 60.2644 1.61293 60.5131 1.68831C61.9602 2.14054 63.3395 2.70582 64.651 3.3917C64.6812 3.40678 64.7188 3.42185 64.749 3.44446C65.6685 3.91931 66.5504 4.45444 67.4021 5.03481C67.4925 5.0951 67.5905 5.16294 67.681 5.23077C67.9146 5.39659 68.1483 5.56241 68.3744 5.73576C70.937 7.59744 73.4996 9.46666 76.0623 11.3359C75.2558 10.7857 74.4116 10.2882 73.5373 9.83598C73.5072 9.81337 73.4695 9.79829 73.4393 9.78322C72.9947 9.54957 72.5424 9.33099 72.0751 9.12748C71.1782 8.72802 70.2587 8.38131 69.3014 8.07982C69.0527 8.00445 68.7965 7.92908 68.5402 7.8537C62.7592 6.22568 56.0511 6.38396 48.9059 8.66018C27.1536 15.6245 9.56189 39.6455 9.5845 62.3097C9.59203 71.0603 12.2225 78.3262 16.692 83.5494C16.8051 83.6776 16.9182 83.8057 17.0312 83.9338C17.1593 84.077 17.2799 84.2127 17.4005 84.3484C18.4934 85.5166 19.6768 86.5794 20.943 87.514C18.2522 85.5543 15.5539 83.5871 12.8632 81.6275C12.637 81.4692 12.4109 81.3109 12.1848 81.1451C12.1773 81.1375 12.1622 81.13 12.1547 81.1225C10.8884 80.1879 9.70509 79.1251 8.6122 77.9569C8.37855 77.6931 8.13736 77.4293 7.90371 77.1579C3.43417 71.9347 0.803702 64.6688 0.796164 55.9182Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_8_16708"><rect width="88.2526" height="108" fill="white" transform="translate(0.419189)"></rect></clipPath></defs></svg><p class="text-sm md:text-base text-center font-semibold">You&#39;re all set! Let&#39;s keep your bids winning</p><p class="text-sm md:text-base text-center">Give your maximum bid amount and save the time of watching the bid constantly with auto bid. Are you sure you want to set Auto Bid on this auction ? You can change your Auto Bid later as well.</p></div>',1),Lt={class:"flex p-4 gap-3"},Nt=a("p",null,"No",-1),jt=[Nt];function Pt(c,l,k,e,B,t){var u,g,D,_,A,R,V,M,h,w,F,n,Z,q,z,H,Y,U,I,T,G,s,p,f,b,P,S,E,L,y,N,J,W;const i=ue("RouterLink");return O((o(),d("div",we,[a("div",ke,[a("div",De,[e.statusModal.from=="autoBid"?(o(),d("p",Me,"Auto Bid")):m("",!0),e.statusModal.from=="bidNow"?(o(),d("p",Be,"Bid Now")):m("",!0),(o(),d("svg",{onClick:l[0]||(l[0]=(...r)=>e.closet&&e.closet(...r)),xmlns:"http://www.w3.org/2000/svg",class:"w-6 h-8 md:w-8 md:h-8 cursor-pointer",fill:"none",viewBox:"0 0 24 24",stroke:"#fff"},Le))]),e.steps.step1||e.steps.step2?(o(),d("div",Ne,[a("div",je,[a("p",{class:v(["text-xs md:text-base",e.steps.step1?"text-base-black font-semibold":"text-[#858585]"])},"Select Amount",2),Pe,a("p",{class:v(["text-xs md:text-base",e.steps.step2?"text-base-black font-semibold":"text-[#858585]"])},"Payment",2)])])):m("",!0),e.steps.step1?(o(),d(j,{key:1},[a("div",Se,[a("div",Ee,[(u=e.statusModal.data)!=null&&u.photos?(o(),d("img",{key:0,class:"w-full h-full shadow-lg rounded-lg object-cover",src:e.bucket+((g=e.statusModal.data)==null?void 0:g.photos[0].url),alt:""},null,8,Oe)):(o(),d("img",Re))]),a("div",Ve,[a("p",Fe,x((_=(D=e.statusModal.data)==null?void 0:D.vehicleDetails)==null?void 0:_.year)+" "+x((R=(A=e.statusModal.data)==null?void 0:A.vehicleDetails)==null?void 0:R.make)+" "+x((M=(V=e.statusModal.data)==null?void 0:V.vehicleDetails)==null?void 0:M.model),1),a("div",null,[Ze,(w=(h=e.statusModal.data)==null?void 0:h.bids[0])!=null&&w.amount?(o(),d("p",qe," $"+x(e.statusModal.data.bids[0].amount),1)):(n=(F=e.statusModal.data)==null?void 0:F.vehicleDetails)!=null&&n.basePrice?(o(),d("p",ze," $"+x((q=(Z=e.statusModal.data)==null?void 0:Z.vehicleDetails)==null?void 0:q.basePrice),1)):(o(),d("p",He,"0$"))])])]),e.statusModal.from=="autoBid"?(o(),d("div",Ye,[Ue,O(a("input",{class:v(["p-2 w-full rounded-lg border border-[#C2C2C2] uppercase",((z=e.invalid)==null?void 0:z.placeyourbid)&&"bg-[#F6E9E9] border border-[#FF333E] text-[#0A0A0A]"]),"onUpdate:modelValue":l[1]||(l[1]=r=>e.formData.placeyourbid=r),ref:"inputRef",type:"text",placeHolder:`$ Min ${(Y=(H=e.statusModal.data)==null?void 0:H.bids[0])!=null&&Y.amount?(I=(U=e.statusModal.data)==null?void 0:U.bids[0])==null?void 0:I.amount:(s=(G=(T=e.statusModal)==null?void 0:T.data)==null?void 0:G.vehicleDetails)==null?void 0:s.basePrice}`},null,10,Ie),[[ee,e.formData.placeyourbid]]),a("p",Te,x((p=e.invalid)==null?void 0:p.placeyourbid),1),a("div",Ge,[O(a("input",{type:"checkbox","onUpdate:modelValue":l[2]||(l[2]=r=>e.formData.notify=r),id:"html"},null,512),[[te,e.formData.notify]]),Ke])])):m("",!0),e.statusModal.from=="bidNow"?(o(),d("div",Qe,[a("div",Je,[We,O(a("input",{class:v(["p-2 rounded-lg border border-[#C2C2C2] uppercase",((f=e.invalid)==null?void 0:f.placeyourbid)&&"bg-[#F6E9E9] border border-[#FF333E] text-[#0A0A0A]"]),"onUpdate:modelValue":l[3]||(l[3]=r=>e.formData.placeyourbid=r),ref:"inputRef",type:"text",placeHolder:"$ Min 100,100"},null,2),[[ee,e.formData.placeyourbid]]),e.invalid?(o(),d("p",Xe,x((b=e.invalid)==null?void 0:b.placeyourbid),1)):m("",!0)]),a("button",{onClick:l[4]||(l[4]=(...r)=>e.addAmount&&e.addAmount(...r)),class:"btn mt-8 bg-blue-dark font-medium rounded-md text-primary"},"+$100")])):m("",!0),a("div",$e,[a("button",{onClick:l[5]||(l[5]=r=>e.next(1)),disabled:e.sizeObjet!=0,class:v([e.sizeObjet==0?"bg-primary":"bg-base-gray text-white","w-full text-sm h-9 md:text-base md:h-[41px] rounded"])}," Next ",10,et)])],64)):m("",!0),e.steps.step2?(o(),d(j,{key:2},[a("div",tt,[a("p",at,[e.statusModal.from=="autoBid"?(o(),d("span",st,"You’ll be charged a $300 transaction fee if your bid is successfully won.")):m("",!0),e.statusModal.from=="bidNow"?(o(),d("span",lt,"You will only be charged our $300 fee plus HST if the seller accepts your bid. No charges will be made otherwise")):m("",!0)]),((S=(P=e.authStore.userData)==null?void 0:P.paymentMethods)==null?void 0:S.length)>0&&!e.showPayment?(o(),d(j,{key:0},[a("div",ot,[dt,a("div",it,[a("button",{onClick:l[6]||(l[6]=r=>e.openDropdown=!e.openDropdown),class:v([e.openDropdown?"border border-[#0A0A0A] transition-all ease-linear duration-300 ":"transition-all ease-linear duration-300","flex w-full gap-2 rounded-md md:h-[42px] shadow-md px-2 bg-white items-center"])},[e.itemCard?(o(),d("p",nt,x((L=(E=e.itemCard)==null?void 0:E.billingDetails)==null?void 0:L.name)+" - **** **** **** "+x((N=(y=e.itemCard)==null?void 0:y.card)==null?void 0:N.last4),1)):(o(),d("p",rt,"Choose credit card"))],2),e.openDropdown?(o(),d("div",{key:0,class:v([e.authStore.userData.paymentMethods.length<4?"h-fit":"h-[128px] md:h-[150px]","absolute flex flex-col gap-[6px] custom-scroll-payment border border-[#E0E0E0] overflow-auto z-10 top-auto left-0 w-full py-2 mt-2 rounded-lg border-gray-900 bg-white shadow-xl"])},[(o(!0),d(j,null,me(e.authStore.userData.paymentMethods,(r,Q)=>{var X,$;return o(),d("div",{class:v(["flex flex-col",Q!==e.authStore.userData.paymentMethods.length-1?"hover:bg-primary gap-6  cursor-pointer transition-all ease-linear duration-300 ":""])},[a("div",{class:v([Q!==e.authStore.userData.paymentMethods.length-1?" py-1 ":"","flex px-2 md:px-6 justify-between w-full"]),onClick:St=>e.getCard(r)},[a("p",ct,x((X=r==null?void 0:r.billingDetails)==null?void 0:X.name),1),a("p",mt,"**** **** **** "+x(($=r==null?void 0:r.card)==null?void 0:$.last4),1)],10,ut),Q===e.authStore.userData.paymentMethods.length-1?(o(),fe(i,{key:0,to:"/account-dealer",class:"text-[#1F94F0] px-2 md:px-6 text-xs md:text-base pt-2 mt-0 cursor-pointer text-start font-semibold"},{default:ae(()=>[K(" Add another Credit Card")]),_:1})):m("",!0)],2)}),256))],2)):m("",!0)])]),a("div",ft,[O(a("input",{type:"checkbox","onUpdate:modelValue":l[7]||(l[7]=r=>e.formData.termsConditions=r),id:"css"},null,512),[[te,e.formData.termsConditions]]),pt])],64)):m("",!0),e.showPayment||((W=(J=e.authStore.userData)==null?void 0:J.paymentMethods)==null?void 0:W.length)===0?(o(),d(j,{key:1},[bt,a("div",Ct,[ht,pe(i,{to:"/account-dealer",class:"btn bg-primary text-base-black"},{default:ae(()=>[K("Go to Profile ")]),_:1})])],64)):m("",!0)]),a("div",vt,[e.showPayment?m("",!0):(o(),d("button",{key:0,onClick:l[8]||(l[8]=r=>e.back(1)),class:"w-2/5 md:h-[41px] text-xs h-9 md:text-base items-center border rounded-md flex justify-center gap-3 border-[#C2C2C2]"},_t)),e.showPayment&&e.authStore.userData.paymentMethods.length>0?(o(),d("button",{key:1,onClick:l[9]||(l[9]=r=>e.showOptionNewPaymtent("select-card")),class:"w-full text-xs h-9 md:text-base md:h-[41px] items-center border rounded-md flex justify-center gap-3 border-[#C2C2C2]"},kt)):m("",!0),a("button",{onClick:l[10]||(l[10]=r=>e.next(2)),disabled:e.sizeObjet!=0,class:v([e.sizeObjet==0?"bg-primary":"bg-base-gray text-white","w-full text-xs h-9 md:text-base md:h-[41px] rounded"])},[e.statusModal.from=="bidNow"?(o(),d("span",Mt,"Bid Now")):m("",!0),e.statusModal.from=="autoBid"?(o(),d("span",Bt,"Complete Auto Bid")):m("",!0)],10,Dt)])],64)):m("",!0),e.steps.step3?(o(),d(j,{key:3},[At,a("div",Lt,[a("button",{onClick:l[11]||(l[11]=r=>e.next(3)),class:v([e.sizeObjet==0?"bg-primary":"bg-base-gray text-white","w-full p-2 text-xs h-9 md:text-base rounded"])}," Yes ",2),a("button",{onClick:l[12]||(l[12]=r=>e.back(2)),class:"w-full p-2 text-xs h-9 md:text-base items-center border rounded-md flex justify-center gap-3 border-[#C2C2C2]"},jt)])],64)):m("",!0)])],512)),[[ce,e.statusModal.isActive]])}const qt=oe(ge,[["render",Pt]]);export{qt as M,Zt as v};