import { defineStore } from "pinia";
import en from "../locales/en-us";
import es from "../locales/es-es";
export const useTranslationsStore = defineStore("translations", {
  state: () => ({
    idioma: "en",
    textos: {
      es: es,
      en: en,
    },
  }),
  getters: {
    textoActual(state) {
      return state.textos[state.idioma];
    },
  },
  actions: {
    cambiarIdioma(idioma) {
      this.idioma = idioma;
    },
  },
});
