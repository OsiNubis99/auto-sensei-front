import{_ as ke,u as Ee,M as Pe,r as L,A as De,b as Ue,e as ge,o as u,c as f,f as e,k as d,R as c,n as s,h as ee,i as Te,W as H,X as i,l as m,N as q,O as _e,K as Ce,m as X}from"./index-0a18019c.js";import{C as Ne}from"./CurrencyInput-305a7f99.js";import{u as Re}from"./auctions-f471344c.js";import"./payments-bd926a5d.js";import{v as Fe}from"./validationCreateAutions-5f4e1193.js";import"./moment-fbc5633a.js";const Se={setup(we){Ee();const l=Pe(),$=L(null),o=L(De(()=>"https://s3.us-east-2.amazonaws.com/files.autosensei.ca/")),b=L(!1),a=L(),J=Re(),K=L(""),t=L({numberVinGenerals:void 0,make:void 0,model:void 0,trim:void 0,year:void 0,bodyType:void 0,cylinder:void 0,transmission:void 0,odometer:void 0,doors:void 0,driveTrain:void 0,province:void 0,additionalPackages:void 0,city:void 0,keys:void 0,color:void 0,repairs:void 0,currently:void 0,lastReplacement2:void 0,tireCondition:void 0,brakePads:void 0,lastReplacement:void 0,manyPayments:void 0,newVehicle:void 0,anyVehicle:void 0,remainingPayments:void 0,buyoutVehicle:void 0,yourVehicleAmount:void 0,makePreferences:void 0,modelPreferences:void 0,modelFromPreferences:void 0,modelToPreferences:void 0,financingCompany:void 0,yearFromPreferences:void 0,yearToPreferences:void 0,date:void 0}),Q=async z=>{var v,p,y,x,h,g,_,w,V,k,E,P,D,U,T,C,N,R,F,S,A,Y,I,M,G,B,W,j;b.value=!0;try{let n=await J.getAutionById({uuid:z});n&&(console.log("dataDetails.value",n.data),$.value=n.data,t.value.numberVinGenerals=(p=(v=n.data)==null?void 0:v.vehicleDetails)==null?void 0:p.vin,t.value.year=(y=n.data.vehicleDetails)==null?void 0:y.year,t.value.make=(x=n.data.vehicleDetails)==null?void 0:x.make,t.value.model=(h=n.data.vehicleDetails)==null?void 0:h.model,t.value.trim=(g=n.data.vehicleDetails)==null?void 0:g.trim,t.value.bodyType=(_=n.data.vehicleDetails)==null?void 0:_.bodyType,t.value.cylinder=(w=n.data.vehicleDetails)==null?void 0:w.cylinder,t.value.transmission=(V=n.data.vehicleDetails)==null?void 0:V.transmission,t.value.odometer=(k=n.data.vehicleDetails)==null?void 0:k.odometer,t.value.doors=(E=n.data.vehicleDetails)==null?void 0:E.doors,t.value.repairs=(P=n.data.vehicleDetails)==null?void 0:P.repairs,t.value.color=(D=n.data.vehicleDetails)==null?void 0:D.color,t.value.additionalPackages=(U=n.data.vehicleDetails)==null?void 0:U.aditionals,t.value.driveTrain=(T=n.data.vehicleDetails)==null?void 0:T.driveTrain,t.value.province=(C=n.data)==null?void 0:C.province,t.value.city=(N=n.data)==null?void 0:N.city,t.value.keys=(R=n.data)==null?void 0:R.keysNumber,t.value.tireCondition=(S=(F=n.data)==null?void 0:F.vehicleDetails)==null?void 0:S.tireCondition,t.value.lastReplacement=(Y=(A=n.data)==null?void 0:A.vehicleDetails)==null?void 0:Y.tireReplacement,t.value.lastReplacement2=(M=(I=n.data)==null?void 0:I.vehicleDetails)==null?void 0:M.brakeReplacement,t.value.brakePads=(B=(G=n.data)==null?void 0:G.vehicleDetails)==null?void 0:B.brakeCondition,t.value.currently=(j=(W=n.data)==null?void 0:W.vehicleStatus)==null?void 0:j.status,t.value.manyPayments=n.data.vehicleStatus.financingCompany?"Yes":void 0,t.value.financingCompany=n.data.vehicleStatus.financingCompany?n.data.vehicleStatus.financingCompany:void 0,t.value.newVehicle=n.data.buyNew.anyVehicle?"Yes":void 0,t.value.anyVehicle=n.data.buyNew.anyVehicle?"Yes":void 0,t.value.remainingPayments=n.data.vehicleStatus.remainingPayments?n.data.vehicleStatus.remainingPayments:void 0,t.value.buyoutVehicle=n.data.buyout?"Yes":void 0,t.value.yourVehicleAmount=n.data.buyout?n.data.buyout:void 0,t.value.date=n.data.dropOffDate,t.value.makePreferences=n.data.buyNew.make?n.data.buyNew.make:void 0,t.value.modelPreferences=n.data.buyNew.model?n.data.buyNew.model:void 0,t.value.modelFromPreferences=n.data.buyNew.mileageStart?n.data.buyNew.mileageStart:void 0,t.value.modelToPreferences=n.data.buyNew.mileageEnd?n.data.buyNew.mileageEnd:void 0,t.value.yearFromPreferences=n.data.buyNew.yearStart?n.data.buyNew.yearStart:void 0,t.value.yearToPreferences=n.data.buyNew.yearEnd?n.data.buyNew.yearEnd:void 0)}catch{b.value=!1}finally{b.value=!1}},Z=async()=>{var z,v,p,y,x,h,g,_,w,V,k,E,P,D,U,T,C,N,R,F,S,A,Y,I,M,G,B,W,j;if(a.value=Fe(t.value,"edit-admin"),console.log("invalid",a),Object.entries(a.value).length>0){_e(((z=a==null?void 0:a.value)==null?void 0:z.numberVinGenerals)||((v=a==null?void 0:a.value)==null?void 0:v.date)||((p=a==null?void 0:a.value)==null?void 0:p.province)||((y=a==null?void 0:a.value)==null?void 0:y.city)||((x=a==null?void 0:a.value)==null?void 0:x.keys)||((h=a==null?void 0:a.value)==null?void 0:h.currently)||((g=a==null?void 0:a.value)==null?void 0:g.numberVin)||((_=a==null?void 0:a.value)==null?void 0:_.year)||((w=a==null?void 0:a.value)==null?void 0:w.make)||((V=a==null?void 0:a.value)==null?void 0:V.model)||((k=a==null?void 0:a.value)==null?void 0:k.trim)||((E=a==null?void 0:a.value)==null?void 0:E.bodyType)||((P=a==null?void 0:a.value)==null?void 0:P.cylinder)||((D=a==null?void 0:a.value)==null?void 0:D.transmission)||((U=a==null?void 0:a.value)==null?void 0:U.odometer)||((T=a==null?void 0:a.value)==null?void 0:T.odometer)||((C=a==null?void 0:a.value)==null?void 0:C.doors)||((N=a==null?void 0:a.value)==null?void 0:N.color)||((R=a==null?void 0:a.value)==null?void 0:R.customColor)||((F=a==null?void 0:a.value)==null?void 0:F.driveTrain)||((S=a==null?void 0:a.value)==null?void 0:S.additionalPackages)||((A=a==null?void 0:a.value)==null?void 0:A.tireCondition)||((Y=a==null?void 0:a.value)==null?void 0:Y.lastReplacement)||((I=a==null?void 0:a.value)==null?void 0:I.brakePads)||((M=a==null?void 0:a.value)==null?void 0:M.lastReplacement2)||((G=a==null?void 0:a.value)==null?void 0:G.rotorCondition)||((B=a==null?void 0:a.value)==null?void 0:B.lastReplacement3),{type:"error"});return}if(Object.entries(a.value).length===0){let n={dropOffDate:t.value.date,city:t.value.city,province:t.value.province,keysNumber:t.value.keys,vehicleStatus:{status:t.value.currently,financingCompany:t.value.financingCompany,remainingPayments:t.value.remainingPayments},buyout:t.value.yourVehicleAmount,vehicleDetails:{vin:t.value.numberVinGenerals,year:t.value.year,make:t.value.make,model:t.value.model,cylinder:t.value.cylinder,transmission:t.value.transmission,odometer:t.value.odometer,color:t.value.color,aditionals:t.value.additionalPackages,tireCondition:t.value.tireCondition,tireReplacement:t.value.lastReplacement,brakeCondition:t.value.brakePads,brakeReplacement:t.value.lastReplacement2,repairs:t.value.repairs,trim:t.value.trim,bodyType:t.value.bodyType,driveTrain:t.value.driveTrain,doors:t.value.doors},buyNew:{anyVehicle:t.value.anyVehicle=="Yes",make:t.value.makePreferences,model:t.value.modelPreferences,mileageStart:t.value.modelFromPreferences,mileageEnd:t.value.modelToPreferences,yearStart:t.value.yearFromPreferences,yearEnd:t.value.yearToPreferences}};if(console.log("dataPost",n),b.value=!0,n)try{await J.update({uuid:K.value,payload:n})&&(b.value=!1)}catch(O){console.log("error",O),b.value=!1,_e(((j=(W=O==null?void 0:O.response)==null?void 0:W.data)==null?void 0:j.message)||"An error has occurred try again",{type:"error"})}}};return Ue(()=>{l.params.id&&(console.log("route.params.id",l.params.id),K.value=l.params.id,Q(l.params.id))}),{bucket:o,dataDetails:$,loading:b,form:t,invalid:a,nextGeneralInformation:Z}},components:{CurrencyInput:Ne}},Ae={class:"mx-auto bg-[#F0F0F0] z-[100] relative"},Ye={key:0,class:"w-full h-screen fixed z-[1000] flex justify-center overflow-hidden items-center"},Ie=X('<div class="text-indigo-700"><div class="h-12 w-12 md:h-[80px] md:w-[80px]"><div class="animate-bounce"><svg xmlns="http://www.w3.org/2000/svg" class="animate-spin" fill="#c1f861" stroke="#fff" stroke-width="0" viewBox="0 0 16 16"><path d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 4c2.209 0 4 1.791 4 4s-1.791 4-4 4-4-1.791-4-4 1.791-4 4-4zM12.773 12.773c-1.275 1.275-2.97 1.977-4.773 1.977s-3.498-0.702-4.773-1.977-1.977-2.97-1.977-4.773c0-1.803 0.702-3.498 1.977-4.773l1.061 1.061c0 0 0 0 0 0-2.047 2.047-2.047 5.378 0 7.425 0.992 0.992 2.31 1.538 3.712 1.538s2.721-0.546 3.712-1.538c2.047-2.047 2.047-5.378 0-7.425l1.061-1.061c1.275 1.275 1.977 2.97 1.977 4.773s-0.702 3.498-1.977 4.773z"></path></svg></div><p class="text-base-gray font-medium pl-2">Loading...</p></div></div>',1),Me=[Ie],Ge={key:1,class:"relative max-w-[60rem] mx-auto z-50 lg:pt-[60px]"},Be={class:"bg-white flex flex-col md:mb-7 gap-5 items-start shadow-steps p-5 w-full"},We={class:"flex gap-6"},je=["src"],Oe=e("div",{class:"flex flex-col"},[e("p",{class:"font-semibold md:text-xl"},"General Information"),e("p",{class:"text-xs md:text-base"},"Related to your vehicle to help get the right bids !")],-1),ze={class:"flex flex-col md:flex-row justify-between items-center md:gap-4"},Le={class:"w-full flex flex-col gap-2"},He=e("label",{class:"text-sm md:text-base",for:""},"Vehicle Identification Number (VIN)",-1),qe=e("p",{class:"text-xs md:text-sm text-[#858585]"},"Provide the exact VIN number in order to decode your vehicle accurately. ",-1),Ke={class:"flex gap-2 items-center justify-between"},Xe={class:"w-full mt-5 flex flex-col gap-2"},Je=e("label",{class:"text-sm md:text-base",for:""},"Vehicle Drop Off Agreement",-1),Qe=e("p",{class:"text-xs md:text-sm text-[#858585]"},"If you accept a bid, the vehicle must be dropped off within 14 days from the acceptance date. ",-1),Ze={class:"flex flex-col md:grid w-full md:grid-cols-3 gap-5"},$e={class:"w-full flex flex-col gap-2 relative"},eo=e("label",{class:"text-sm md:text-base",for:""},"Province",-1),oo={class:"w-full flex flex-col gap-2 relative"},lo=e("label",{class:"text-sm md:text-base",for:""},"City",-1),ro={class:"w-full flex flex-col gap-2"},ao=e("label",{class:"text-sm md:text-base",for:""},"How many keys?",-1),to=X('<option selected>Select number of keys</option><option value="1 keys">1 keys</option><option value="2 keys">2 keys</option><option value="3 keys">3 keys</option><option value="4 keys">4 keys</option>',5),no=[to],so={class:"flex flex-col gap-2 w-full"},io=e("p",{class:"text-sm font-semibold"},"Is your vehicle currently?",-1),mo={class:"flex gap-4 items-center"},co={class:"label-radio"},uo={class:"label-radio"},fo={class:"label-radio"},bo={key:0,class:"mt-4"},vo={class:"flex flex-col gap-4"},po={class:"w-full flex flex-col gap-2"},yo=e("label",{class:"text-sm md:text-base",for:""},"Leasing or Financing Company",-1),xo={class:"flex w-fill flex-col md:flex-row justify-between"},ho={class:"flex flex-col w-full gap-4"},go=e("p",{class:"text-xs md:text-sm text-[#666666]"},"Do you know how many payments are left? (to be verified by the dealer)",-1),_o={class:"w-full items-center flex gap-4"},wo={class:"label-radio"},Vo={class:"label-radio"},ko={key:0,class:"w-full flex flex-col gap-2"},Eo=e("label",{class:"text-sm md:text-base",for:""},"Remaining payments",-1),Po=e("hr",{class:"border w-full border-[#E0E0E0]"},null,-1),Do={key:0,class:"flex w-full flex-col gap-4"},Uo=e("p",{class:"text-xs md:text-sm text-[#666666]"},"Do you know the buyout for your vehicle? (Optional) ",-1),To={class:"flex w-full justify-between gap-4 items-center"},Co={class:"w-full items-center flex gap-4"},No={class:"label-radio"},Ro={class:"label-radio"},Fo={key:0,class:"w-full flex flex-col gap-2"},So=e("label",{class:"text-sm md:text-base",for:""},"Amount",-1),Ao={class:"flex flex-col gap-4"},Yo=e("p",{class:"text-xs md:text-sm text-[#666666]"},"Are you currently in the market to buy a new vehicle? (Optional)",-1),Io={class:"flex flex-col gap-4"},Mo={class:"flex gap-4 items-center"},Go={class:"label-radio"},Bo={class:"label-radio"},Wo={key:0,class:"flex flex-col gap-4"},jo=e("div",{class:"flex gap-2 flex-col"},[e("p",null,"Vehicle Preferences"),e("p",{class:"text-xs md:text-sm text-[#666666]"},"If you are looking to buy a vehicle in the future, let us know, we will connect dealers that have what you want in stock to bid, and get you tax savings on your trade.")],-1),Oo={class:"flex gap-4 flex-col"},zo=e("p",{class:"text-xs md:text-sm text-[#666666]"},"Open to any vehicle?",-1),Lo={class:"flex gap-4 items-center"},Ho={class:"label-radio"},qo={class:"label-radio"},Ko={class:"flex flex-col lg:flex-row gap-4"},Xo={class:"w-full flex flex-col gap-2"},Jo=e("label",{class:"text-sm md:text-base",for:""},"Make",-1),Qo={class:"w-full flex flex-col gap-2"},Zo=e("label",{class:"text-sm md:text-base",for:""},"Model",-1),$o={class:"w-full flex items-center flex-col md:flex-row justify-between gap-4"},el={class:"w-full flex flex-col gap-2"},ol=e("label",{class:"text-sm md:text-base",for:""},"Mileage",-1),ll={class:"w-full flex flex-col gap-2"},rl={class:"flex flex-col lg:flex-row gap-4 items-center"},al={class:"w-full flex flex-col gap-2"},tl=e("label",{class:"text-sm md:text-base",for:""},"Year",-1),nl={class:"w-full flex flex-col gap-2"},dl={class:"flex w-full justify-between items-center gap-5"},sl={class:"w-full"},il=e("label",{class:"font-medium text-xs md:text-base",for:""},"Year",-1),ml={class:"w-full"},cl={class:"w-full flex flex-col md:gap-2"},ul=e("label",{class:"font-medium text-xs md:text-base",for:""},"Make ",-1),fl={class:"flex w-full justify-between items-center flex-row gap-5"},bl={class:"w-full"},vl=e("label",{class:"font-medium text-xs md:text-base",for:""},"Model",-1),pl={class:"w-full"},yl=e("label",{class:"font-medium text-xs md:text-base",for:""},"Trim",-1),xl={class:"flex w-full justify-between items-center gap-5"},hl={class:"w-full"},gl=e("label",{class:"font-medium text-xs md:text-base",for:""},"Body Type",-1),_l={class:"w-full"},wl=e("label",{class:"font-medium text-xs md:text-base",for:""},"Cylinder",-1),Vl={class:"flex w-full justify-between items-center flex-col md:flex-row gap-5"},kl={class:"w-full"},El=e("label",{class:"font-medium text-xs md:text-base",for:""},"Transmission",-1),Pl={class:"w-full"},Dl=e("label",{class:"font-medium text-xs md:text-base",for:""},"Odometer",-1),Ul={class:"w-full"},Tl={class:"w-full flex flex-col md:gap-2"},Cl=e("label",{class:"font-medium text-xs md:text-base",for:""},"Doors",-1),Nl=X('<option selected hidden>Select Doors </option><option value="2 Doors">2 Doors</option><option value="3 Doors">3 Doors</option><option value="4 Doors">4 Doors</option><option value="5 Doors">5 Doors</option>',5),Rl=[Nl],Fl=e("p",{class:"font-medium text-xs md:text-base"},"Exterior Color",-1),Sl={class:"grid grid-cols-3 gap-[8px] md:flex md:flex-wrap md:gap-4"},Al={key:0,class:"w-full flex items-start flex-col"},Yl=e("label",{class:"font-medium text-xs md:text-base",for:""},"Custom color",-1),Il={class:"flex flex-col gap-4"},Ml=e("p",{class:"font-medium text-xs md:text-base"},"Drive Train",-1),Gl={class:"flex flex-col md:grid md:grid-cols-2 place-items-baseline place-content-center gap-4"},Bl={class:"label-radio"},Wl={class:"label-radio"},jl={class:"label-radio"},Ol={class:"label-radio"},zl={class:"w-full"},Ll=e("label",{class:"font-medium text-xs md:text-base",for:""},"Additional Packages",-1),Hl=e("p",{class:"text-xs md:text-sm mt-3 text-[#858585]"},"Such as Sports Package, Remote Starter, etc. ",-1),ql={class:"w-full"},Kl=e("label",{class:"font-medium text-xs md:text-base",for:""},"Any repairs required for the vehicle ? Any damages that need to be mentioned? Please disclose any information that will affect the value of your vehicle either positively or negatively.",-1),Xl={class:"flex flex-col md:grid w-full gap-2 md:gap-4 md:grid-cols-2"},Jl={class:"w-full"},Ql={class:"w-full flex flex-col md:gap-2"},Zl=e("label",{class:"font-medium text-xs md:text-base",for:""},"Tire Condition",-1),$l=e("option",{selected:"",hidden:""},"Choose Condition",-1),er=e("option",{value:"Need Replacement"},"Need Replacement",-1),or=e("option",{value:"Good"},"Good",-1),lr=e("option",{value:"Brand New"},"Brand New",-1),rr=[$l,er,or,lr],ar={class:"w-full"},tr={class:"w-full flex flex-col md:gap-2"},nr=e("label",{class:"font-medium text-xs md:text-base",for:""},"Last Replacement",-1),dr=X('<option selected hidden>Choose Year</option><option value="2024">2024</option><option value="2023">2023</option><option value="2022">2022</option><option value="2021">2021</option><option value="2020">2020</option><option value="2019">2019</option>',7),sr=[dr],ir={class:"w-full"},mr={class:"w-full flex flex-col md:gap-2"},cr=e("label",{class:"font-medium text-xs md:text-base",for:""},"Brake Pads",-1),ur=e("option",{selected:"",hidden:""},"Choose Condition",-1),fr=e("option",{value:"Rotors & Pads are good"},"Rotors & Pads are good",-1),br=e("option",{value:"Rotors & Pads need Replacement"},"Rotors & Pads need Replacement",-1),vr=e("option",{value:"Brand New"},"Brand New",-1),pr=[ur,fr,br,vr],yr={class:"w-full"},xr={class:"w-full flex flex-col md:gap-2"},hr=e("label",{class:"font-medium text-xs md:text-base",for:""},"Last Replacement",-1),gr=X('<option selected hidden>Choose Year</option><option value="2024">2024</option><option value="2023">2023</option><option value="2022">2022</option><option value="2021">2021</option><option value="2020">2020</option><option value="2019">2019</option>',7),_r=[gr];function wr(we,l,$,o,b,a){var t,Q,Z,z,v,p,y,x,h,g,_,w,V,k,E,P,D,U,T,C,N,R,F,S,A,Y,I,M,G,B,W,j,n,O,oe,le,re,ae,te,ne,de,se,ie,me,ce,ue,fe,be,ve,pe,ye,xe,he;const J=ge("VueDatePicker"),K=ge("CurrencyInput");return u(),f("div",Ae,[o.loading?(u(),f("div",Ye,Me)):(u(),f("div",Ge,[e("div",Be,[e("div",We,[e("img",{src:o.bucket+"public/svg/imgGenerals.svg",alt:""},null,8,je),Oe]),e("div",ze,[e("div",Le,[He,d(e("input",{"onUpdate:modelValue":l[0]||(l[0]=r=>o.form.numberVinGenerals=r),class:s([(t=o.invalid)!=null&&t.numberVinGenerals?"border-error":"border-[#E0E0E0]","p-2 rounded-lg border uppercase"]),placeholder:"Input your VIN number",type:"text"},null,2),[[c,o.form.numberVinGenerals]]),qe]),e("div",Ke,[e("div",Xe,[Je,ee(J,{"enable-time-picker":!1,"min-date":new Date(new Date().getTime()+2*86400*1e3),class:s(["custom-picker",((Q=o.invalid)==null?void 0:Q.date)&&"error-picker"]),modelValue:o.form.date,"onUpdate:modelValue":l[1]||(l[1]=r=>o.form.date=r)},{"calendar-header":Te(({index:r,day:Ve})=>[e("div",{class:s(r===5||r===6?"red-color":"")},Ce(Ve),3)]),_:1},8,["min-date","class","modelValue"]),Qe])])]),e("div",Ze,[e("div",$e,[eo,d(e("input",{"onUpdate:modelValue":l[2]||(l[2]=r=>o.form.province=r),class:s([(Z=o.invalid)!=null&&Z.province?"border-error":"border-[#E0E0E0]","p-2 rounded-lg border"]),placeholder:"Province",type:"text"},null,2),[[c,o.form.province]])]),e("div",oo,[lo,d(e("input",{"onUpdate:modelValue":l[3]||(l[3]=r=>o.form.city=r),placeholder:"City",class:s([(z=o.invalid)!=null&&z.city?"border-error":"border-[#E0E0E0]","p-2 rounded-lg border"]),type:"text"},null,2),[[c,o.form.city]])]),e("div",ro,[ao,d(e("select",{"onUpdate:modelValue":l[4]||(l[4]=r=>o.form.keys=r),class:s([(v=o.invalid)!=null&&v.keys?"border-error":"border-[#E0E0E0]","border text-[#858585] md:p-3 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full"])},no,2),[[H,o.form.keys]])])]),e("div",so,[io,e("div",mo,[e("label",co,[d(e("input",{class:s([(p=o.invalid)!=null&&p.currently?"error-currently":"","input-radio on"]),type:"radio",value:"Paid OFF","onUpdate:modelValue":l[5]||(l[5]=r=>o.form.currently=r),name:"pilih"},null,2),[[i,o.form.currently]]),m(" Paid Off ")]),e("label",uo,[d(e("input",{class:s([(y=o.invalid)!=null&&y.currently?"error-currently":"","input-radio on"]),type:"radio","onUpdate:modelValue":l[6]||(l[6]=r=>o.form.currently=r),value:"Financed",name:"pilih"},null,2),[[i,o.form.currently]]),m(" Financed ")]),e("label",fo,[d(e("input",{class:s([(x=o.invalid)!=null&&x.currently?"error-currently":"","input-radio on"]),type:"radio","onUpdate:modelValue":l[7]||(l[7]=r=>o.form.currently=r),value:"Leased",name:"pilih"},null,2),[[i,o.form.currently]]),m(" Leased ")])]),o.form.currently=="Financed"||o.form.currently=="Leased"?(u(),f("div",bo,[e("div",vo,[e("div",po,[yo,d(e("input",{"onUpdate:modelValue":l[8]||(l[8]=r=>o.form.financingCompany=r),class:s([(h=o.invalid)!=null&&h.financingCompany?"border-error":"border-[#E0E0E0]","p-2 rounded-lg border"]),placeholder:"Enter the bank/institution your vehicle is currently being financed or leased with"},null,2),[[c,o.form.financingCompany]])]),e("div",xo,[e("div",ho,[go,e("div",_o,[e("label",wo,[d(e("input",{class:s([(g=o.invalid)!=null&&g.manyPayments?"error-currently":"","input-radio on"]),type:"radio","onUpdate:modelValue":l[9]||(l[9]=r=>o.form.manyPayments=r),value:"Yes",name:"pilih-10"},null,2),[[i,o.form.manyPayments]]),m(" Yes ")]),e("label",Vo,[d(e("input",{class:s([(_=o.invalid)!=null&&_.manyPayments?"error-currently":"","input-radio on"]),type:"radio","onUpdate:modelValue":l[10]||(l[10]=r=>o.form.manyPayments=r),value:"No",name:"pilih-10"},null,2),[[i,o.form.manyPayments]]),m(" No ")])])]),o.form.manyPayments=="Yes"?(u(),f("div",ko,[Eo,ee(K,{modelValue:o.form.remainingPayments,"onUpdate:modelValue":l[11]||(l[11]=r=>o.form.remainingPayments=r),error:(w=o.invalid)==null?void 0:w.remainingPayments,options:{currency:"USD"},placeHolder:"Enter Number of payments left $"},null,8,["modelValue","error"])])):q("",!0)])])])):q("",!0)]),Po,o.form.currently=="Financed"||o.form.currently=="Leased"?(u(),f("div",Do,[Uo,e("div",To,[e("div",Co,[e("label",No,[d(e("input",{type:"radio","onUpdate:modelValue":l[12]||(l[12]=r=>o.form.buyoutVehicle=r),value:"Yes",class:"input-radio on",name:"pilih-1"},null,512),[[i,o.form.buyoutVehicle]]),m(" Yes ")]),e("label",Ro,[d(e("input",{type:"radio","onUpdate:modelValue":l[13]||(l[13]=r=>o.form.buyoutVehicle=r),value:"No",class:"input-radio on",name:"pilih-1"},null,512),[[i,o.form.buyoutVehicle]]),m(" No ")])]),o.form.buyoutVehicle=="Yes"?(u(),f("div",Fo,[So,ee(K,{modelValue:o.form.yourVehicleAmount,"onUpdate:modelValue":l[14]||(l[14]=r=>o.form.yourVehicleAmount=r),error:(V=o.invalid)==null?void 0:V.yourVehicleAmount,options:{currency:"USD"},placeHolder:"Enter Number of payments left $"},null,8,["modelValue","error"])])):q("",!0)])])):q("",!0),e("div",Ao,[Yo,e("div",Io,[e("div",Mo,[e("label",Go,[d(e("input",{type:"radio","onUpdate:modelValue":l[15]||(l[15]=r=>o.form.newVehicle=r),value:"Yes",class:"input-radio on",name:"pilih-2"},null,512),[[i,o.form.newVehicle]]),m(" Yes ")]),e("label",Bo,[d(e("input",{type:"radio","onUpdate:modelValue":l[16]||(l[16]=r=>o.form.newVehicle=r),value:"No",class:"input-radio on",name:"pilih-2"},null,512),[[i,o.form.newVehicle]]),m(" No ")])]),((k=o.form)==null?void 0:k.newVehicle)=="Yes"?(u(),f("div",Wo,[jo,e("div",Oo,[zo,e("div",Lo,[e("label",Ho,[d(e("input",{class:s([(E=o.invalid)!=null&&E.anyVehicle?"error-currently":"","input-radio on"]),"onUpdate:modelValue":l[17]||(l[17]=r=>o.form.anyVehicle=r),type:"radio",value:"Yes",name:"pilih-3"},null,2),[[i,o.form.anyVehicle]]),m(" Yes ")]),e("label",qo,[d(e("input",{class:s([(P=o.invalid)!=null&&P.anyVehicle?"error-currently":"","input-radio on"]),"onUpdate:modelValue":l[18]||(l[18]=r=>o.form.anyVehicle=r),type:"radio",value:"No",name:"pilih-3"},null,2),[[i,o.form.anyVehicle]]),m(" No ")])])]),e("div",Ko,[e("div",Xo,[Jo,d(e("input",{"onUpdate:modelValue":l[19]||(l[19]=r=>o.form.makePreferences=r),class:s([(D=o.invalid)!=null&&D.makePreferences?"border-error":"border-[#E0E0E0]","p-2 rounded-lg border"]),type:"text",placeholder:"Make"},null,2),[[c,o.form.makePreferences]])]),e("div",Qo,[Zo,d(e("input",{"onUpdate:modelValue":l[20]||(l[20]=r=>o.form.modelPreferences=r),class:s([(U=o.invalid)!=null&&U.modelPreferences?"border-error":"border-[#E0E0E0]","p-2 rounded-lg border"]),type:"text",placeholder:"Model"},null,2),[[c,o.form.modelPreferences]])])]),e("div",$o,[e("div",el,[ol,d(e("input",{"onUpdate:modelValue":l[21]||(l[21]=r=>o.form.modelFromPreferences=r),class:s([(T=o.invalid)!=null&&T.modelFromPreferences?"border-error":"border-[#E0E0E0]","p-2 rounded-lg border uppercase"]),placeholder:"Mileage From",type:"number"},null,2),[[c,o.form.modelFromPreferences]])]),e("div",ll,[d(e("input",{"onUpdate:modelValue":l[22]||(l[22]=r=>o.form.modelToPreferences=r),class:s([(C=o.invalid)!=null&&C.modelToPreferences?"border-error":"border-[#E0E0E0]","p-2 md:mt-8 rounded-lg border uppercase"]),placeholder:"Mileage To",type:"number"},null,2),[[c,o.form.modelToPreferences]])])]),e("div",rl,[e("div",al,[tl,d(e("input",{"onUpdate:modelValue":l[23]||(l[23]=r=>o.form.yearFromPreferences=r),class:s([(N=o.invalid)!=null&&N.yearFromPreferences?"border-error":"border-[#E0E0E0]","p-2 rounded-lg border uppercase"]),placeholder:"From 1996",type:"number"},null,2),[[c,o.form.yearFromPreferences]])]),e("div",nl,[d(e("input",{"onUpdate:modelValue":l[24]||(l[24]=r=>o.form.yearToPreferences=r),class:s([(R=o.invalid)!=null&&R.yearToPreferences?"border-error":"border-[#E0E0E0]","p-2 lg:mt-8 rounded-lg border uppercase"]),placeholder:"From 1996",type:"number"},null,2),[[c,o.form.yearToPreferences]])])])])):q("",!0)])]),e("div",dl,[e("div",sl,[il,d(e("input",{"onUpdate:modelValue":l[25]||(l[25]=r=>o.form.year=r),class:s([(F=o.invalid)!=null&&F.year?"border-error":"border-[#E0E0E0]","p-2 w-full md:mt-3 border rounded-lg"]),placeholder:"2013",type:"text"},null,2),[[c,o.form.year]])]),e("div",ml,[e("div",cl,[ul,d(e("input",{class:s([(S=o.invalid)!=null&&S.make?"border-error":"border-[#E0E0E0]","p-2 w-full border md:mt-3 rounded-lg"]),"onUpdate:modelValue":l[26]||(l[26]=r=>o.form.make=r),placeholder:"Forester",type:"text"},null,2),[[c,o.form.make]])])])]),e("div",fl,[e("div",bl,[vl,d(e("input",{class:s([(A=o.invalid)!=null&&A.model?"border-error":"border-[#E0E0E0]","p-2 w-full border md:mt-3 rounded-lg"]),"onUpdate:modelValue":l[27]||(l[27]=r=>o.form.model=r),placeholder:"Forester",type:"text"},null,2),[[c,o.form.model]])]),e("div",pl,[yl,d(e("input",{class:s([(Y=o.invalid)!=null&&Y.trim?"border-error":"border-[#E0E0E0]","p-2 w-full border md:mt-3 rounded-lg"]),"onUpdate:modelValue":l[28]||(l[28]=r=>o.form.trim=r),placeholder:"Premium Plus",type:"text"},null,2),[[c,o.form.trim]])])]),e("div",xl,[e("div",hl,[gl,d(e("input",{class:s([(I=o.invalid)!=null&&I.bodyType?"border-error":"border-[#E0E0E0]","p-2 w-full md:mt-3 border rounded-lg"]),"onUpdate:modelValue":l[29]||(l[29]=r=>o.form.bodyType=r),placeholder:"SUV",type:"text"},null,2),[[c,o.form.bodyType]])]),e("div",_l,[wl,d(e("input",{class:s([(M=o.invalid)!=null&&M.cylinder?"border-error":"border-[#E0E0E0]","p-2 w-full md:mt-3 border rounded-lg"]),"onUpdate:modelValue":l[30]||(l[30]=r=>o.form.cylinder=r),placeholder:"4",type:"text"},null,2),[[c,o.form.cylinder]])])]),e("div",Vl,[e("div",kl,[El,d(e("input",{"onUpdate:modelValue":l[31]||(l[31]=r=>o.form.transmission=r),class:s([(G=o.invalid)!=null&&G.transmission?"border-error":"border-[#E0E0E0]","p-2 w-full md:mt-3 border rounded-lg"]),placeholder:"SUV",type:"text"},null,2),[[c,o.form.transmission]])]),e("div",Pl,[Dl,d(e("input",{step:"0.01",class:s([(B=o.invalid)!=null&&B.odometer?"border-error":"","p-2 w-full md:mt-3 border border-[#E0E0E0] rounded-lg"]),"onUpdate:modelValue":l[32]||(l[32]=r=>o.form.odometer=r),placeholder:"Enter odometer",type:"number"},null,2),[[c,o.form.odometer]])]),e("div",Ul,[e("div",Tl,[Cl,d(e("select",{class:s([[(W=o.invalid)!=null&&W.doors?"border-error":"border-[#E0E0E0]"],"border text-[#858585] md:p-3 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full"]),"onUpdate:modelValue":l[33]||(l[33]=r=>o.form.doors=r),placeholder:"Number of Doors"},Rl,2),[[H,o.form.doors]])])])]),Fl,e("div",Sl,[e("label",{class:s(["label-colors",(j=o.invalid)!=null&&j.color?"label-colors-error":"border-none"])},[d(e("input",{type:"radio","onUpdate:modelValue":l[34]||(l[34]=r=>o.form.color=r),class:"input-radio on-black",value:"black",name:"color-redio"},null,512),[[i,o.form.color]]),m(" Black ")],2),e("label",{class:s(["label-colors",(n=o.invalid)!=null&&n.color?"label-colors-error":"border-none"])},[d(e("input",{type:"radio","onUpdate:modelValue":l[35]||(l[35]=r=>o.form.color=r),class:"input-radio on-white",value:"white",name:"color-redio"},null,512),[[i,o.form.color]]),m(" White ")],2),e("label",{class:s(["label-colors",(O=o.invalid)!=null&&O.color?"label-colors-error":"border-none"])},[d(e("input",{type:"radio","onUpdate:modelValue":l[36]||(l[36]=r=>o.form.color=r),class:"input-radio on-silver",value:"silver",name:"color-redio"},null,512),[[i,o.form.color]]),m(" Silver ")],2),e("label",{class:s(["label-colors",(oe=o.invalid)!=null&&oe.color?"label-colors-error":"border-none"])},[d(e("input",{type:"radio","onUpdate:modelValue":l[37]||(l[37]=r=>o.form.color=r),class:"input-radio on-grey",value:"grey",name:"color-redio"},null,512),[[i,o.form.color]]),m(" Grey ")],2),e("label",{class:s(["label-colors",(le=o.invalid)!=null&&le.color?"label-colors-error":"border-none"])},[d(e("input",{type:"radio","onUpdate:modelValue":l[38]||(l[38]=r=>o.form.color=r),class:"input-radio on-greendark",value:"greenDark",name:"color-redio"},null,512),[[i,o.form.color]]),m(" Green Dark ")],2),e("label",{class:s(["label-colors",(re=o.invalid)!=null&&re.color?"label-colors-error":"border-none"])},[d(e("input",{type:"radio","onUpdate:modelValue":l[39]||(l[39]=r=>o.form.color=r),class:"input-radio on-brown",value:"brown",name:"color-redio"},null,512),[[i,o.form.color]]),m(" Brown ")],2),e("label",{class:s(["label-colors",(ae=o.invalid)!=null&&ae.color?"label-colors-error":"border-none"])},[d(e("input",{type:"radio","onUpdate:modelValue":l[40]||(l[40]=r=>o.form.color=r),class:"input-radio on-red",value:"red",name:"color-redio"},null,512),[[i,o.form.color]]),m(" Red ")],2),e("label",{class:s(["label-colors",(te=o.invalid)!=null&&te.color?"label-colors-error":"border-none"])},[d(e("input",{type:"radio","onUpdate:modelValue":l[41]||(l[41]=r=>o.form.color=r),class:"input-radio on-yellow",value:"yellow",name:"color-redio"},null,512),[[i,o.form.color]]),m(" Yellow ")],2),e("label",{class:s(["label-colors",(ne=o.invalid)!=null&&ne.color?"label-colors-error":"border-none"])},[d(e("input",{type:"radio","onUpdate:modelValue":l[42]||(l[42]=r=>o.form.color=r),class:"input-radio on-green",value:"green",name:"color-redio"},null,512),[[i,o.form.color]]),m(" Green ")],2),e("label",{class:s(["label-colors",(de=o.invalid)!=null&&de.color?"label-colors-error":"border-none"])},[d(e("input",{type:"radio","onUpdate:modelValue":l[43]||(l[43]=r=>o.form.color=r),class:"input-radio on-blue",value:"blue",name:"color-redio"},null,512),[[i,o.form.color]]),m(" Blue ")],2),e("label",{class:s(["label-colors",(se=o.invalid)!=null&&se.color?"label-colors-error":"border-none"])},[d(e("input",{type:"radio","onUpdate:modelValue":l[44]||(l[44]=r=>o.form.color=r),class:"input-radio on-other",value:"other",name:"color-redio"},null,512),[[i,o.form.color]]),m(" Other ")],2),o.form.color=="other"?(u(),f("div",Al,[Yl,d(e("input",{class:s([(ie=o.invalid)!=null&&ie.customColor?"border-error":"border-none","p-2 border md:mt-3 bg-[#F0F0F0] rounded-lg"]),"onUpdate:modelValue":l[45]||(l[45]=r=>o.form.customColor=r),placeholder:"Pink",type:"text"},null,2),[[c,o.form.customColor]])])):q("",!0)]),e("div",Il,[Ml,e("div",Gl,[e("label",Bl,[d(e("input",{type:"radio",class:s([(me=o.invalid)!=null&&me.driveTrain?"error-driveTrain":"","input-radio on"]),"onUpdate:modelValue":l[46]||(l[46]=r=>o.form.driveTrain=r),value:"FWD",name:"drive-train"},null,2),[[i,o.form.driveTrain]]),m(" FWD (Front-Wheel Drive) ")]),e("label",Wl,[d(e("input",{type:"radio",class:s([(ce=o.invalid)!=null&&ce.driveTrain?"error-driveTrain":"","input-radio on"]),"onUpdate:modelValue":l[47]||(l[47]=r=>o.form.driveTrain=r),value:"AWD",name:"drive-train"},null,2),[[i,o.form.driveTrain]]),m(" AWD (All-Wheel Drive) ")]),e("label",jl,[d(e("input",{type:"radio",class:s([(ue=o.invalid)!=null&&ue.driveTrain?"error-driveTrain":"","input-radio on"]),"onUpdate:modelValue":l[48]||(l[48]=r=>o.form.driveTrain=r),value:"RWD",name:"drive-train"},null,2),[[i,o.form.driveTrain]]),m(" RWD (Rear-Wheel Drive) ")]),e("label",Ol,[d(e("input",{type:"radio",class:s([(fe=o.invalid)!=null&&fe.driveTrain?"error-driveTrain":"","input-radio on"]),"onUpdate:modelValue":l[49]||(l[49]=r=>o.form.driveTrain=r),value:"4WD",name:"drive-train"},null,2),[[i,o.form.driveTrain]]),m(" 4WD (Four-Wheel Drive) ")])])]),e("div",zl,[Ll,d(e("input",{"onUpdate:modelValue":l[50]||(l[50]=r=>o.form.additionalPackages=r),class:s([(be=o.invalid)!=null&&be.additionalPackages?"border-error":"border-[#E0E0E0]","p-2 w-full mt-3 border rounded-lg"]),placeholder:"Input the additional packages if applicable",type:"text"},null,2),[[c,o.form.additionalPackages]]),Hl]),e("div",ql,[Kl,d(e("textarea",{"onUpdate:modelValue":l[51]||(l[51]=r=>o.form.repairs=r),class:s([(ve=o.invalid)!=null&&ve.repairs?"border-error":"border-[#E0E0E0]","p-2 w-full mt-3 lg:h-[200px] border rounded-lg"]),placeholder:"Add information",name:"textarea",rows:"10",cols:"20"},null,2),[[c,o.form.repairs]])]),e("div",Xl,[e("div",Jl,[e("div",Ql,[Zl,d(e("select",{"onUpdate:modelValue":l[52]||(l[52]=r=>o.form.tireCondition=r),class:s([(pe=o.invalid)!=null&&pe.tireCondition?"border-error":"border-[#E0E0E0]","border text-[#858585] md:p-3 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full"])},rr,2),[[H,o.form.tireCondition]])])]),e("div",ar,[e("div",tr,[nr,d(e("select",{"onUpdate:modelValue":l[53]||(l[53]=r=>o.form.lastReplacement=r),class:s([(ye=o.invalid)!=null&&ye.lastReplacement?"border-error":"border-[#E0E0E0]","border text-[#858585] md:p-3 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full"])},sr,2),[[H,o.form.lastReplacement]])])]),e("div",ir,[e("div",mr,[cr,d(e("select",{"onUpdate:modelValue":l[54]||(l[54]=r=>o.form.brakePads=r),class:s([(xe=o.invalid)!=null&&xe.brakePads?"border-error":"border-[#E0E0E0]","border text-[#858585] md:p-3 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full"])},pr,2),[[H,o.form.brakePads]])])]),e("div",yr,[e("div",xr,[hr,d(e("select",{"onUpdate:modelValue":l[55]||(l[55]=r=>o.form.lastReplacement2=r),class:s([(he=o.invalid)!=null&&he.lastReplacement2?"border-error":"border-[#E0E0E0]","border text-[#858585] md:p-3 border-[#E0E0E0] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full"])},_r,2),[[H,o.form.lastReplacement2]])])])]),e("button",{onClick:l[56]||(l[56]=(...r)=>o.nextGeneralInformation&&o.nextGeneralInformation(...r)),id:"step1-edit-admin",class:"btn flex justify-center bg-[#303E18] py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-primary bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"}," Update ")])]))])}const Tr=ke(Se,[["render",wr]]);export{Tr as default};