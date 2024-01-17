import { defineStore } from "pinia";


export const ModalLaunch = defineStore("modalLaunch", {
    state: () => ({
        isActive: false,
    }),
    actions: {
        openModal(params) {
            console.log('hola', params)
            this.isActive = params
        },
        closeModal(params) {
            this.isActive = params
        },
    },
});