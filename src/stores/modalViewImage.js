import { defineStore } from "pinia";


export const ModalViewImage = defineStore("modalViewImage", {
    state: () => ({
        isActive: false,
        img: null,
        typeImg: ''
    }),
    actions: {
        openModal({ active, img, type }) {
            this.isActive = active
            this.img = img
            this.typeImg = type
        },
        closeModal(params) {
            this.isActive = params
        },
    },
});