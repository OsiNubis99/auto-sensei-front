import { defineStore } from "pinia";


export const ModalVerifyPhone = defineStore("modalVerifyPhone", {
    state: () => ({
        isActive: false,
    }),
    actions: {
        openModal({ isActive, data }) {
            this.isActive = isActive
        },
        closeModal(params) {
            this.isActive = params
        },
    },
});