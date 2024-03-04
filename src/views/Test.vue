
<template>
  <div class="w-screen h-screen flex flex-col justify-center gap-4 items-center">
    <div class="flex flex-col gap-2 w-[40vw] relative">
      <div v-if="loading"
        class="w-full h-full bg-[#000000a6] z-[10000]  absolute left-0 flex justify-center items-center">
        <div class="text-indigo-700">
          <div class="h-[80px] w-[80px] ">
            <div class="animate-bounce">
              <svg xmlns="http://www.w3.org/2000/svg" class="animate-spin" fill="#c1f861" stroke="#fff" stroke-width="0"
                viewBox="0 0 16 16">
                <path
                  d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 4c2.209 0 4 1.791 4 4s-1.791 4-4 4-4-1.791-4-4 1.791-4 4-4zM12.773 12.773c-1.275 1.275-2.97 1.977-4.773 1.977s-3.498-0.702-4.773-1.977-1.977-2.97-1.977-4.773c0-1.803 0.702-3.498 1.977-4.773l1.061 1.061c0 0 0 0 0 0-2.047 2.047-2.047 5.378 0 7.425 0.992 0.992 2.31 1.538 3.712 1.538s2.721-0.546 3.712-1.538c2.047-2.047 2.047-5.378 0-7.425l1.061-1.061c1.275 1.275 1.977 2.97 1.977 4.773s-0.702 3.498-1.977 4.773z">
                </path>
              </svg>
            </div>
            <p class="  font-medium pl-2 text-primary ">Loading...</p>
          </div>
        </div>
      </div>

      <div v-if="arrayName.length > 0" v-for="(nameUpload, index) in arrayName" :key="index">
        <div class="flex justify-between border-b border-[#e5e5e5] pb-2 items-start gap-4 w-full">
          <div v-if="nameUpload.preview" class="w-16">
            <img class="w-15 object-cover h-15 rounded-lg shadow-lg" :src="nameUpload.preview" alt="">
          </div>
          <div v-if="!nameUpload.completed" class="w-full flex flex-col gap-2">
            <p class="capitalize">{{ nameUpload.name }}</p>
            <div class="bg-[#E5E5E5] whitespace-pre shadow-sm w-full rounded-full  h-4">
              <div :style="{ width: porcertanje + '%' }"
                class=" h-4 bg-primary flex justify-center items-center rounded-full shadow-progreess ">
                <p class="text-[10px] ">{{ porcertanje }} %</p>
              </div>
            </div>
          </div>
          <div v-else class="w-full flex flex-col gap-2">
            <p class="capitalize">{{ nameUpload.name }}</p>
            <div class="bg-[#E5E5E5] rounded-full  shadow-xl h-4">
              <div class=" w-full h-4 bg-primary flex justify-center items-center rounded-full">
                <p class="text-[10px]">100%</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <input v-if="!form.img.preview" type="file" @change="previewFiles($event, 'imagen')">
      <input v-if="!form.img1.preview" type="file" @change="previewFiles($event, 'imagen1')">
      <input v-if="!form.img2.preview" type="file" @change="previewFiles($event, 'imagen2')">
      <input v-if="!form.img3.preview" type="file" @change="previewFiles($event, 'imagen3')">
      <input v-if="!form.img4.preview" type="file" @change="previewFiles($event, 'imagen4')">
      <input v-if="!form.img5.preview" type="file" @change="previewFiles($event, 'imagen5')">
      <input v-if="!form.img6.preview" type="file" @change="previewFiles($event, 'imagen6')">
      <input v-if="!form.img7.preview" type="file" @change="previewFiles($event, 'imagen7')">
      <input v-if="!form.img8.preview" type="file" @change="previewFiles($event, 'imagen8')">
      <input v-if="!form.img9.preview" type="file" @change="previewFiles($event, 'imagen9')">
      <div class="space-y-1">
        <label htmlFor="password" class="block text-sm font-medium text-gray-700">
          Ingresa la ruta
        </label>
        <div class="mt-1">
          <input v-model="form" type="text" placeholder="/uploader/create"
            class="appearance-none block w-full px-3 py-2 border border-[#E0E0E0] rounded-md shadow-sm placeholder-[#858585] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
      </div>
      <button class="btn bg-primary" @click="sutmit">TEST</button>
      <p v-if="error" class="mt-6 rounded-lg h-2"> IDIOTA INGRESA LA <span class="text-error">URL</span> O <span
          class="text-error"> LA IMAGEN</span>
        PARA QUE NO TE DE ERROR</p>
    </div>

  </div>
</template>

