import axios from "@/axios";
import { defineStore } from "pinia";
import moment from 'moment';
import { enumState } from "../utils/auction-status.enum";
import { useAuthStore } from "@/stores/auth";
export const useAuctionStore = defineStore("useAuctiontore", {
    state: () => ({
        data: {},
        draft: [],
        unapproved: [],
        upcoming: [],
        live: [],
        completed: [],
        completedDelaer: [],
        canceled: [],
        currentBids: [],
        autionById: [],
        stats: null
    }),
    actions: {
        index(payload) {
            return new Promise((resolve, reject) => {
                axios
                    .post("/auction/find-all")
                    .then((response) => {
                        let auth = useAuthStore()
                        console.log('auth', auth.userData)
                        console.log('auction', response)
                        response.data.map((date, index) => {
                            date.createHour = moment(date.createdAt).format("HH:mm A")
                            date.createDay = moment(date.createdAt).format('LL')
                            date.dropOffDateForma = moment(date.dropOffDate).format('LL')
                            return date
                        })
                        this.draft = response.data.filter((item) => item.status == enumState.draft)
                        this.unapproved = response.data.filter((item) => item.status == enumState.unapproved)
                        this.upcoming = response.data.filter((item) => item.status == enumState.upcoming || item.status == enumState.unapproved)
                        this.live = response.data.filter((item) => item.status == enumState.live)
                        this.completed = response.data.filter((item) =>
                            item.status == enumState.completed ||
                            item.status == enumState.reviewed ||
                            item.status == enumState.bidsCompleted ||
                            item.status == enumState.dropOff
                        )
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
        indexCurrentBids(payload) {
            return new Promise((resolve, reject) => {
                axios
                    .post("/auction/find/current-bids")
                    .then((response) => {
                        console.log('current-bids', response)
                        this.currentBids = response.data.filter((item) => item.status == enumState.live)
                        this.completedDelaer = response.data.filter((item) =>
                            item.status == enumState.completed ||
                            item.status == enumState.reviewed ||
                            item.status == enumState.bidsCompleted ||
                            item.status == enumState.dropOff
                        )
                        console.log('this.completed', this.completedDelaer)
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
                axios.post("/auction", data)
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
                    .put(`/auction/${uuid}`, payload)
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
                    .delete(`/auction/${uuid}`)
                    .then((response) => {
                        console.log('response', response)
                        resolve(response);
                    })
                    .catch((error) => {
                        reject(error);
                    });
            });
        },
        getAutionById({ uuid }) {
            return new Promise((resolve, reject) => {
                axios
                    .get(`/auction/${uuid}`)
                    .then((response) => {
                        this.autionById = response.data
                        console.log('autionById', response)
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
                    .patch(`/auction/aprove/${uuid}`)
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
                    .patch(`/auction/reject/${uuid}`)
                    .then((response) => {
                        console.log('inactivate', response)
                        resolve(response);
                    })
                    .catch((error) => {
                        reject(error);
                    });
            });
        },
        autionsBit({ uuid, payload }) {
            console.log('uuid', uuid)
            console.log('payload', payload)
            return new Promise((resolve, reject) => {
                axios
                    .post(`/auction/bid/${uuid}`, payload)
                    .then((response) => {
                        console.log('autionsBit', response)
                        resolve(response);
                    })
                    .catch((error) => {
                        reject(error);
                    });
            });
        },
        autionsCancel(uuid) {
            return new Promise((resolve, reject) => {
                axios
                    .patch(`/auction/cancel/${uuid}`)
                    .then((response) => {
                        console.log('aution cancel', response)
                        resolve(response);
                    })
                    .catch((error) => {
                        reject(error);
                    });
            });
        },
        autionsDecline(uuid) {
            return new Promise((resolve, reject) => {
                axios
                    .patch(`/auction/decline/${uuid}`)
                    .then((response) => {
                        console.log('aution cancel', response)
                        resolve(response);
                    })
                    .catch((error) => {
                        reject(error);
                    });
            });
        },
        acceptAutions(uuid) {
            return new Promise((resolve, reject) => {
                axios
                    .patch(`/auction/accept/${uuid}`)
                    .then((response) => {
                        console.log('aution cancel', response)
                        resolve(response);
                    })
                    .catch((error) => {
                        reject(error);
                    });
            });
        },
        autionsReview({ uuid, payload }) {
            console.log('uuid', uuid)
            console.log('payload', payload)
            return new Promise((resolve, reject) => {
                axios
                    .post(`/auction/valorate/${uuid}`, payload)
                    .then((response) => {
                        console.log('valorate', response)
                        resolve(response);
                    })
                    .catch((error) => {
                        reject(error);
                    });
            });
        },
        getStats() {
            return new Promise((resolve, reject) => {
                axios
                    .get(`/user/stats`)
                    .then((response) => {
                        console.log('stats', response)
                        this.stats = response.data
                        resolve(response);
                    })
                    .catch((error) => {
                        reject(error);
                    });
            });
        },
        autionsAddRemindMe({ uuid }) {
            return new Promise((resolve, reject) => {
                axios
                    .patch(`/auction/${uuid}/add-remind`)
                    .then((response) => {
                        console.log('add-remind', response)
                        resolve(response);
                    })
                    .catch((error) => {
                        reject(error);
                    });
            });
        },
        autionsCancelRemindMe({ uuid }) {
            return new Promise((resolve, reject) => {
                axios
                    .patch(`/auction/${uuid}/remove-remind`)
                    .then((response) => {
                        console.log('add-cancel', response)
                        resolve(response);
                    })
                    .catch((error) => {
                        reject(error);
                    });
            });
        },
    },
});

