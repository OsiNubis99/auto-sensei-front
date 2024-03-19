import { defineStore } from "pinia";


export const ModalUserDetails = defineStore("ModalUserDetails", {
    state: () => ({
        isActive: false,
        datauser: null
    }),
    actions: {
        openModal({ isActive, data }) {

            this.isActive = isActive
            this.datauser = data
            console.log('this.dataAutiont', this.datauser)
        },
        closeModal(params) {
            this.isActive = params
            this.datauser = null
        },
    },
});