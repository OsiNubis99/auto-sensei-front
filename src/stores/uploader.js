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
            console.log('DATA FILE POST', data)
            return new Promise((resolve, reject) => {
                console.log('data', data)
                axios
                    .post("/uploader/create", data, {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        },
                    })
                    .then((response) => {
                        console.log('response', response)
                        resolve(response);
                    })
                    .catch((error) => {
                        console.log("ERROR >> ", error);
                        reject(error);
                    });
            });
        },
    },
});
