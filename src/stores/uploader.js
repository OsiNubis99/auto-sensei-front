import axios from '@/axios';
import { defineStore } from 'pinia';

export const useStoreFile = defineStore('useStoreFile', {
  state: () => ({
    url: [],
    progressUpload: Number(0),
  }),
  actions: {
    uploaderFile(params) {
      alert('subiendo archivo');
      let data = new FormData();
      data.append('file', params.file);
      data.append('location', params.location);

      return new Promise((resolve, reject) => {
        axios
          .post('/uploader/create', data, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
            onUploadProgress: progressEvent => {
              this.progressUpload = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            },
            transformRequest: [
              function (data, headers) {
                return data;
              },
            ],
            transformResponse: [
              function (data) {
                return data;
              },
            ],
          })
          .then(response => {
            alert('archivo subido');
            console.log('response uploader', response);
            resolve(response);
          })
          .catch(error => {
            alert(JSON.stringify(error));
            console.log('error uploader', error);
            // Mejorar el manejo de errores para evitar undefined
            const errorData = {
              message: error.message || 'Error desconocido',
              status: error.response?.status || 'sin respuesta',
              details: error.response?.data || {},
            };
            reject(errorData);
          });
      });
    },
  },
});
