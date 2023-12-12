import axios from "@/axios";
import { defineStore } from "pinia";

export const useUserStore = defineStore("useUserStore", {
    state: () => ({
        userData: {},
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
    },
});