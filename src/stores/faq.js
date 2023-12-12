import axios from "@/axios";
import { defineStore } from "pinia";
import moment from 'moment';
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
                        response.data.map((date, index) => {
                            date.createdAt = moment(date.createdAt).format('YYYY-MM-DD');
                            date.updatedAt = moment(date.updatedAt).format('YYYY-MM-DD');
                            return date
                        })
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
                axios.post("/faq", data)
                    .then((response) => {
                        console.log('create', response)
                        resolve(response);
                    })
                    .catch((error) => {
                        reject(error);
                    });
            });
        },
        update({ uuid, payload }) {
            console.log('uuid', uuid)
            console.log('payload', payload)
            return new Promise((resolve, reject) => {
                axios
                    .put(`/faq/${uuid}`, payload)
                    .then((response) => {
                        console.log('response', response)
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
