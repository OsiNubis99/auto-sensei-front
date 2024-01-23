import { defineStore } from "pinia";


export const ModalImageCustom = defineStore("modalImageCustom", {
    state: () => ({
        isActive: false,
        img: null,
        typeImg: null
    }),
    actions: {
        openModal({ active, img, type }) {
            console.log('active', active)
            console.log('img', img)
            this.isActive = active
            this.img = img
            this.typeImg = type
        },
        closeModal(params) {
            console.log('closeModal', params)
            this.isActive = params
           /*  this.img = null
            this.typeImg = null */
        },
    },
});