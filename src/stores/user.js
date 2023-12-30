import axios from "@/axios";
import { defineStore } from "pinia";

export const useUserStore = defineStore("useUserStore", {
    state: () => ({
        userData: {},
        userDealers: [],
        userSellers: []
    }),
    actions: {
        userData(payload) {
            console.log('userData', payload)
            const config = {
                headers: {
                    Accept: 'application/json',
                    Authorization: `Bearer ${payload.token}`
                }
            };
            return new Promise((resolve, reject) => {
                axios
                    .put("/user", payload.payloadData, config,)
                    .then((response) => {
                        console.log('response', response)
                        resolve(response);
                    })
                    .catch((error) => {
                        console.log('error', error)
                        reject(error);
                    });
            });
        },
        createUser(data) {
            console.log('createUser', createUser)
            return new Promise((resolve, reject) => {
                axios
                    .post("/user/register", data)
                    .then((response) => {
                        resolve(response);
                    })
                    .catch((error) => {
                        reject(error);
                    });
            });
        },
        deleteUser(uuid) {
            console.log('deleteUser', uuid)
            return new Promise((resolve, reject) => {
                axios
                    .delete(`/user/${uuid}`)
                    .then((response) => {
                        resolve(response);
                    })
                    .catch((error) => {
                        reject(error);
                    });
            });
        },
        getUserDealers() {
            return new Promise((resolve, reject) => {
                axios
                    .get("/user/dealers")
                    .then((response) => {
                        console.log('USER DEALERS', response)
                        this.userDealers = response
                        resolve(response);
                    })
                    .catch((error) => {
                        reject(error);
                    });
            });
        },
        getUserSellers() {
            return new Promise((resolve, reject) => {
                axios
                    .get("/user/sellers")
                    .then((response) => {
                        console.log('pepitooooooooo', response)
                        this.userSellers = response
                        resolve(response);
                    })
                    .catch((error) => {
                        reject(error);
                    });
            });
        },
        activeUser(uuid) {
            return new Promise((resolve, reject) => {
                axios
                    .get(`/user/activate/${uuid}`)
                    .then((response) => {
                        console.log('activate', response)
                        resolve(response);
                    })
                    .catch((error) => {
                        reject(error);
                    });
            });
        },
        inactivateUser(uuid) {
            return new Promise((resolve, reject) => {
                axios
                    .get(`/user/inactivate/${uuid}`)
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