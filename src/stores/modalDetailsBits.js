import { defineStore } from "pinia";


export const ModalDetailsBits = defineStore("modalDetailsBits", {
    state: () => ({
        isActive: false,
        aution: null,
        typeImg: ''
    }),
    actions: {
        openModal({ active, data }) {
            this.isActive = active
            this.aution = data
        },
        closeModal(params) {
            this.isActive = params
            this.aution = null
        },
    },
});