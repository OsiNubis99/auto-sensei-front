
import { useAuthStore } from "@/stores/auth";

const install = (app) => {
    app.config.globalProperties.$auth = useAuthStore();
};

export { install as default }
