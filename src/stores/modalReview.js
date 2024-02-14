import { defineStore } from "pinia";


export const ModalReview = defineStore("ModalReview", {
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
            this.dataAutiont = null
        },
    },
});