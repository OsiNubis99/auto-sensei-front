import axios from "@/axios";
import { defineStore } from "pinia";

export const useStoreFile = defineStore("useStoreFile", {
    state: () => ({
        url: [],
    }),
    actions: {
        uploaderFile(params) {
            console.log('params', params)
            let data = new FormData();
            data.append("file", params.file);
            data.append("location", params.location);
           
            return new Promise((resolve, reject) => {
                axios
                    .post(params.route, data, {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        },
                    })
                    .then((response) => {
                        console.log('uploader/create', response)
                        resolve(response);
                    })
                    .catch((error) => {
                        console.log('error', error)
                       
                        
                        reject(error);
                    });
            });
        },
    },
});
