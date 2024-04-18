// src/App.vue

<template>
  <!-- <div id="app">
    <label for="file-upload" class="custom-file-upload">
      Open PDF
    </label>
    <input id="file-upload" type="file" @change="openDocument" class="btn" />
    <PSPDFKitContainer :pdfFile="pdfFile" @loaded="handleLoaded" />
  </div> -->
  <div>
    <div id="pspdfkit" style="width: 100%; height: 100vh;"></div>
    <!--  <div style="padding: 100px;">
      <h1>AQUI ESTA EL PDF</h1>
      <br>
      <br>
      <br>
      <br>
      <div style="width: 100%; display: flex; justify-content: space-between; align-items: center;">
        <div style="display: flex; flex-direction: column; gap: 5px; justify-content: flex-start; align-items: start;">
          <h1 style="font-size: x-large; font-weight: 500;">Audi Queensway (2304718 Ontario Inc.)</h1>
          <p>1635 The Queensway</p>
          <p>Toronto, ON</p>
          <div style="display: flex; align-items: center; gap: 20px;">
            <p> M8Z 1T8 </p>
            <div style="display: flex; align-items: center; gap: 10px;">
              <p>Phone: (416) 259-7128</p>
              <p>Fax: (416) 259-2215</p>
            </div>

          </div>
        </div>
        <div style="display: flex; flex-direction: column; gap: 5px;">
          <p style="font-size: x-large; font-weight: 500;">Quote</p>
          <p>Wholesale Invoice #: <span style="letter-spacing: -3px;">________________________</span> </p>
        </div>
      </div>
      <div>
        <p style="font-weight: 600;">Sold to Purchaser:</p>
        <div style="display: flex; justify-content: space-between; width: 100%;">
          <div style=" width: 70%; display: flex; ">
            <div
              style=" width: 60%; display: flex; flex-direction: column; justify-content: space-between; border: 1px solid black;">
              <p>ARI Financial Services</p>
              <p>1270 Central Parkway West</p>
              <p>Mississauga, ON</p>
              <p>L5C 4P4 </p>
              <p>Phone: (905) 803-8000 Fax:</p>
            </div>
            <div
              style="display: flex; width: 20%; justify-content: space-between; align-items: flex-end; flex-direction: column; border: 1px solid black;">
              <p>Dealer #</p>
              <p style="opacity: 0;">-------------------</p>
              <p>PST #</p>
              <p>GST/HST #</p>
              <p>RIN #</p>
            </div>
            <div style="display: flex; width: 20%; flex-direction: column; border: 1px solid black;">
              <p style="opacity: 0;">-------------------</p>
              <p style="opacity: 0;">-------------------</p>
              <p style="opacity: 0;">-------------------</p>
              <p style="opacity: 0;">-------------------</p>
            </div>
          </div>
          <div style="width: 30%;">
            <div style="display: grid; grid-template-columns: 1fr 1fr;">
              <p style="font-size: medium; text-align: end; border-right: 1px solid black;">Quote #</p>
              <p style="font-size: medium;">558871</p>
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr;">
              <p style="font-size: medium; text-align: end; border-right: 1px solid black;">Invoice Date</p>
              <p style="font-size: medium;">3/27/2014</p>
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr;">
              <p style="font-size: medium; text-align: end; border-right: 1px solid black;">Our GST/HST Number</p>
              <p style="font-size: medium;">841194681</p>
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr;">
              <p style="font-size: medium; text-align: end; border-right: 1px solid black;">Our Dealer Number</p>
              <p style="font-size: medium;">5386354</p>
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr;">
              <p style="font-size: medium; text-align: end; border-right: 1px solid black;">Sales Rep</p>
              <p style="font-size: medium;">Mark Webber</p>
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr;">
              <p style="font-size: medium; text-align: end; border-right: 1px solid black;">Sales Rep Reg #</p>
              <p style="font-size: medium;">3224486</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p style="font-weight: 600;">Customer / Driver Information:</p>
        <div style="height: 180px; display: flex;align-items: center;">
          <div style=" width: 70%; height: 100%; border: 1px solid black; ">
            <p>Not Applicable</p>
          </div>
          <div style="width: 0%;">
            <p style="opacity: 0;">------------------</p>
          </div>

        </div>
        <div style="width: 100%; display: flex; position: relative;">
          <div
            style="display: grid; margin-top: 15px; grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr; grid-template-rows: 1fr 1fr 1fr 1fr; width: 70%; height: 180px; border: 1px solid black; ">
            <div
              style=" border: 1px solid black; width: 100%; height: 100%; display: flex; align-items: center; display: flex; align-items: center; width: 100%; justify-content: center; grid-column: 1/3;">
              <p style=" text-align: center;  font-weight: 600;">Stock#:</p>
            </div>
            <div
              style=" border: 1px solid black; width: 100%; height: 100%; display: flex; align-items: center; display: flex; align-items: center; width: 100%; grid-column: 3/7;">
              <p style=" font-weight: 600;">Vehicle:</p>
            </div>
            <div
              style=" border: 1px solid black; width: 100%; height: 100%; display: flex; align-items: center; display: flex; align-items: center; width: 100%; justify-content: center; grid-column: 7/11;">
              <p style=" text-align: center;  font-weight: 600;">Serial#:</p>
            </div>
            <div
              style=" border: 1px solid black; width: 100%; height: 100%; display: flex; align-items: center; display: flex; align-items: center; width: 100%; justify-content: center; grid-column: 11/13;">
              <p style="  text-align: center; font-weight: 600;">Total KMs</p>
            </div>
            <div
              style=" border: 1px solid black; grid-row: 2/5; grid-column: 1/3; width: 100%; height: 100%; align-items: center; justify-content: center;">
              <p style="text-align: center; margin-top: 10px;">79694</p>

            </div>
            <div
              style="width: 100%; border: 1px solid black; height: 100%;  grid-row: 2/5; display: flex; flex-direction: column; align-items: start; display: flex;  grid-column: 3/7;">
              <p>Demo 2014</p>
              <p>Audi A4 2.0 8sp Tiptronic Progr</p>
              <p>Moonlight Blue Met, Velvet Bei</p>
            </div>
            <div
              style="width: 100%; border: 1px solid black; height: 100%;  grid-row: 2/5; display: flex; flex-direction: column; align-items: center; display: flex;   grid-column: 7/11;">
              <p style=" text-align: center;">WAUFFCFLXEN004141</p>
              <p style=" text-align: center;">NA</p>
            </div>
            <div
              style="width: 100%; border: 1px solid black; height: 100%;  grid-row: 2/5; display: flex; flex-direction: column; align-items: center; display: flex;  grid-column: 11/13;">
              <p>3000</p>
            </div>
          </div>
          <div
            style="width: 30%;     border: 1px solid black;
    border-top: 0px; margin-top: 15px; display: grid; grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr; grid-template-rows: 1fr 1fr 1fr 1fr;">
            <div
              style=" border: 1px solid black; width: 100%; height: 100%; display: flex; align-items: center; display: flex; align-items: center; width: 100%; justify-content: center; grid-column: 1/6;">
              <p style=" text-align: center;  font-weight: 600;">Options:</p>
            </div>
            <div
              style=" border: 1px solid black; width: 100%; justify-content: center; height: 100%; display: flex; align-items: center; display: flex; align-items: center; width: 100%; grid-column: 6/9;">
              <p style=" font-weight: 600;">Price:</p>
            </div>
            <div
              style=" display: flex; flex-direction: column; grid-row: 2/5; grid-column: 1/6; width: 100%; height: 100%; justify-content: start;">
              <p style=" margin-top: 10px;">8K2P2A - A4 2.0 8sp Tiptronic Progres</p>
              <p> MET - Metallic/Pearl Effect Paint</p>
              <p>7X1 - Rear Parking System</p>
              <p>6W3 - Front License Plate Frame</p>
              <p style=" font-weight: 700; text-align: end; ">Vehicle Subtotal:</p>

              <p style=" margin-top: 10px;">Air Tax</p>
              <p>Freight & PDI</p>
              <p>OMVIC Fee</p>
              <p style=" font-weight: 700; text-align: end; ">Total List:</p>

            </div>
            <div
              style=" display: flex ; flex-direction: column; grid-row: 2/5; grid-column: 6/9; width: 100%; height: 100%;  align-items: flex-end;">
              <p style=" margin-top: 10px;">$45,500.00</p>
              <p>$800.00</p>
              <p>$400.00</p>
              <p>$0.00</p>
              <p style=" font-weight: 700; text-align: end; ">$46,700.00</p>

              <p>$100.00</p>
              <p>$1,995.00</p>
              <p>$5.00</p>
              <p style=" font-weight: 700; text-align: end; margin-top: 10px; ">$48,800.00</p>
            </div>
          </div>
          <div style="position: absolute; bottom: 0px; left: 0; display: flex; flex-direction: column; gap: 52px;">
            <div style="display: flex; flex-direction: column;">
              <p>Contact:</p>
              <p>
                Comments: This quote is not binding unless signed by authorized Dealer Management</p>
            </div>
            <div>
              <p style="font-size: large;">Searches performed: - Lien - Autocheck - Vehicle History</p>
            </div>

          </div>
        </div>

      </div>
      <div style="display: flex; gap: 15px; padding: 20px;">
        <div style="width: 70%;">
          <p>
            The above vehicle remains the property of the vendor and the title of the above
            vehicle shall not be transferred to the Purchaser until the Total Due to the vendor is
            paid in full. Once the Purchaser has accepted this vehicle and has taken delivery of
            this vehicle, the Purchaser accepts all risks of and liabilities for the vehicle. In
            the case where the vendor has not received full payment of the Balance Owing for this
            vehicle within 3 days of the Invoice Date hereof or if payment has been reversed,
            stopped or defaulted on, the vendor may repossess this vehicle at any time and without
            notice. Such repossession will be without liability to the vendor for any incurred
            damages and Purchaser will hold3Vendor harmless for any liability or loss caused by
            the repossession. Vendor may sell any such repossessed vehicle and the Purchaser
            agrees to pay the Vendor the balance of the Sales Price above plus applicable taxes.
            No warranties of any kind apply to this vehicle and none are expressed or implied. The
            Purchaser hereby accepts the Vehicle in As-Is condition.
          </p>
          <p>
            As the authorized officer for the Purchaser, I have read the terms on this page and
            the accompanying Vehicle History Disclosures making up this Agreement and agree that
            the vendor has not made any promises to me, nor are there any other terms relating
            to this Agreement except as written in this Agreement and that there are no
            representations whatsoever on the part of the Vendor which induce this Agreement.
          </p>
        </div>
        <div style="width: 30%; opacity: 0;">
          <p>----------------------</p>
        </div>
      </div>
      <div>
        <div style="width: 70%; display: flex; flex-direction: column; gap: 40px;">
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
      <div style="width: 100%; margin-top: 20px; display: flex; justify-content: flex-end;">
        <p style="font-size: 12px;">Copyright 2024 ONE-EIGHTY CORP</p>
      </div>


    </div> -->
  </div>
