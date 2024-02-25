
<template>
  <div class="w-screen h-screen flex flex-col justify-center gap-4 items-center">
    <div class="group">
      <h1 class="text-base-black text-2xl hover:text-4xl group ">MARICO EL QUE LO LEA</h1>
      <h1 class="text-base-black text-4xl hidden group-hover:block ">OSEA ANDRESSSSSS</h1>
    </div>

    <div class="flex flex-col gap-2 relative">
      <div v-if="loading" class="w-full h-full bg-[#000000a6] z-[10000]  absolute left-0 flex justify-center items-center">
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
      <input type="file" @change="previewFiles">
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
import { ref, onMounted } from "vue";
import { useStoreFile } from "@/stores/uploader";
export default {
  components: {},
  setup() {
    const form = ref('/uploader/create')
    const img = ref(null)
    const storeFile = useStoreFile()
    const error = ref(false)
    const loading = ref(false)
    const previewFiles = async (event) => {
      img.value = event.target.files[0]

    }
    const sutmit = async () => {
      if (!form.value || !img.value) {
        error.value = true
        return
      } else {
        error.value = false
        loading.value = true
        console.log('img.value', img.value)
        console.log('form.value', form.value)
        try {
          let res = await storeFile.uploaderFile({ file: img.value, location: 'test', route: form.value })
          console.log(res);
        } catch (error) {
          console.log('error', error)
          loading.value = false
        } finally {
          loading.value = false
        }

      }
    }
    return {
      previewFiles,
      form,
      error,
      sutmit,
      loading
    };
  },
};
</script>

  
