import { defineStore } from "pinia";

export const ModalUserDetails = defineStore("ModalUserDetails", {
  state: () => ({
    isActive: false,
    datauser: null,
  }),
  actions: {
    openModal({ isActive, data }) {
      this.isActive = isActive;
      this.datauser = data;
    },
    closeModal(params) {
      this.isActive = params;
      this.datauser = null;
    },
  },
});