</template>

<script>
import PSPDFKit from 'pspdfkit';
import '../../assets/pspdfkit';
import document from '../assets/dummy.pdf'
import { onMounted, ref } from 'vue';
import axios from "@/axios";

export default {
  components: {

  },
  setup() {
    let instance;
    const downloadButton = {
      type: "custom",
      id: "download-pdf",
      icon: "/download.svg",
      title: "Download",
      onPress: () => {

      }
    };
    const getPdf = ref(null)
    const items = PSPDFKit.defaultToolbarItems;
    items.push(downloadButton);
    onMounted(async () => {
      const baseUrl = `${window.location.protocol}//${window.location.host}/assets/`;
      PSPDFKit.load({
        baseUrl,
        container: "#pspdfkit",
        document: 'https://pdfobject.com/pdf/sample.pdf',
      }).then(async function (instance) {
        const widget = new PSPDFKit.Annotations.WidgetAnnotation({
          pageIndex: 0,
          boundingBox: new PSPDFKit.Geometry.Rect({
            left: 200,
            top: 600,
            width: 150,
            height: 75
          }),
          formFieldName: "My signature form field",
          id: PSPDFKit.generateInstantId()
        })
        const formField = new PSPDFKit.FormFields.SignatureFormField({
          name: "My signature form field",
          annotationIds: PSPDFKit.Immutable.List([widget.id])
        });
        instance.create([widget, formField]);
        instance.addEventListener("annotations.create", async (event) => {
          console.log('asdasds', event);
          const buffer = await instance.exportPDF();
          const supportsDownloadAttribute = HTMLAnchorElement.prototype.hasOwnProperty("download");
          const blob = new Blob([buffer], { type: "application/pdf" });

          const reader = new FileReader();
          reader.onloadend = function () {
            const dataUrl = reader.result;
            console.log('dataUrl', dataUrl)
          };
          let hola = reader.readAsDataURL(blob);
          console.log('hola', hola)
        });
        instance.addEventListener("annotations.focus ", function (annotationFocusEvent) {
          // Registrará las propiedades de la anotación del widget que se acaba de enfocar.
          console.log('annotationFocusEvent', annotationFocusEvent)
          console.log('annotationFocusEvent', annotationFocusEvent.annotation.toJS());
        });
        instance.addEventListener("document.saveStateChange", async (event) => {

        })
      })



    })
    return {

    };
  },
};
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
}

input[type='file'] {
  display: none;
}

.custom-file-upload {
  border: 1px solid #ccc;
  border-radius: 4px;
  display: inline-block;
  padding: 6px 12px;
  cursor: pointer;
  background: #4a8fed;
  padding: 10px;
  color: #fff;
  font: inherit;
  font-size: 16px;
  font-weight: bold;
}
</style>