import { defineStore } from "pinia";


export const ModalBids = defineStore("modalBids", {
    state: () => ({
        isActive: false,
        data: null,
        finally: null,
    }),
    actions: {
        openModal(params) {
            console.log('params', params)
            this.isActive = params.active
            this.data = params.data
        },
        closeModal(params) {
            this.isActive = params
        },
    },
});