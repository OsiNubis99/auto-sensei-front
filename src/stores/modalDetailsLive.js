import { defineStore } from "pinia";


export const ModalDetailsLive = defineStore("modalDetailsLive", {
    state: () => ({
        isActive: false,
        data: null,

    }),
    actions: {
        openModal(params) {
             
            this.isActive = params.isActive
            this.data = params.data
        },
        closeModal(params) {
            this.isActive = params
            this.data = null

        },
    },
});