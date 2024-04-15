import{P as s}from"./pspdfkit-1d52ac9c.js";import{_ as g,r as y,b as v,V as c,o as m,c as u,f as w}from"./index-e2fc11f7.js";import{u as x}from"./uploader-1d6a2559.js";const O=`<html>

<head>
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        p {
            font-size: 12px;
            margin: 0;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
            margin: 0;
        }

        table,
        th,
        td {

            padding: 0px 5px;
            font-size: 12px;

        }

        table {
            border-collapse: collapse;
            caption-side: bottom;
            width: 100%;
        }

        .b-order {
            border: solid 1px #000;
        }

        .b-order-right {
            border-right: solid 1px #000;
        }

        .container {
            padding: 20px;
            height: 100vh;
        }

        .header {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
        }

        .header_one {
            display: flex;
            flex-direction: column;
            gap: 5px;
            justify-content: flex-start;
            align-items: start;
            width: 70%;
        }

        .header_two {
            width: 30%;
        }

        .header_two img {
            width: 100%;
            object-fit: contain;

        }

        .header_one h1 {
            font-size: x-large;
            font-weight: 600;
        }

        .header_one_text {
            display: flex;
            align-items: center;
            gap: 20px;
        }

        .header_one_text_info {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .header_code-phone {
            display: flex;
            align-items: center;
            gap: 30px;
        }

        .header_one-last {
            font-weight: 700;
        }

        .table-one {
            display: flex;
            justify-content: space-between;
            width: 100%;
        }

        .table-one_section-1 {
            width: 62%;
            display: flex;
        }

        .table-one_section-2 {
            width: 30%;

        }

        .table-one_section-2_line {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }

        .table-one_section-2_line>p:nth-child(1) {
            border-right: 1px solid rgb(87, 87, 87);
            text-align: end;
        }

        .table-one_section-2_line>p {
            font-weight: 700;
        }

        .table-two {
            margin-top: 20px;
        }

        .table-two_contend {
            width: 62%;
            border: 1px solid black;
        }

        .table-two_contend>p {
            font-size: 16px;
            padding: 12px 60px;
        }

        .tablet-info {
            display: flex;
            gap: 15px;
            padding: 20px;
        }

        .tablet-info_contend>div:nth-child(1) {
            width: 40px;
            height: 2px;
            border-top: 2px solid red;
        }

        .tablet-info_contend>p:nth-child(2) {
            font-size: 13px;
            line-height: 20px;
            padding-bottom: 10px;
            position: relative;
            margin-top: 12px;
        }

        .tablet-info_contend>p:nth-child(3) {
            font-size: 14px;
            font-weight: 600;
        }

        .w-60 {
            width: 60%;
        }

        .w-20 {
            width: 20%;
        }

        .table-three {
            display: flex;
            width: 100%;
            align-items: flex-start;
        }

        .table-three_one {
            width: 62%;
        }

        .table-three_two {
            width: 40%;
        }

        .t-r {
            text-align: right;
        }

        .t-l {
            text-align: left;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="header">
            <div class="header_one">
                <h1>Dealerships Name</h1>
                <p>Dealerships Address- Street Number & Street Name</p>
                <p>City, Province</p>
                <div class="header_code-phone">
                    <p>Postal Code</p>
                    <p>Phone Number</p>
                </div>

                <div class="header_one_text">
                    <p> M8Z 1T8 </p>
                    <div class="header_one_text_info">
                        <p>Phone: (416) 259-7128</p>
                        <p>Fax: (416) 259-2215</p>
                    </div>

                </div>
                <p class="header_one-last">Sold to (Clients Name)</p>
            </div>
            <div class="header_two">
                <img src="http://files.autosensei.ca/public/logo.png" alt="">
            </div>
        </div>
        <div>
            <div class="table-one">
                <div class="table-one_section-1">
                    <table>
                        <tbody class="b-order">
                            <tr>
                                <td class=" w-60 b-order-right">Clients Name</td>
                                <td class="w-20 b-order-right">Dealer #</td>
                                <td>&nbsp;</td>
                            </tr>
                            <tr>
                                <td class=" w-60 b-order-right">Address of Client (Street # & Street Name) </td>
                                <td class="w-20 b-order-right">&nbsp;</td>
                                <td>&nbsp;</td>
                            </tr>
                            <tr>
                                <td class=" w-60 b-order-right">(City), (Province)</td>
                                <td class="w-20 b-order-right">PST #</td>
                                <td>&nbsp;</td>
                            </tr>
                            <tr>
                                <td class=" w-60 b-order-right">Postal Code</td>
                                <td class="w-20 b-order-right">GST/HST #</td>
                                <td>&nbsp;</td>
                            </tr>
                            <tr>
                                <td class=" w-60 b-order-right">Phone Number of client</td>
                                <td class="w-20 b-order-right">RIN #</td>
                                <td>&nbsp;</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="table-one_section-2">
                    <div class="table-one_section-2_line">
                        <p>Reference #</p>
                        <p>558871 </p>
                    </div>
                    <div class="table-one_section-2_line">
                        <p></p>
                        <p>Date</p>
                    </div>
                    <div class="table-one_section-2_line">
                        <p>OMVIC Registration #</p>
                        <p>5386354</p>
                    </div>
                    <div class="table-one_section-2_line">
                        <p>Dealer Rep</p>
                        <p>Mark Webber</p>
                    </div>
                    <div class="table-one_section-2_line">
                        <p style="opacity: 0;">-------</p>
                        <p style="opacity: 0;">-------</p>
                    </div>
                    <div class="table-one_section-2_line">
                        <p style="opacity: 0;">-------</p>
                        <p style="opacity: 0;">-------</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="table-two">
            <div class="table-two_contend">
                <p>It is the dealers responsibility to do a VIN Check,
                    AutoCheck, Vehicle History check, and Lien Check.
                    The dealer is accountable for collecting vehicle
                    disclosure statement when vehicle is dropped off
                    from the seller</p>
            </div>
        </div>
        <div class="table-three">
            <table class="table-three_one">
                <tr>
                    <th class="b-order">
                        <p>Stock#:</p>
                    </th>
                    <th class="b-order">
                        <p class="t-l">Vehicle:</p>
                    </th>
                    <th class="b-order">
                        <p>VIN #:</p>
                    </th>
                    <th class="b-order">
                        <p>Total KMs</p>
                    </th>
                </tr>
                <tr>
                    <td class="b-order">79694</td>
                    <td class="b-order">
                        <p> Year of vehicle</p>
                        <p>Audi A4 2.0 8sp Tiptronic Progr</p>
                        <p>Moonlight Blue Met, Velvet Bei</p>

                    </td>
                    <td class="b-order">WAUFFCFLXEN004141 </td>
                    <td class="b-order">3000</td>
                </tr>
                <tr>
                    <td colspan="4">
                        <div class="tablet-info">
                            <div class="tablet-info_contend">
                                <div></div>
                                <p>
                                    The dealer is entitled to a 48 hour inspection time from the drop-off date of
                                    vehicle.
                                    Any oustanding liens on the vehicle will be paid out, if anything is owed beyond the
                                    amount on this bill of sale (negative equity), the seller is held responsble to pay
                                    that
                                    in full. Any remaining amount (equity) after lien is paid out will be paid to the
                                    client.
                                </p>
                                <p>The ownership of the aforementioned vehicle shall remain with the
                                    vendor until the total amount owed is settled by the Purchaser.
                                    Upon acceptance and delivery of the vehicle by the Purchaser, all
                                    associated risks and liabilities shall be assumed by the Purchaser.
                                    In the event that full payment of the outstanding balance for this
                                    vehicle is not received by the vendor within three days from the date
                                    of this invoice, or if payment is reversed, stopped, or defaulted
                                    upon, the vendor reserves the right to repossess the vehicle without
                                    prior notice. Such repossession will absolve the vendor of any
                                    liability for incurred damages, and the Purchaser agrees to
                                    indemnify the Vendor against any liability or loss resulting from the
                                    repossession. The Vendor retains the right to sell any repossessed
                                    vehicle, and the Purchaser is obligated to pay the Vendor the
                                    remaining balance of the Sales Price plus applicable taxes. No
                                    warranties, either expressed or implied, apply to this vehicle, and
                                    the Purchaser acknowledges accepting the vehicle in its current
                                    As-Is condition. As the authorized officer representing the
                                    Purchaser, I confirm that I have thoroughly reviewed the terms
                                    outlined on this page, along with the accompanying Vehicle History
                                    Disclosures, constituting this Agreement. I acknowledge that the
                                    vendor has not made any additional promises to me, and that the
                                    terms outlined in this Agreement represent the entirety of our
                                    agreement. Furthermore, I affirm that there are no other
                                    representations made by the Vendor that influence this Agreement.
                                </p>

                            </div>
                        </div>
                    </td>
                </tr>
            </table>
            <table class="table-three_two">
                <tr>
                    <th class="b-order" style="width: 70%;">
                        <p>Options:</p>
                    </th>
                    <th class="b-order">
                        <p>Price:</p>
                    </th>
                </tr>
                <tr>
                    <td style="    border-left: 1px solid black;
                    border-bottom: 1px solid black;">
                        <p>8K2P2A - A4 2.0 8sp Tiptronic Progres</p>
                        <p>Color of Vehicle</p>
                        <br>
                        <br>
                        <p class="t-r" style="font-weight: 700;">Vehicle Subtotal:</p>
                        <br>
                        <br>
                        <br>
                        <p class="t-r" style="font-weight: 700;">Total List:</p>
                        <br>
                        <br>
                        <br>
                        <p class="t-r" style="font-weight: 700;">Sales Price:</p>
                        <p class="t-r" style="font-weight: 700;">GST: 0.00%</p>
                        <p class="t-r" style="font-weight: 700;">PST: 0.00%</p>
                        <p class="t-r" style="font-weight: 700;">HST/GST: 13.00%</p>
                        <p class="t-r" style="font-weight: 700;">Total Due:</p>
                    </td>
                    <td style="    border-right: 1px solid black;
                    border-bottom: 1px solid black;">
                        <p class="t-r" style="font-weight: 700;">$45,500.00</p>
                        <br>
                        <br>
                        <br>
                        <p class="t-r" style="font-weight: 700;">$46,700.00 </p>
                        <br>
                        <br>
                        <br>
                        <p class="t-r" style="font-weight: 700;">$48,800.00
                        </p>
                        <p class="t-r" style="font-weight: 700;">$0.00</p>
                        <br>
                        <br>
                        <p class="t-r" style="font-weight: 700;">$0.00</p>
                        <br>
                        <p class="t-r" style="font-weight: 700;">$55,144.00</p>
                        <p class="t-r" style="font-weight: 700;">$0.00</p>
                        <p class="t-r" style="font-weight: 700;">$55,144.00</p>

                    </td>
                </tr>
            </table>
        </div>

        <div>
            <div style="width: 70%; display: flex; flex-direction: column; gap: 20px;">
                <div style="display:grid;grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;gap:25px;">
                    <div style="display:flex;gap:30px;grid-column: 1/5;width: 100%;">
                        <p>Accepted by Purchaser:</p>
                        <p style="letter-spacing: -3px;">____________________________________________</p>
                    </div>
                    <div style="display: flex;gap: 30px;grid-column: 5 / 9;width: 100%;">
                        <div style="display: flex; text-align: center; gap: 30px;">
                            <p>Reg. #</p>
                            <p style="letter-spacing: -3px;">_________________</p>
                        </div>
                    </div>

                </div>
                <div style="display:grid;grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;gap:25px;">
                    <div style="display:flex;gap:30px;grid-column: 1/5;width: 100%;">
                        <p>Accepted by Purchaser:</p>
                        <p style="letter-spacing: -3px;">____________________________________________</p>
                    </div>
                    <div style="display: flex;gap: 30px;grid-column: 5 / 9;width: 100%;">
                        <div style="display: flex; text-align: center; gap: 30px;">
                            <p>Reg. #</p>
                            <p style="letter-spacing: -3px;">_________________</p>
                        </div>
                    </div>

                </div>
            </div>

            <div style="width: 30%; opacity: 0;">
                <p>----------------------</p>
            </div>
        </div>



    </div>
</body>

</html>`;const P={components:{},setup(){const r=O,o=y(null);s.defaultToolbarItems,x();const n=async e=>{console.log("recivied",e);let i=new FormData;i.append("file",e),i.append("location","test/pdf"),console.log("data",i);try{c.post("/uploader/create",i,{headers:{"Content-Type":"multipart/form-data"}}).then(t=>{console.log("response",t)})}catch{}};return v(async()=>{c.post("/test",{text:r}).then(e=>{console.log("pdf.data.value",e.data.value),o.value=`https://apidev.autosensei.ca/files/${e.data.value}`,console.log("PEPITOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",o.value);const i=`${window.location.protocol}//${window.location.host}/assets/`;s.load({baseUrl:i,container:"#pspdfkit",document:o.value}).then(async function(t){const d=new s.Annotations.WidgetAnnotation({id:s.generateInstantId(),pageIndex:0,isEditable:!1,locked:!1,lockedContents:!1,isReadOnly:!0,boundingBox:new s.Geometry.Rect({left:125,top:740,width:100,height:20}),formFieldName:"my signature form field"}),h=new s.FormFields.SignatureFormField({name:"my signature form field",annotationIds:new s.Immutable.List([d.id])});await t.create([d,h]),t.addEventListener("annotations.create",async _=>{const a=await t.exportPDF();n(a),console.log("buffer",a);const p=new Blob([a],{type:"application/pdf"});console.log("blob",p);const l=new FileReader;l.onloadend=function(){const f=l.result;console.log("dataUrl",f)};let b=l.readAsDataURL(p);console.log("hola",b)}),t.addEventListener("document.saveStateChange",async _=>{})}),console.log("pdf",e)}).catch(e=>{console.log("error",e)})}),{}}},T=w("div",{id:"pspdfkit",style:{width:"100%",height:"100vh"}},null,-1),S=[T];function k(r,o,n,e,i,t){return m(),u("div",null,S)}const C=g(P,[["render",k]]);export{C as default};
