import { defineStore } from "pinia";


export const ModalBids = defineStore("modalBids", {
    state: () => ({
        isActive: false,
        data: null,
        finally: null,
        from: null

    }),
    actions: {
        openModal(params) {
            this.isActive = params.active
            this.data = params.data
            this.from = params.from
        },
        closeModal(params) {
            this.isActive = params
            this.data = null
            this.finally = null
            this.from = null

        },
    },
});