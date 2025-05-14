<template lang="">
  <div class="p-4 h-[100vh] bg-red-100 flex flex-col items-center justify-center">
    <input type="file" class="hidden" ref="fileInput" multiple accept="image/*,.heic,.HEIC" @change="onFileChange" />
    <button @click="$refs.fileInput.click()" class="px-4 py-2 mt-36 bg-[#000] text-white rounded">Seleccionar archivos</button>
    <div v-if="selectedFiles.length" class="mt-4">
      <p>Archivos seleccionados: {{ selectedFiles.length }}</p>
      <ul class="mt-2 text-left">
        <li v-for="(file, index) in selectedFiles" :key="index" class="mb-1">
          {{ file.name }}.{{ file.format }}
          <span v-if="file.isHeic" class="text-blue-600 ml-2">(Se convertirá a JPEG)</span>
        </li>
      </ul>
      <button @click="uploadFiles" class="px-4 py-2 bg-green-500 bg-[#000] text-white rounded mt-2">Probar subida</button>
    </div>
    <div v-if="uploadResults.length" class="mt-4">
      <h3>Resultados:</h3>
      <pre>{{ JSON.stringify(uploadResults, null, 2) }}</pre>
    </div>
    <div v-if="error" class="mt-4 text-red-500">
      {{ error }}
    </div>
    <div v-if="isConverting" class="mt-4 text-blue-500">Convirtiendo imágenes HEIC, por favor espera...</div>
  </div>
</template>
<script>
import { useStoreFile } from '@/stores/uploader';
// Importar heic2any después de instalarlo: npm install heic2any
import heic2any from 'heic2any';

const storeFile = useStoreFile();
export default {
  data() {
    return {
      selectedFiles: [],
      uploadResults: [],
      id_create: 'test-upload-123',
      error: null,
      isConverting: false,
    };
  },
  methods: {
    onFileChange(event) {
      this.selectedFiles = Array.from(event.target.files).map(file => {
        // Determinar extensión de forma segura
        const nameParts = file.name.split('.');
        const format = nameParts.length > 1 ? nameParts.pop().toLowerCase() : '';
        const name = nameParts.join('.');

        // Detectar si es un archivo HEIC
        const isHeic = format.toLowerCase() === 'heic';

        // Determinar tipo de forma más segura
        let type = 'unknown';
        if (file.type) {
          type = file.type.split('/')[0];
        } else if (isHeic) {
          type = 'image';
        }

        return {
          file,
          name,
          type,
          size: file.size,
          format: format || (file.type ? file.type.split('/')[1] : 'unknown'),
          isHeic,
        };
      });
      this.uploadResults = [];
      this.error = null;
    },

    async convertHeicToJpeg(file) {
      try {
        // Convertir HEIC a JPEG con alta calidad
        const blob = await heic2any({
          blob: file,
          toType: 'image/jpeg',
          quality: 0.95, // Máxima calidad (0-1)
        });

        // Crear un nuevo archivo con el mismo nombre pero extensión JPG
        const fileName = file.name.replace(/\.heic$/i, '.jpg');
        return new File([blob], fileName, { type: 'image/jpeg' });
      } catch (error) {
        console.error('Error al convertir HEIC:', error);
        throw new Error('Error al convertir imagen HEIC a JPEG');
      }
    },

    async uploadFiles() {
      try {
        this.uploadResults = [];
        this.error = null;
        this.isConverting = false;

        // Procesar cada archivo
        for (const element of this.selectedFiles) {
          try {
            let fileToUpload = element.file;
            let fileFormat = element.format;

            // Convertir HEIC si es necesario
            if (element.isHeic) {
              this.isConverting = true;
              fileToUpload = await this.convertHeicToJpeg(element.file);
              fileFormat = 'jpeg';
              this.isConverting = false;
            }

            // Subir el archivo
            const resImages = await storeFile.uploaderFile({
              file: fileToUpload,
              location: `${this.id_create}/${element.name}-${Date.now()}`,
            });

            this.uploadResults.push({
              file: element.name,
              originalFormat: element.format,
              uploadedFormat: fileFormat,
              response: resImages,
            });
          } catch (fileError) {
            // Manejo individual de errores por archivo
            this.uploadResults.push({
              file: element.name,
              format: element.format,
              error: fileError.message || 'Error desconocido',
            });
          }
        }
      } catch (error) {
        console.error('Error general:', error);
        this.error = typeof error === 'object' ? JSON.stringify(error) : error.toString();
        this.isConverting = false;
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
