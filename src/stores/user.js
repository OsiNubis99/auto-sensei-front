import axios from "@/axios";
import { defineStore } from "pinia";

export const useUserStore = defineStore("useUserStore", {
    state: () => ({
        userData: {},
        userDealers: [],
        userSellers: [],
        valorationes: null
    }),
    actions: {
        userData(payload) {
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
                        resolve(response);
                    })
                    .catch((error) => {
                        reject(error);
                    });
            });
        },
        createUser(data) {
            return new Promise((resolve, reject) => {
                axios
                    .post("/user", data)
                    .then((response) => {
                        resolve(response);
                    })
                    .catch((error) => {
                        reject(error);
                    });
            });
        },
        deleteUser(uuid) {
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
                    .patch(`/user/activate/${uuid}`)
                    .then((response) => {
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
                    .patch(`/user/inactivate/${uuid}`)
                    .then((response) => {
                        resolve(response);
                    })
                    .catch((error) => {
                        reject(error);
                    });
            });
        },
        updateUser(data) {
            return new Promise((resolve, reject) => {
                axios
                    .put("/user", data)
                    .then((response) => {
                        resolve(response);
                    })
                    .catch((error) => {
                        reject(error);
                    });
            });
        },
        getValorations(payload) {
            const config = {
                headers: {
                    Accept: 'application/json',
                    Authorization: `Bearer ${payload.token}`

                }
            };
            return new Promise((resolve, reject) => {
                axios
                    .get("/user/valorations", config)
                    .then((response) => {
                        this.valorationes = response.data
                        resolve(response);
                    })
                    .catch((error) => {
                        reject(error);
                    });
            });
        },
        getValidation(data) {
            return new Promise((resolve, reject) => {
                axios
                    .post("/user/send-validation-code",data)
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