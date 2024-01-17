import { defineStore } from "pinia";


export const ModalViewImage = defineStore("modalViewImage", {
    state: () => ({
        isActive: false,
        img: null,
        typeImg: ''
    }),
    actions: {
        openModal({ active, img, type }) {
            console.log('active', active)
            console.log('img', img)
            console.log('type', type)
            this.isActive = active
            this.img = img
            this.typeImg = type
        },
        closeModal(params) {
            console.log('closeModal', params)
            this.isActive = params
        },
    },
});