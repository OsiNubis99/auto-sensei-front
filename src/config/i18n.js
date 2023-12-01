import { createI18n } from "vue-i18n";
import en from "../locales/en-us";
import es from "../locales/es-es";
const messages = {
  en: en,
  es: es,
};

const i18n = createI18n({
  locale: "en",
  messages,
});
export default i18n;
