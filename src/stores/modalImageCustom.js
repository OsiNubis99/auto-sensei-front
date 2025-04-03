import { defineStore } from "pinia";

export const ModalImageCustom = defineStore("modalImageCustom", {
  state: () => ({
    isActive: false,
    img: null,
    typeImg: null,
  }),
  actions: {
    openModal({ active, img, type }) {
      this.isActive = active;
      this.img = img;
      this.typeImg = type;
    },
    closeModal(params) {
      this.isActive = params;
    },
  },
});
