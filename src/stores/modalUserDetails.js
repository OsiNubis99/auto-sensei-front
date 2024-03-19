import { defineStore } from "pinia";


export const ModalUserDetails = defineStore("ModalUserDetails", {
    state: () => ({
        isActive: false,
        datauser: null
    }),
    actions: {
        openModal({ isActive, data }) {

            this.isActive = isActive
            this.dataAutiont = data
            console.log('this.dataAutiont', this.dataAutiont)
        },
        closeModal(params) {
            this.isActive = params
            this.dataAutiont = null
        },
    },
});