// src/App.vue

<template>
  <div>
    <!--     <div id="pspdfkit" style="width: 100%; height: 100vh;"></div> -->
    <div v-lazy-container="{ selector: 'img' }">
      <img class="w-[200px] h-[200px]" :data-loading="loadimage"
        data-src="https://s3.us-east-2.amazonaws.com/files.autosensei.ca/public/svg/about/Frame3.svg">
      <img class="w-[200px] h-[200px]" :data-loading="loadimage"
        data-src="https://s3.us-east-2.amazonaws.com/files.autosensei.ca/public/svg/about/Frame2.svg">
      <img class="w-[200px] h-[200px]" :data-loading="loadimage"
        data-src="https://s3.us-east-2.amazonaws.com/files.autosensei.ca/public/svg/about/Frame.svg">
    </div>
  </div>
  <div>
    Automatic Create Aution
  </div>

  <div>
    <Button v-if="step.step" @click="createAution" :disabled="loading ? true : false"
      class="btn bg-primary rounded-md ">
      <span v-if="loading">Creando...</span>
      <span v-else>Create</span>
    </Button>
    <Button @click="update" v-if="step.step2" :disabled="loading ? true : false" class="btn bg-primary rounded-md ">
      <span v-if="loading">Update...</span>
      <span v-else>Update Data Aution</span>
    </Button>
  </div>
</template>

<script>
import PSPDFKit from 'pspdfkit';
import '../../assets/pspdfkit';
import document from '../assets/dummy.pdf'
import { onMounted, ref } from 'vue';
import axios from "@/axios";
import loadimage from '../assets/img/jpg/loading.gif'
import errorimage from '../assets/img/jpg/error.png'
import { useAuctionStore } from "@/stores/auctions";
export default {
  components: {
    loadimage,
    errorimage,
  },
  setup() {
    /*  let instance;
     const downloadButton = {
       type: "custom",
       id: "download-pdf",
       icon: "/download.svg",
       title: "Download",
       onPress: () => {
 
       }
     };
     const url = ref('https://s3.us-east-2.amazonaws.com/files.autosensei.ca/public/svg/carji.svg')
     const getPdf = ref(null)
     const items = PSPDFKit.defaultToolbarItems;
     items.push(downloadButton); */
    const store = useAuctionStore()
    const loading = ref(false)
    const step = ref({
      step: true,
      step2: false
    })
    const id_aution = ref(null)
    const createAution = async () => {
      let dataPost = {
        vin: 'W1KZF8DB9MA200007',
        dropOffDate: '2024-04-25T14:51:00.000Z',
        city: 'Alberta',
        province: 'Lethbridge',
        keysNumber: '2 keys',
        vehicleStatus: {
          status: 'Paid OFF',
        },
        buyout: undefined,
        buyNew: {
          anyVehicle: false,
        }
      }
      try {
        let res = await store.create(dataPost)
        if (res.data) {
          console.log('res.data', res.data)
          id_aution.value = res.data._id
          step.value.step = false
          step.value.step2 = true
        }
      } catch (error) {
        console.log('error', error)

      }
    }

    const update = async () => {
      loading.value = true
      let data = {
        "vin": "W1KZF8DB9MA200007",
        "dropOffDate": "2024-04-25T15:03:00.000Z",
        "city": "Alberta",
        "province": "Lethbridge",
        "keysNumber": "1 keys",
        "vehicleStatus": {
          "status": "Paid OFF"
        },
        "buyNew": {
          "anyVehicle": false
        },
        "startDate": null,
        "duration": 45,
        "vehicleDetails": {
          "odometer": 5000,
          "doors": "4 Doors",
          "color": "silver",
          "driveTrain": "RWD",
          "aditionals": "Additionals Packages",
          "tireCondition": "Good",
          "tireReplacement": "2023",
          "brakeCondition": "Brand New",
          "brakeReplacement": "2022",
          "originalDocument": "development/6627ce68d107592cc473718c/original-documents/1713884903372.png",
          "driverLicense": "development/6627ce68d107592cc473718c/driver-license/1713884903632.png",
          "exteriorPhotos": [
            "development/6627ce68d107592cc473718c/front-photo/1713884903902.png",
            "development/6627ce68d107592cc473718c/front/1713884904142.png",
            "development/6627ce68d107592cc473718c/driver-side-(exterior)/1713884904412.png",
            "development/6627ce68d107592cc473718c/'back'/1713884904772.png",
            "development/6627ce68d107592cc473718c/passenger-side/1713884905202.png",
            "development/6627ce68d107592cc473718c/tire-and-rim/1713884905472.png"
          ],
          "interiorPhotos": [
            "development/6627ce68d107592cc473718c/drivers-display-(odometer)/1713884905732.png",
            "development/6627ce68d107592cc473718c/drivers-side-(interior)/1713884905972.png",
            "development/6627ce68d107592cc473718c/center-console/1713884906222.png",
            "development/6627ce68d107592cc473718c/rear-seats/1713884906455.png"
          ],
          "vehicleDamage": [],
          "additionalDocuments": []
        }
      }
      let res = await store.update({ uuid: id_aution.value, payload: data })
      if (res.data) {
        console.log('res.data', res.data)
        loading.value = false
        step.value.step = true;
        step.value.step2 = false;
        id_aution.value = null;
      }
    }
    onMounted(async () => {
      
      const baseUrl = `${window.location.protocol}//${window.location.host}/assets/`;
      /*   PSPDFKit.load({
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
        }) */



    })
    return {
      loadimage,
      errorimage,
      step,
      createAution,
      loading,
      update
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