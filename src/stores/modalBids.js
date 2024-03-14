import { defineStore } from "pinia";


export const ModalBids = defineStore("modalBids", {
    state: () => ({
        isActive: false,
        data: null,
        finally: null,
        from: null,
        details:false,

    }),
    actions: {
        openModal(params) {
            this.isActive = params.active
            this.data = params.data
            this.from = params.from
            this.details = params.details
        },
        closeModal(params) {
            this.isActive = params
            this.data = null
            this.finally = null
            this.from = null
            this.details = null

        },
    },
});