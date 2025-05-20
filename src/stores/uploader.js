import axios from '@/axios';
import { defineStore } from 'pinia';

export const useStoreFile = defineStore('useStoreFile', {
  state: () => ({
    url: [],
    progressUpload: Number(0),
  }),
  actions: {
    uploaderFile(params) {
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
                // Haz lo que quieras para transformar data
                return data;
              },
            ],

            // `transformResponse` permite que se realicen cambios en los datos de respuesta antes
            //  que pasen a then/catch
            transformResponse: [
              function (data) {
                // Haz lo que quieras para transformar data
                return data;
              },
            ],
          })
          .then(response => {
            resolve(response);
          })
          .catch(error => {
            reject(error);
          });
      });
    },
  },
});