<script >
import { ref, onMounted, watch, computed } from "vue";
import { useStoreFile } from "@/stores/uploader";
export default {
  components: {},
  setup() {
    const form = ref({
      img: {
        file: '',
        name: '',
        preview: '',
        completed: false,
      },
      img1: {
        file: '',
        name: '',
        preview: '',
        completed: false,
      },
      img2: {
        file: '',
        name: '',
        preview: '',
        completed: false,
      },
      img3: {
        file: '',
        name: '',
        preview: '',
        completed: false,
      },
      img4: {
        file: '',
        name: '',
        preview: '',
        completed: false,
      },
      img5: {
        file: '',
        name: '',
        preview: '',
        completed: false,
      },
      img6: {
        file: '',
        name: '',
        preview: '',
        completed: false,
      },
      img7: {
        file: '',
        name: '',
        preview: '',
        completed: false,
      },
      img8: {
        file: '',
        name: '',
        preview: '',
        completed: false,
      },
      img9: {
        file: '',
        name: '',
        preview: '',
        completed: false,
      },
    })
    const uploadName = ref('')
    const storeFile = useStoreFile()
    const progress = storeFile.progressUpload
    const error = ref(false)
    const loading = ref(false)
    const porcertanje = ref(0)
    const arrayName = ref([])
    const powerValue = ref(computed(() => { return storeFile.progressUpload }))
    const previewFiles = async (event, option) => {
      let files = event.target.files[0]
      var reader = new FileReader();
      reader.onload = (e) => {
        switch (option) {
          case 'imagen':
            form.value.img.file = files;
            form.value.img.name = option
            form.value.img.preview = e.target.result;
            break;
          case 'imagen1':
            form.value.img1.file = files;
            form.value.img1.name = option
            form.value.img1.preview = e.target.result;
            break;
          case 'imagen2':
            form.value.img2.file = files;
            form.value.img2.name = option
            form.value.img2.preview = e.target.result;
            break;
          case 'imagen3':
            form.value.img3.file = files;
            form.value.img3.name = option
            form.value.img3.preview = e.target.result;
            break;
          case 'imagen4':
            form.value.img4.file = files;
            form.value.img4.name = option
            form.value.img4.preview = e.target.result;
            break;
          case 'imagen5':
            form.value.img5.file = files;
            form.value.img5.name = option
            form.value.img5.preview = e.target.result;
            break;
          case 'imagen6':
            form.value.img6.file = files;
            form.value.img6.name = option
            form.value.img6.preview = e.target.result;
            break;
          case 'imagen7':
            form.value.img7.file = files;
            form.value.img7.name = option
            form.value.img7.preview = e.target.result;
            break;
          case 'imagen8':
            form.value.img8.file = files;
            form.value.img8.name = option
            form.value.img8.preview = e.target.result;
            break;
          case 'imagen9':
            form.value.img9.file = files;
            form.value.img9.name = option
            form.value.img9.preview = e.target.result;
            break;

          default:
            break;
        }

      }
      reader.readAsDataURL(event.target.files[0]);

    }
    watch(powerValue, async (newQuestion, oldQuestion) => {
      porcertanje.value = newQuestion
    })

    const sutmit = async () => {
      uploadName.value = form.value.img.name
      arrayName.value = [...arrayName.value, form.value.img]
      let res = await Promise.all([storeFile.uploaderFile({ file: form.value.img.file, location: form.value.img.name })])
      if (res[0]?.data) arrayName.value[0].completed = true
      uploadName.value = form.value.img1.name
      arrayName.value = [...arrayName.value, form.value.img1]
      let res1 = await Promise.all([storeFile.uploaderFile({ file: form.value.img1.file, location: form.value.img1.name })])
      console.log('res1', res1)
      if (res1[0]?.data) arrayName.value[1].completed = true
      uploadName.value = form.value.img2.name
      arrayName.value = [...arrayName.value, form.value.img2]
      let res2 = await Promise.all([storeFile.uploaderFile({ file: form.value.img2.file, location: form.value.img2.name })])
      if (res2[0]?.data) arrayName.value[2].completed = true


      uploadName.value = form.value.img3.name
      arrayName.value = [...arrayName.value, form.value.img3]
      let res3 = await Promise.all([storeFile.uploaderFile({ file: form.value.img3.file, location: form.value.img3.name })])
      if (res3[0]?.data) arrayName.value[3].completed = true


      uploadName.value = form.value.img4.name
      arrayName.value = [...arrayName.value, form.value.img4]
      let res4 = await Promise.all([storeFile.uploaderFile({ file: form.value.img4.file, location: form.value.img4.name })])
      if (res4[0]?.data) arrayName.value[4].completed = true


      uploadName.value = form.value.img5.name
      arrayName.value = [...arrayName.value, form.value.img5]
      let res5 = await Promise.all([storeFile.uploaderFile({ file: form.value.img5.file, location: form.value.img5.name })])
      if (res5[0]?.data) arrayName.value[5].completed = true


      uploadName.value = form.value.img6.name
      arrayName.value = [...arrayName.value, form.value.img6]
      let res6 = await Promise.all([storeFile.uploaderFile({ file: form.value.img6.file, location: form.value.img6.name })])
      if (res6[0]?.data) arrayName.value[6].completed = true


      uploadName.value = form.value.img7.name
      arrayName.value = [...arrayName.value, form.value.img7]
      let res7 = await Promise.all([storeFile.uploaderFile({ file: form.value.img7.file, location: form.value.img7.name })])
      if (res7[0]?.data) arrayName.value[7].completed = true


      uploadName.value = form.value.img8.name
      arrayName.value = [...arrayName.value, form.value.img8]
      let res8 = await Promise.all([storeFile.uploaderFile({ file: form.value.img8.file, location: form.value.img8.name })])
      if (res8[0]?.data) arrayName.value[8].completed = true


      uploadName.value = form.value.img9.name
      arrayName.value = [...arrayName.value, form.value.img9]
      let res9 = await Promise.all([storeFile.uploaderFile({ file: form.value.img9.file, location: form.value.img9.name })])
      if (res9[0]?.data) arrayName.value[9].completed = true
      console.log('arrayName.value', arrayName.value)
    }
    onMounted(() => {
    })
    return {
      previewFiles,
      form,
      error,
      sutmit,
      loading,
      uploadName,
      storeFile,
      porcertanje,
      arrayName
    };
  },
};
</script>

  
