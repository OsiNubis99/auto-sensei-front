import { defineStore } from "pinia";


export const ModalAutoBid = defineStore("modalAutoBid", {
    state: () => ({
        isActive: false,
        data: null,

    }),
    actions: {
        openModal(params) {
            console.log('modalAutoBid', params)
            this.isActive = params.active
            this.data = params.data
        },
        closeModal(params) {
            console.log('closeModal', params)
            this.isActive = params
            this.data = null

        },
    },
});