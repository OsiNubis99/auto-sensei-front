import { defineStore } from "pinia";


export const ModalGuidePhotos = defineStore("modalGuidePhotos", {
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