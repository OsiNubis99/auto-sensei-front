import axios from "@/axios";
import { defineStore } from "pinia";

export const useFaqStore = defineStore("faqStore", {
    state: () => ({
        data: [],
        total: 0,
        current_page: 1,
        last_page: 1,
        to: 0,
        from: 1,
        per_page: 10,
    }),
    actions: {
        index(params) {
            return new Promise((resolve, reject) => {
                axios.get("/faq", { params })
                    .then((response) => {
                        console.log('FAQ', response.data)
                        this.data = response.data
                        resolve(response);
                    })
                    .catch((error) => {
                        reject(error);
                    });
            });
        },
        create(data) {
            return new Promise((resolve, reject) => {
                axios.post("/faq/create-faq", data)
                    .then((response) => {
                        console.log('create', response)
                        resolve(response);
                    })
                    .catch((error) => {
                        reject(error);
                    });
            });
        },
        delete(uuid) {
            return new Promise((resolve, reject) => {
                axios
                    .delete(`/faq/${uuid}`)
                    .then((response) => {
                        console.log('response', response)
                        resolve(response);
                    })
                    .catch((error) => {
                        reject(error);
                    });
            });
        },
    },
});
