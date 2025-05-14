<template lang="">
  <div class="p-4 h-[50vh] bg-red-100 flex flex-col items-center justify-center">
    <input type="file" class="hidden" ref="fileInput" multiple accept="image/*" @change="onFileChange" />
    <button @click="$refs.fileInput.click()" class="px-4 py-2 mt-36 bg-[#000] text-white rounded">Seleccionar archivos</button>
    <div v-if="selectedFiles.length" class="mt-4">
      <p>Archivos seleccionados: {{ selectedFiles.length }}</p>
      <button @click="uploadFiles" class="px-4 py-2 bg-green-500 bg-[#000] text-white rounded mt-2">Probar subida</button>
    </div>
    <div v-if="uploadResults.length" class="mt-4">
      <h3>Resultados:</h3>
      <pre>{{ JSON.stringify(uploadResults, null, 2) }}</pre>
    </div>
    <div v-if="error" class="mt-4 text-red-500">
      {{ error }}
    </div>
  </div>
</template>
<script>
import { useStoreFile } from '@/stores/uploader';
const storeFile = useStoreFile();
export default {
  data() {
    return {
      selectedFiles: [],
      uploadResults: [],
      id_create: 'test-upload-123', // ID para la prueba (ajustar según necesidades)
      error: null,
    };
  },
  methods: {
    onFileChange(event) {
      this.selectedFiles = Array.from(event.target.files).map(file => ({
        file,
        name: file.name.split('.')[0],
        type: file.type.split('/')[0],
        size: file.size,
        format: file.type.split('/')[1],
      }));
      this.uploadResults = [];
      this.error = null;
    },
    async uploadFiles() {
      try {
        this.uploadResults = [];
        this.error = null;

        // Iteramos sobre cada archivo seleccionado
        for (const element of this.selectedFiles) {
          // Usamos la función proporcionada para probar el endpoint
          let resImages = await Promise.all([
            storeFile.uploaderFile({
              file: element.file,
              location: 'hola',
            }),
          ]);

          this.uploadResults.push({
            file: element.name,
            response: resImages[0],
          });
        }
      } catch (error) {
        console.error('Error al subir archivos:', error);
        this.error = `Error: ${error.message || 'Error desconocido'}`;
      }
    },
  },
};
</script>
<style lang="scss">
.hidden {
  display: none;
}
</style>
