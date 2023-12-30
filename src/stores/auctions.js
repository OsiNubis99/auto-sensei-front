import axios from "@/axios";
import { defineStore } from "pinia";
import moment from 'moment';
export const useAuctionStore = defineStore("useAuctionStore", {
    state: () => ({
        data: {},
    }),
    actions: {
        index(payload) {
            return new Promise((resolve, reject) => {
                axios
                    .get("/auctions")
                    .then((response) => {
                        console.log('PERRRAAA', response)
                        response.data.map((date, index) => {
                            date.createHour = moment(date.createdAt).format("HH:mm A")
                            date.createDay = moment(date.createdAt).format('LL');
                            return date
                        })
                        this.data = response.data
                        resolve(response);
                    })
                    .catch((error) => {
                        console.log('error', error)
                        reject(error);
                    });
            });
        },
        create(data) {
            return new Promise((resolve, reject) => {
                axios.post("/auctions", data)
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
                    .put(`/auctions/${uuid}`, payload)
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
                    .delete(`/auctions/${uuid}`)
                    .then((response) => {
                        console.log('response', response)
                        resolve(response);
                    })
                    .catch((error) => {
                        reject(error);
                    });
            });
        },
        activeAutions(uuid) {
            return new Promise((resolve, reject) => {
                axios
                    .delete(`/auctions/activate/${uuid}`)
                    .then((response) => {
                        console.log('activate', response)
                        resolve(response);
                    })
                    .catch((error) => {
                        reject(error);
                    });
            });
        },
        inactivateAutions(uuid) {
            return new Promise((resolve, reject) => {
                axios
                    .delete(`/auctions/inactivate/${uuid}`)
                    .then((response) => {
                        console.log('inactivate', response)
                        resolve(response);
                    })
                    .catch((error) => {
                        reject(error);
                    });
            });
        },
    },
});

