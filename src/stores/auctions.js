import axios from "@/axios";
import { defineStore } from "pinia";
import moment from 'moment';
import { enumState } from "../utils/auction-status.enum";
export const useAuctionStore = defineStore("useAuctionStore", {
    state: () => ({
        data: {},
        draft: [],
        unapproved: [],
        upcoming: [],
        live: [],
        completed: [],
        canceled: [],
    }),
    actions: {
        index(payload) {
            return new Promise((resolve, reject) => {
                axios
                    .get("/auctions")
                    .then((response) => {
                        console.log('auctions', response)
                        response.data.map((date, index) => {
                            date.createHour = moment(date.createdAt).format("HH:mm A")
                            date.createDay = moment(date.createdAt).format('LL');
                            return date
                        })
                        this.draft = response.data.filter((item) => item.status == enumState.draft)
                        this.unapproved = response.data.filter((item) => item.status == enumState.unapproved)
                        this.upcoming = response.data.filter((item) => item.status == enumState.upcoming)
                        this.live = response.data.filter((item) => item.status == enumState.live)
                        this.completed = response.data.filter((item) => item.status == enumState.completed)
                        this.canceled = response.data.filter((item) => item.status == enumState.canceled)

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
                    .get(`/auctions/activate/${uuid}`)
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
                    .get(`/auctions/inactivate/${uuid}`)
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

