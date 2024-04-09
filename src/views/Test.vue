// src/App.vue

<template>
  <div>
    <div id="pspdfkit" style="width: 100%; height: 100vh;"></div>
  </div>


</template>

<script>
import PSPDFKit from 'pspdfkit';
import { onMounted, ref } from 'vue';
import axios from "@/axios";
import { template } from '../utils/templatePDF';
import { useStoreFile } from "@/stores/uploader";

export default {
  components: {

  },
  setup() {
    const formatPDF = template
    const getPdf = ref(null)
    const items = PSPDFKit.defaultToolbarItems;


    const storeFile = useStoreFile()
    const sutmibPDF = async (pdf) => {
      console.log('recivied', pdf)
      let data = new FormData();
      data.append("file", pdf);
      data.append("location", 'test/pdf');
      console.log('data', data)
      try {
        axios
          .post('/uploader/create', data, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          .then((response) => {
            console.log('response', response)
          })
        /*   let resFile = await storeFile.uploaderFile({ file: pdf, location: 'test/pdf' })
          console.log('resFile', resFile) */
      } catch (error) {

      }
    }
    onMounted(async () => {
      axios
        .post("/test", {
          text: formatPDF
        })
        .then((pdf) => {
          console.log('pdf.data.value', pdf.data.value)
          getPdf.value = `https://apidev.autosensei.ca/files/${pdf.data.value}`
          console.log('PEPITOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO', getPdf.value)
          const baseUrl = `${window.location.protocol}//${window.location.host}/assets/`;
          PSPDFKit.load({
            baseUrl,
            container: "#pspdfkit",
            document: getPdf.value,
          }).then(async function (instance) {
            const widget = new PSPDFKit.Annotations.WidgetAnnotation({
              id: PSPDFKit.generateInstantId(),
              pageIndex: 0,
              isEditable: false,
              locked: false,
              lockedContents: false,
              isReadOnly: true,
              boundingBox: new PSPDFKit.Geometry.Rect({
                left: 125,
                top: 740,
                width: 100,
                height: 20
              }),
              formFieldName: "my signature form field"
            })
            const formField = new PSPDFKit.FormFields.SignatureFormField({
              name: "my signature form field",
              annotationIds: new PSPDFKit.Immutable.List([widget.id])
            });
            await instance.create([widget, formField]);
            instance.addEventListener("annotations.create", async (e) => {
              const buffer = await instance.exportPDF();
              sutmibPDF(buffer)
              console.log('buffer', buffer)
              /*  const supportsDownloadAttribute = HTMLAnchorElement.prototype.hasOwnProperty("download"); */
              const blob = new Blob([buffer], { type: "application/pdf" });
              console.log('blob', blob)
              const reader = new FileReader();
              reader.onloadend = function () {
                const dataUrl = reader.result;

                console.log('dataUrl', dataUrl)
              };
              let hola = reader.readAsDataURL(blob);

              console.log('hola', hola)
            });
            instance.addEventListener("document.saveStateChange", async (event) => {

            })
          })
          console.log('pdf', pdf)
        })
        .catch((error) => {
          console.log('error', error)
        });
     



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