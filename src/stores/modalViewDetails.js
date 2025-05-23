import { defineStore } from "pinia";


export const ModalViewDetails = defineStore("modalViewDetails", {
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