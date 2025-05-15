<template>
  <div class="p-4 h-[100vh] bg-red-100 flex flex-col items-center justify-center">
    <input type="file" class="hidden" ref="fileInput" multiple accept="image/*" @change="onFileChange" />
    <button @click="fileInput.click()" class="px-4 py-2 mt-36 bg-[#000] text-white rounded">Seleccionar archivos</button>
    <div v-if="selectedFiles.length" class="mt-4">
      <p>Archivos seleccionados: {{ selectedFiles.length }}</p>
      <button @click="uploadFiles" class="px-4 py-2 bg-green-500 bg-[#000] text-white rounded mt-2">Probar subida</button>
    </div>
    <div v-if="uploadResults.length" class="mt-4">
      <h3>Resultados:</h3>
      <pre>{{ JSON.stringify(uploadResults, null, 2) }}</pre>
    </div>
    <div v-if="error" class="mt-4 text-red-500">
      {{ JSON.stringify(error) }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useStoreFile } from '@/stores/uploader';

// Store
const storeFile = useStoreFile();

// Referencias reactivas
const fileInput = ref(null);
const selectedFiles = ref([]);
const uploadResults = ref([]);
const id_create = ref('test-upload-123'); // ID para la prueba (ajustar según necesidades)
const error = ref(null);

// Métodos como funciones
const onFileChange = event => {
  selectedFiles.value = Array.from(event.target.files).map(file => ({
    file,
    name: file.name.split('.')[0],
    type: file.type.split('/')[0],
    size: file.size,
    format: file.type.split('/')[1],
  }));
  uploadResults.value = [];
  error.value = null;
};

const uploadFiles = async () => {
  try {
    uploadResults.value = [];
    error.value = null;

    // Iteramos sobre cada archivo seleccionado
    for (const element of selectedFiles.value) {
      // Usamos la función proporcionada para probar el endpoint
      // Nota: Se corrigió la coma incorrecta que había aquí
      let resImages = await storeFile.uploaderFile({
        file: element.file,
        location: 'hola',
      });

      uploadResults.value.push({
        file: element.name,
        response: resImages[0],
      });
    }
  } catch (err) {
    console.error('Error al subir archivos:', err);
    error.value = `Error: ${err.message || 'Error desconocido'}`;
  }
};
</script>

<style lang="scss">
.hidden {
  display: none;
}
</style>
