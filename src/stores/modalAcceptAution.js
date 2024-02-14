import { defineStore } from "pinia";


export const ModalAcceptAution = defineStore("modalAcceptAution", {
    state: () => ({
        isActive: false,
        dataAutiont: null
    }),
    actions: {
        openModal({ isActive, data }) {
            this.isActive = isActive
            this.dataAutiont = data
        },
        closeModal(params) {
            this.isActive = params
        },
    },
});