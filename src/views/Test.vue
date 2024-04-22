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
</template>

<script>
import PSPDFKit from 'pspdfkit';
import '../../assets/pspdfkit';
import document from '../assets/dummy.pdf'
import { onMounted, ref } from 'vue';
import axios from "@/axios";
import loadimage from '../assets/img/jpg/loading.gif'
import errorimage from '../assets/img/jpg/error.png'
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
    onMounted(async () => {
      /*  const baseUrl = `${window.location.protocol}//${window.location.host}/assets/`;
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
       }) */



    })
    return {
      loadimage,
      errorimage
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