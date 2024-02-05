import { defineStore } from "pinia";


export const ModalImageDetails = defineStore("modalImageDetails", {
    state: () => ({
        isActive: false,
        data: null,
        index: null

    }),
    actions: {
        openModal(params) {
            console.log('params', params)
            this.isActive = params.isActive
            this.data = params.data
            this.index = params.index
        },
        closeModal(params) {
            this.isActive = params
            this.data = null
            this.index = null

        },
    },
});